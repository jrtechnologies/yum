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

import freemarker.core.ParseException;
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
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import freemarker.template.Configuration;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import java.io.IOException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;

@Service
public class EmailService {

    @Autowired
    private MailSender mailSender;

    @Autowired
    private JavaMailSender mailHtmlSender;

    @Autowired
    Configuration freeMarkerConfig;

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

    public String getContentFromTemplate(Map<String, Object> model, String templateFileName) {
        StringBuffer content = new StringBuffer();

        try {
            freeMarkerConfig.setClassForTemplateLoading(this.getClass(), "/templates");
            content.append(FreeMarkerTemplateUtils
                    .processTemplateIntoString(freeMarkerConfig.getTemplate(templateFileName), model));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return content.toString();
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

    private void sendHtmlTemplateEmail(String sendTo, String subject, Map<String, Object> model, String templateFileName) {
        try {
            MimeMessage message = mailHtmlSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(InternetAddress.parse(sendTo));
            helper.setFrom(applicationProperties.getMail().getFrom());
            helper.setSubject(subject);

            StringBuilder content = new StringBuilder();
            freeMarkerConfig.setClassForTemplateLoading(this.getClass(), "/templates");
            content.append(FreeMarkerTemplateUtils
                    .processTemplateIntoString(freeMarkerConfig.getTemplate(templateFileName), model));

            helper.setText(content.toString(), true);
            helper.addInline("yumLogo", new ClassPathResource("templates/images/Yum-logo-small.png"));
            mailHtmlSender.send(message);

        } catch (AddressException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.WARNING, null, ex);
        } catch (MessagingException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.WARNING, null, ex);
        } catch (MalformedTemplateNameException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException | TemplateException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(EmailService.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public void sendNewUserEmailToAllAdmins(User newUser) {
        
        // create hashmap for the placeholders of the template
        Map<String, Object> model = new HashMap<>();
        model.put("firstName", newUser.getFirstName());
        model.put("lastName", newUser.getLastName());
        model.put("email", newUser.getEmail());
        model.put("link", applicationProperties.getMail().getDomain() + "/admin/users/" + newUser.getId());
        List<User> admins = userRep.findByUserRole(UserRole.ADMIN);
        for (User admin : admins) {
            model.put("adminFirstName", admin.getFirstName());
            model.put("adminLastName", admin.getLastName());
            sendHtmlTemplateEmail(admin.getEmail(), "[Yum] New user registered", model, "user-registered.html");
        }
    }

    public void sendConfirmOrderEmailToHungry(DailyOrder order, DailyMenu dailyMenu) {

        User user = userRep.findById(order.getUserId());
        LocalDate menuDate = dailyMenu.getDate();
        Settings settings = settingsRep.findOne(1);

        // create hashmap for the placeholders of the template
        Map<String, Object> model = new HashMap<>();
        model.put("firstName", user.getFirstName());
        model.put("lastName", user.getLastName());
        model.put("menuDate", menuDate.toString("EEEE dd MMMM YYYY"));
        model.put("link", applicationProperties.getMail().getDomain() + "/hungry/" + menuDate.getYear() + "/" + menuDate.getWeekOfWeekyear());
        model.put("orderItems", order.getOrderItems());
        model.put("currency", settings.getCurrency());
        BigDecimal total = new BigDecimal("0");
        int totalQuantity =0;
        for (OrderItem orderItem : order.getOrderItems()) {
            Food food = orderItem.getFood();
            int quantity = orderItem.getQuantity();
            BigDecimal price = food.getPrice().multiply(new BigDecimal(quantity));
            total = total.add(price);
            totalQuantity += quantity;
        }
        model.put("total", total);
        model.put("totalQuantity", totalQuantity);
        model.put("deadline", settings.getDeadline().toString("HH:mm") + ", on " + menuDate.minusDays(settings.getDeadlineDays()).toString("EEEE dd MMMM YYYY"));
        model.put("balance", user.getBalance());
        sendHtmlTemplateEmail(user.getEmail(), "[Yum] Order Confirmation", model, "order.html");

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
  
        Settings settings = settingsRep.findOne(1);

        // create hashmap for the placeholders of the template
        Map<String, Object> model = new HashMap<>();
        model.put("firstName", user.getFirstName());
        model.put("lastName", user.getLastName());
        model.put("link", applicationProperties.getMail().getDomain());
        
        // Sends the email
        sendHtmlTemplateEmail(user.getEmail(), "[Yum] Account activated", model, "user-approval.html");
        
    }

//    public void sendApprovalEmail(User user) {
//
//        // send this email to the user that requested a password reset.
//        // prepare the text like follow:
//        // Dear <user.firtname> <user.lastname>,
//        // 
//        // You just requested your password to be reset. If that was not you, please discard this message.
//        //
//        // To enter your new password, please visit this link:
//        // http://<yumHostname>/changepassword/<user.getResetPwdSecret()>
//        // 
//        // Thank you for using Yum!    
//        StringBuilder text = new StringBuilder();
//        text.append("Dear ").append(user.getFirstName()).append(" ").append(user.getLastName()).append(",\n");
//        text.append("\n");
//        text.append("Your account has been activated.\n");
//        text.append("You can login by going to the link:\n");
//        text.append(applicationProperties.getMail().getDomain()).append("/\n");
//        text.append("\n");
//        text.append("Enjoy your meals on Yum!\n");
//
//        // Sends the email
//        sendEmail(user.getEmail(), "[Yum] Account activated", text.toString());
//    }

    @Transactional
    public void sendOrderSummary(LocalDate day) {
        String dayStr = day.toString();
        DailyOrderSummary dailyOrderSummary = null;

        try {
            dailyOrderSummary = chefService.ordersDailyDayGet(dayStr);
            System.out.println(">>>>" + dailyOrderSummary);
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

                sb.append("<tr><td>" + f.getName() + "</td> <td>" + o.getQuantity() + "</td>  <td>" + df.format(f.getPrice()) + currency + "</td> <td " + cellAlignRight + ">" + df.format(f.getPrice().multiply(new BigDecimal(o.getQuantity()))) + currency + "</td> </tr>\n");
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
                if (maxRows < v.size()) {
                    maxRows = v.size();
                }
            }

            sb.append("<tr style=\"border-bottom:1px solid #ccc;\">\n");

            if (sumTotal.compareTo(new BigDecimal(0)) == 0) {
                sb.append("<td>" + userOrder.getFirstName() + " " + userOrder.getLastName() + "</td>");
            }

            ArrayList<String> foodTypes = new ArrayList<>(Arrays.asList("MAIN", "SALAD", "DRINK"));

            for (String foodType : foodTypes) {

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

            sb.append("<td " + cellAlignRight + ">" + df.format(sumTotal) + currency + "</td> ");
            sb.append("</tr>\n");

        }

        sb.append("</table>");
        sb.append("</div>");

        //System.out.println(sb);
        String emails = settingsRep.findById(1).getReportEmail();
        if (emails != null && !emails.isEmpty()) {
            ArrayList<String> emailsTo = new ArrayList<>(Arrays.asList(emails.split(";")));
            for (String emailTo : emailsTo) {
                sendHtmlEmail(emailTo, "Order summary for " + formattedDate, sb.toString());
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
