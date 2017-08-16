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
import java.util.List;
import org.bootcamp.ApplicationProperties;
import org.bootcamp.yum.data.entity.DailyMenu;
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.Food;
import org.bootcamp.yum.data.entity.OrderItem;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private MailSender mailSender;

    @Autowired
    private ApplicationProperties applicationProperties;

    @Autowired
    private UserRepository userRep;

    @Autowired
    private SettingsRepository settingsRep;

    private void sendEmail(String sendTo, String subject, String text) {
        // Prepares the message
        SimpleMailMessage message = new SimpleMailMessage();
        //message.setFrom(senderEmailAddress);
        message.setFrom(applicationProperties.getMail().getFrom());
        message.setTo(sendTo);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);

    }

    private String yumDomain () {
        return applicationProperties.getMail().getDomain();
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
        text.append(yumDomain()).append("/admin/users/").append(newUser.getId());

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
            text.append("\t").append(food.getName()).append("\tqty ").append(orderItem.getQuantity()).append(" x ").append(price).append(" euro\n");
        }
        text.append("\n");
        text.append("\ttotal : ").append(total).append(" euro").append("\n");
        text.append("\n");
        text.append("You can modify this order until ").append(settingsRep.findOne(1).getDeadline().toString("HH:mm")).append(", on ").append(menuDate.minusDays(1).toString("EEEE dd MMMM YYYY")).append(" by going to the link:\n");
        text.append(yumDomain()).append("/hungry/").append(menuDate.getYear()).append("/").append(menuDate.getWeekOfWeekyear()).append("\n");
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
        text.append(yumDomain()).append("/resetpwd/token?token=").append(user.getSecret()).append("\n");
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
        text.append(yumDomain()).append("/\n");;
        text.append("\n");
        text.append("Enjoy your meals on Yum!\n");

        // Sends the email
        sendEmail(user.getEmail(), "[Yum] Account activated", text.toString());
    }
}
