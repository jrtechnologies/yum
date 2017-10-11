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
package com.jrtechnologies.yum.service;

import freemarker.core.ParseException;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays; 
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

import com.jrtechnologies.ApplicationProperties; 
import com.jrtechnologies.yum.data.entity.DailyMenu;
import com.jrtechnologies.yum.data.entity.DailyOrder;
import com.jrtechnologies.yum.data.entity.Food;
import com.jrtechnologies.yum.data.entity.OrderItem;
import com.jrtechnologies.yum.data.entity.Settings;
import com.jrtechnologies.yum.data.entity.User;
import com.jrtechnologies.yum.data.enums.UserRole; 
import com.jrtechnologies.yum.data.repository.SettingsRepository;
import com.jrtechnologies.yum.data.repository.UserRepository;
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
import com.jrtechnologies.yum.data.repository.DailyMenuRepository;
import org.springframework.core.io.ClassPathResource; 

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
    private SettingsRepository settingsRep;

    @Autowired
    private DailyMenuRepository dailyMenuRep;

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
            freeMarkerConfig.setRecognizeStandardFileExtensions(true);
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
            sendHtmlTemplateEmail(admin.getEmail(), "[Yum] New user registered", model, "user-registered.ftlh");
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
        model.put("comment", order.getComment());
        model.put("currency", settings.getCurrency());
        BigDecimal total = new BigDecimal("0");
        int totalQuantity = 0;
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
        sendHtmlTemplateEmail(user.getEmail(), "[Yum] Order Confirmation for " + menuDate.toString("dd/MM/yyyy"), model, "order.ftlh");

    }

    public void sendResetPasswordLinkEmail(User user) {

        // create hashmap for the placeholders of the template
        Map<String, Object> model = new HashMap<>();
        model.put("firstName", user.getFirstName());
        model.put("lastName", user.getLastName());
        model.put("link", applicationProperties.getMail().getDomain() + "/resetpwd/token?token=" + user.getSecret());
        DateTime expiration = user.getSecretCreation().plusDays(1);
        model.put("expirationTime", expiration.toString("HH:mm:ss"));
        model.put("expirationDate", expiration.toString("EEEE dd MMMM YYYY"));
        // Sends the email
        sendHtmlTemplateEmail(user.getEmail(), "[Yum] Password reset", model, "reset-password.ftlh");

    }

    public void sendApprovalEmail(User user) {

        // create hashmap for the placeholders of the template
        Map<String, Object> model = new HashMap<>();
        model.put("firstName", user.getFirstName());
        model.put("lastName", user.getLastName());
        model.put("link", applicationProperties.getMail().getDomain());

        // Sends the email
        sendHtmlTemplateEmail(user.getEmail(), "[Yum] Account activated", model, "user-approval.ftlh");

    }

    @Transactional
    public void sendOrderSummary(LocalDate date) {

        DailyMenu dailyMenu = dailyMenuRep.findByDate(date);
        if (dailyMenu != null) {

            DateTimeFormatter fmt = DateTimeFormat.forPattern("dd/MM/yyyy");
            DateTimeFormatter fmtFull = DateTimeFormat.forPattern("EEEE dd MMMM yyyy");

            String formattedDate = date.toString(fmt);
            String titleDate = date.toString(fmtFull);
            DecimalFormat df = new DecimalFormat();
            df.setMaximumFractionDigits(2);
            df.setMinimumFractionDigits(2);

            String currency = settingsRep.findById(1).getCurrency();

            //Build data
            HashMap<String, HashMap<Food, Integer>> orderByFoodType = getFoodByType(getOrderItems(dailyMenu));

            // create hashmap for the placeholders of the template
            Map<String, Object> model = new HashMap<>();
            model.put("date", titleDate);
            model.put("orderItemsByMain", orderByFoodType.get("MAIN"));
            model.put("orderItemsBySalad", orderByFoodType.get("SALAD"));
            model.put("orderItemsByDrink", orderByFoodType.get("DRINK"));
            model.put("currency", currency);

            List<DailyOrder> dailyOrders = dailyMenu.getDailyOrders();
            model.put("dailyOrders", dailyOrders);

            String emails = settingsRep.findById(1).getReportEmail();
            if (emails != null && !emails.isEmpty()) {
                ArrayList<String> emailsTo = new ArrayList<>(Arrays.asList(emails.split(";")));
                for (String emailTo : emailsTo) {
                    sendHtmlTemplateEmail(emailTo, "[Yum] Order summary for " + formattedDate, model, "order-summary.ftlh");
                }
            }
        }
    }

    // Get total quantities per food for given DailyMenu
    private HashMap<Food, Integer> getOrderItems(DailyMenu dailyMenu) {
        HashMap<Food, Integer> foodQtys = new HashMap<>();

        // get all orders
        List<DailyOrder> dailyOrders = dailyMenu.getDailyOrders();
        for (DailyOrder dailyOrder : dailyOrders) {
            for (OrderItem orderItem : dailyOrder.getOrderItems()) {
                Food food = orderItem.getFood();
                foodQtys.put(food, (foodQtys.get(food) == null ? 0 : foodQtys.get(food)) + orderItem.getQuantity());
            }
        }
        return foodQtys;
    }

    // return a hashmap with keys food types and values hashmaps (key: Food, value: quantity)
    private HashMap<String, HashMap<Food, Integer>> getFoodByType(HashMap<Food, Integer> foodQty) {
        HashMap<String, HashMap<Food, Integer>> orderByFoodType = new HashMap<>();

        for (Map.Entry<Food, Integer> foodEntry : foodQty.entrySet()) {
            Food food = foodEntry.getKey();
            Integer quantity = foodEntry.getValue();
            String foodType = food.getFoodType().toString();

            if (!orderByFoodType.containsKey(foodType)) {
                HashMap<Food, Integer> foodQtyByType = new HashMap<>();
                foodQtyByType.put(food, quantity);
                orderByFoodType.put(foodType, foodQtyByType);
            } else {
                orderByFoodType.get(foodType).put(food, quantity);
            }
        }
        return orderByFoodType;
    }

}
