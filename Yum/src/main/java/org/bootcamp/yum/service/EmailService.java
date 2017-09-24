/*
 * Copyright (C) 2017 JR Technologies.
 * This file is part of Yum.
 * 
 * Yum is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * 
 * Yum is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with Yum. 
 * If not, see <http://www.gnu.org/licenses/>.
 */
package org.bootcamp.yum.service;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import javax.mail.internet.MimeMessage;
import javax.mail.internet.InternetAddress;
import javax.transaction.Transactional;

import org.bootcamp.ApplicationProperties;
import org.bootcamp.yum.api.model.DailyOrderSummary;
import org.bootcamp.yum.api.model.FoodWithQuantity;
import org.bootcamp.yum.api.model.UserOrder;
import org.bootcamp.yum.data.entity.DailyMenu;
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.Food;
import org.bootcamp.yum.data.entity.OrderItem;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private MailSender mailSender;

    @Autowired
    private JavaMailSender mailHtmlSender;

    @Autowired
    private ApplicationProperties applicationProperties;

    @Autowired
    private UserRepository userRep;

    @Autowired
    private FoodRepository foodRep;

    @Autowired
    private ChefOrdersService chefService;

    @Autowired
    private SettingsRepository settingsRep;
    
   

    private static final org.slf4j.Logger log = LoggerFactory.getLogger(EmailService.class);

    private void sendEmail(String sendTo, String subject, String emailBody) {
        // Prepares the message
        SimpleMailMessage message = new SimpleMailMessage();
        //message.setFrom(senderEmailAddress);
        message.setFrom(applicationProperties.getMail().getFrom());
        message.setTo(sendTo);
        message.setSubject(subject);
        message.setText(emailBody);
        mailSender.send(message);

    }

    private void sendHtmlEmail(String sendTo, String subject, String emailBody) {
        try {
            MimeMessage message = mailHtmlSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(InternetAddress.parse(sendTo));
            helper.setFrom(applicationProperties.getMail().getFrom());
            helper.setSubject(subject);
            helper.setText(emailBody, true);
            mailHtmlSender.send(message);

        } catch (AddressException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.WARNING, null, ex);
        } catch (MessagingException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.WARNING, null, ex);
        }

    }

    public void sendNewUserEmailToAllAdmins(User newUser) {

        // When a new user registers, is unapproved by default.
        // We need to let the admin know that the user is unapproved.
        // This method will send an email to each admin.
        // prepare the text of the email
        // Text ex.::
        // 
        // A new user just registered. Here are the new user details
        //     first name: <newUser.firstName>
        //      last name: <newUser.lastName>
        //          email: <newUser.email>
        // 
        // You have to approve this user so he/she can log in.
        // click on this link to approve the user:
        // http://<yumHostname>/admin/users/<newUser.id>
        StringBuilder text = new StringBuilder();
        text.append("A new user just registered. Here are the new user details\n");
        text.append("       first name: ").append(newUser.getFirstName()).append("\n");
        text.append("        last name: ").append(newUser.getLastName()).append("\n");
        text.append("            email: ").append(newUser.getEmail()).append("\n");
        text.append("\n");
        text.append("You have to approve this user so he/she can log in.\n");
        text.append("Click on this link to approve the user:\n");

        text.append(applicationProperties.getMail().getDomain()).append("/admin/users/").append(newUser.getId());

        // Iterate over a list of admin users. For each admin:
        List<User> admins = userRep.findByUserRole(UserRole.ADMIN);
        for (User admin : admins) {
            // Adds a greeting sentence to the text
            String textString = "Dear " + admin.getFirstName() + " " + admin.getLastName() + ",\r\n" + text;
            //mailSender.send(message);
            sendEmail(admin.getEmail(), "[Yum] new user registered", textString);
        }
    }

    public void sendConfirmOrderEmailToHungry(DailyOrder order, DailyMenu dailyMenu) {

        // send this email to the user associated with the order.
        // prepare the text like follow:
        // Dear <user.firtname> <user.lastname>,
        // 
        // You just placed this order for the day 01/01/2017
        //
        //    food1   qty 1 x 5 euro 
        //    food2
        //
        //    total :  15 euro
        //
        // You can modify this order until <deadline time> <date-1> by going to the link:
        // http://<yumHostname>/hungry/<week-year>/
        // 
        // Thank you for your order!
        User user = userRep.findById(order.getUserId());
        StringBuilder text = new StringBuilder();
        String currency = settingsRep.findById(1).getCurrency();
        
        LocalDate menuDate = dailyMenu.getDate();
        text.append("Dear ").append(user.getFirstName()).append(" ").append(user.getLastName()).append(",\n");
        text.append("\n");
        text.append("You just placed this order for ").append(menuDate.toString("EEEE dd MMMM YYYY")).append("\n");
        text.append("\n");
        BigDecimal total = new BigDecimal("0");
        for (OrderItem orderItem : order.getOrderItems()) {
            Food food = orderItem.getFood();
            BigDecimal price = food.getPrice();
            total = total.add(price);
            text.append("\t").append(food.getName()).append("\tqty ").append(orderItem.getQuantity()).append(" x ").append(price).append(currency+"\n");
        }
        text.append("\n");
        text.append("\ttotal : ").append(total).append(currency).append("\n");
        text.append("\n");
        Settings settings = settingsRep.findOne(1);
        text.append("You can modify this order until ").append(settings.getDeadline().toString("HH:mm")).append(", on ").append(menuDate.minusDays(settings.getDeadlineDays()).toString("EEEE dd MMMM YYYY")).append(" by going to the link:\n");

        text.append(applicationProperties.getMail().getDomain()).append("/hungry/").append(menuDate.getYear()).append("/").append(menuDate.getWeekOfWeekyear()).append("\n");

        text.append("\n");
        text.append("Thank you for your order!\n");

        sendEmail(user.getEmail(), "[Yum] Order Confirmation", text.toString());

    }

    public void sendResetPasswordLinkEmail(User user) {

        // send this email to the user that requested a password reset.
        // prepare the text like follow:
        // Dear <user.firtname> <user.lastname>,
        // 
        // You just requested your password to be reset. If that was not you, please discard this message.
        //
        // To enter your new password, please visit this link:
        // http://<yumHostname>/changepassword/<user.getResetPwdSecret()>
        // 
        // Thank you for using Yum!    
        StringBuilder text = new StringBuilder();
        text.append("Dear ").append(user.getFirstName()).append(" ").append(user.getLastName()).append(",\n");
        text.append("\n");
        text.append("You just requested your password to be reset. If that was not you, please discard this message.\n");
        text.append("\n");
        text.append("To enter your new password, please visit this link:\n");
        text.append(applicationProperties.getMail().getDomain()).append("/resetpwd/token?token=").append(user.getSecret()).append("\n");
        text.append("\n");
        DateTime creationTime = user.getSecretCreation().plusDays(1);
        text.append("The link will be active for 24 hours (until ").append(creationTime.toString("HH:mm:ss")).append(", on ").append(creationTime.toString("EEEE dd MMMM YYYY")).append(").\n");
        text.append("\n");
        text.append("Thank you for using Yum!\n");

        // Sends the email
        sendEmail(user.getEmail(), "[Yum] Password reset", text.toString());
    }

    public void sendApprovalEmail(User user) {

        // send this email to the user that requested a password reset.
        // prepare the text like follow:
        // Dear <user.firtname> <user.lastname>,
        // 
        // You just requested your password to be reset. If that was not you, please discard this message.
        //
        // To enter your new password, please visit this link:
        // http://<yumHostname>/changepassword/<user.getResetPwdSecret()>
        // 
        // Thank you for using Yum!    
        StringBuilder text = new StringBuilder();
        text.append("Dear ").append(user.getFirstName()).append(" ").append(user.getLastName()).append(",\n");
        text.append("\n");
        text.append("Your account has been activated.\n");
        text.append("You can login by going to the link:\n");
        text.append(applicationProperties.getMail().getDomain()).append("/\n");
        text.append("\n");
        text.append("Enjoy your meals on Yum!\n");

        // Sends the email
        sendEmail(user.getEmail(), "[Yum] Account activated", text.toString());
    }

    @Transactional
    public void sendOrderSummary(LocalDate day) {
        
         
        
        String dayStr = day.toString();
        DailyOrderSummary dailyOrderSummary = null;
        
        System.out.println("Email: "+ dayStr);

        try {
            dailyOrderSummary = chefService.ordersDailyDayGet(dayStr);
            //System.out.println(">>>> " + dailyOrderSummary);
        } catch (org.bootcamp.yum.api.ApiException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.INFO, "Trying to get order summary for: " + day + ", result: No menu");
            return;
        }

        StringBuilder sb = new StringBuilder();

        DateTimeFormatter fmt = DateTimeFormat.forPattern("dd/MM/yyyy");
        DateTimeFormatter fmtFull = DateTimeFormat.forPattern("EEEE dd MMMM yyyy");
        
        String formattedDate = day.toString(fmt);
        String titleDate = day.toString(fmtFull);
        DecimalFormat df = new DecimalFormat();
        df.setMaximumFractionDigits(2);
        df.setMinimumFractionDigits(2);

        String currency = settingsRep.findById(1).getCurrency();
        
        //Styles
        
        String cellAlignLeft = " style=\"text-align: left;\" ";
        String cellAlignRight = " style=\"text-align: right;\" ";
        
        //Build data
        HashMap<String, ArrayList<org.bootcamp.yum.api.model.OrderItem>> orderByFoodType = new HashMap<>();

        orderByFoodType = getFoodByType(dailyOrderSummary.getOrderItems());

        
        sb.append("<div style=\"width:100%; margin 0 auto;text-align:center; padding:0 20px;\">\n");
        sb.append("<h1>YUM orders</h1>\n");
        sb.append("<h2>" + titleDate + "</h2><br>\n\n");
        sb.append("<h2> Order Summary</h2>\n");

        sb.append("<table cellpadding=\"10\" cellspacing=\"5\" style=\"text-align:left; border-collapse: collapse; width:100%;\"   >");
        BigDecimal sumTotal = new BigDecimal(0);

        for (Map.Entry<String, ArrayList<org.bootcamp.yum.api.model.OrderItem>> entry : orderByFoodType.entrySet()) {
            String k = entry.getKey();
            ArrayList<org.bootcamp.yum.api.model.OrderItem> v = entry.getValue();

            sb.append("<tr style=\"border-bottom:1px solid #ccc;\"> <th style=\"text-align: left;\">" + k + "</th> <th  style=\"text-align: left;\">QTY</th>  <th style=\"text-align: left;\">Price</th> <th style=\"text-align: right;\">Total</th> </tr>\n");
            for (org.bootcamp.yum.api.model.OrderItem o : v) {
                Food f = foodRep.findById(o.getFoodId());

                sb.append("<tr><td>" + f.getName() + "</td> <td>" + o.getQuantity() + "</td>  <td>" + df.format(f.getPrice()) + currency + "</td> <td "+cellAlignRight+">" + df.format(f.getPrice().multiply(new BigDecimal(o.getQuantity()))) + currency + "</td> </tr>\n");
               sumTotal = sumTotal.add(f.getPrice().multiply(new BigDecimal(o.getQuantity())));
            }
        }

        sb.append("</table>\n");
        sb.append("<div style=\"text-align:right;\"><div style='display: inline-block;border-top: 2px solid #f44336; padding: 10px; font-weight:bold; '>Total: " + df.format(sumTotal) + currency + "</div></div>\n");
        sb.append("<br><br>");

        
        // Orders by user
        
        sb.append("<h2>Orders by user</h2>");
        sb.append("<table cellpadding=\"10\" cellspacing=\"5\" style=\"text-align:left; border-collapse: collapse; width:100%; \"  >");
        sb.append("<tr style=\"border-bottom:1px solid #ccc;\">");
        sb.append("<th style=\"text-align: left;\">Full name</th> <th style=\"text-align: left;\">Qty.</th><th style=\"text-align: left;\">Meal</th>  <th style=\"text-align: left;\">Qty.</th><th style=\"text-align: left;\">Salad</th> <th style=\"text-align: left;\">Qty.</th><th style=\"text-align: left;\">Drink</th> <th style=\"text-align: right;\">Total</th> </tr>\n");

        
        for (UserOrder userOrder : dailyOrderSummary.getUserOrders()) {
            sumTotal = new BigDecimal(0);
            orderByFoodType = getFoodByType(userOrder.getOrderItems());
            
            //get max row size
            int maxRows = 0;
            for (Map.Entry<String, ArrayList<org.bootcamp.yum.api.model.OrderItem>> entry : orderByFoodType.entrySet()) {
                ArrayList<org.bootcamp.yum.api.model.OrderItem> v = entry.getValue();
                if(maxRows<v.size()){
                    maxRows = v.size();
                }            
            }
            
            sb.append("<tr style=\"border-bottom:1px solid #ccc;\">\n");

            if (sumTotal.compareTo(new BigDecimal(0)) == 0) {
                sb.append("<td>" + userOrder.getFirstName() + " " + userOrder.getLastName() + "</td>");
            }

            
            ArrayList<String> foodTypes = new ArrayList<>(Arrays.asList("MAIN", "SALAD", "DRINK"));
            
            for( String foodType : foodTypes){
            
                sb.append("\n<td colspan=\"2\"><table cellpadding=\"10\" cellspacing=\"5\" style=\"text-align:left; \"   >\n");
                ArrayList<org.bootcamp.yum.api.model.OrderItem> meals = orderByFoodType.get(foodType);
                if (meals != null) {
                    for (org.bootcamp.yum.api.model.OrderItem meal : meals) {
                        Food f = foodRep.findById(meal.getFoodId());
                        sb.append("<tr><td>" + meal.getQuantity() + "</td><td>" + f.getName() + "</td></tr>\n");
                        sumTotal = sumTotal.add(f.getPrice().multiply(new BigDecimal(meal.getQuantity())));
                    }
                } else {
                    sb.append("<tr><td></td></tr>\n");
                }
                sb.append("</table></td>\n");
            }
         

            sb.append("<td "+cellAlignRight+">"+df.format(sumTotal) + currency+"</td> ");
            sb.append("</tr>\n");
            

        }

        sb.append("</table>");
        sb.append("</div>");
        
        //System.out.println(sb);
       String emails = settingsRep.findById(1).getReportEmail();
       if(emails !=null && !emails.isEmpty()){
            ArrayList<String> emailsTo = new ArrayList<>(Arrays.asList( emails.split(";")));   
            for(String emailTo : emailsTo){
            // sendHtmlEmail(emailTo, "Order summary for " + formattedDate, sb.toString());
            }
       }
        
       

    }

    private HashMap<String, ArrayList<org.bootcamp.yum.api.model.OrderItem>> getFoodByType(List<org.bootcamp.yum.api.model.OrderItem> orderItems) {

        HashMap<String, ArrayList<org.bootcamp.yum.api.model.OrderItem>> orderByFoodType = new HashMap<>();

        for (org.bootcamp.yum.api.model.OrderItem orderItem : orderItems) {
            Food food = foodRep.findById(orderItem.getFoodId());
            String foodType = food.getFoodType().toString();

            if (!orderByFoodType.containsKey(foodType)) {
                ArrayList<org.bootcamp.yum.api.model.OrderItem> fwq = new ArrayList<>();
                fwq.add(orderItem);
                orderByFoodType.put(foodType, fwq);
            } else {
                orderByFoodType.get(foodType).add(orderItem);
            }

        }

        return orderByFoodType;
    }

}
