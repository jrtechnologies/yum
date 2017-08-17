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

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.UUID;
import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.Attributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import org.bootcamp.ApplicationProperties;
import org.bootcamp.JwtCodec;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.Login;
import org.bootcamp.yum.api.model.ResetPwd;
import org.bootcamp.yum.api.model.Token;
import org.bootcamp.yum.api.model.UserReg;
import org.bootcamp.yum.data.converter.UserRoleConverter;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.UserRepository;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRep;
    @Autowired
    private EmailService emailService;
    @Autowired
    private ApplicationProperties applicationProperties;

    private UserRole convertToUserRole(String role) {
        switch (role) {
            case "hungry":
                return UserRole.HUNGRY;
            case "chef":
                return UserRole.CHEF;
            case "admin":
                return UserRole.ADMIN;
            default:
                throw new IllegalArgumentException("Unknown value:" + role);
        }
    }

    @Transactional
    public void authRegisterPost(UserReg body) throws ApiException {
        try {
            // if Role not in enum UserRole throws exception 
            //UserRole userRole = convertToUserRole(body.getRole());
            UserRole userRole = convertToUserRole("hungry");
            String email = body.getEmail();
            if (userRep.findByEmail(email) != null) {
                //    return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED); 
                throw new ApiException(412, "User already exists");
            }
            User user = new User();
            user.setEmail(email);
            user.setFirstName(body.getFirstName());
            user.setLastName(body.getLastName());
            // Encrypt password and set it to User D.A.O.
            user.setPassword(BCrypt.hashpw(body.getPassword(), BCrypt.gensalt()));
            user.setUserRole(userRole);
            user.setApproved(false);
            user.setLastEdit(DateTime.now());
            user.setRegistrationDate(LocalDate.now());
            userRep.save(user);
            // The email service is injected and sends emails to all admins 
            if (emailService != null) {
                emailService.sendNewUserEmailToAllAdmins(user);
            }
            // if Role not in enum UserRole catches this exception  
        } catch (IllegalArgumentException e) {
            throw new ApiException(400, "Bad registration data");
        }
    }

    @Transactional
    public void authForgotpwdPost(String email) throws ApiException {
        if (email == null) {
            throw new ApiException(400, "No user found with this email");
        }
        User user = userRep.findByEmail(email);
        if (user == null) {
            throw new ApiException(400, "No user found with this email");
        }
        user.setSecret(UUID.randomUUID().toString());
        user.setSecretCreation(DateTime.now());
        // The email service is injected and sends email with link for password reset to user  
        if (emailService != null) {
            emailService.sendResetPasswordLinkEmail(user);
        }

    }

    @Transactional
    public void authChangepwdPut(ResetPwd body) throws ApiException {

        String token = body.getToken();
//        System.out.println("token: " + token);
        if (body == null) {
            throw new ApiException(400, "Bad reset password data");
        }
        // retrieve user with this secret
        User user = userRep.findBySecret(token);
        if (user == null) {
            throw new ApiException(400, "Bad reset password data");
        }
        // Check if token expired
        if (user.getSecretCreation().plusDays(1).getMillis() < DateTime.now().getMillis()) {
            throw new ApiException(400, "Bad reset password data");
        } else {
            user.setSecret(null);
            user.setSecretCreation(null);
            user.setPassword(BCrypt.hashpw(body.getPassword(), BCrypt.gensalt()));
        }
    }

    public static String convertToDashedString(byte[] objectGUID) {
        StringBuilder displayStr = new StringBuilder();

        displayStr.append(prefixZeros((int) objectGUID[3] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[2] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[1] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[0] & 0xFF));
        displayStr.append("-");
        displayStr.append(prefixZeros((int) objectGUID[5] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[4] & 0xFF));
        displayStr.append("-");
        displayStr.append(prefixZeros((int) objectGUID[7] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[6] & 0xFF));
        displayStr.append("-");
        displayStr.append(prefixZeros((int) objectGUID[8] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[9] & 0xFF));
        displayStr.append("-");
        displayStr.append(prefixZeros((int) objectGUID[10] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[11] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[12] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[13] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[14] & 0xFF));
        displayStr.append(prefixZeros((int) objectGUID[15] & 0xFF));

        return displayStr.toString();
    }

    private static String prefixZeros(int value) {
        if (value <= 0xF) {
            StringBuilder sb = new StringBuilder("0");
            sb.append(Integer.toHexString(value));

            return sb.toString();

        } else {
            return Integer.toHexString(value);
        }
    }

    @Transactional
    public Token authLoginPost(Login body) throws ApiException {

        //roles is an array of string:          
        ArrayList<String> roles = new ArrayList<>();
        User user = null;
        boolean userAuthLDAP = applicationProperties.getLdap().isEnabled();
//        boolean userAuthDB = false;

        char[] userEmail = body.getEmail().toCharArray();
        char[] userPassword = body.getPassword().toCharArray();
        char[] username = body.getUsername().toCharArray();

        // TODO check LDAP enabled from application.properties
        if (userAuthLDAP) {
            //char[] username = body.getUsername().toCharArray();
            String ldapBase = applicationProperties.getLdap().getBase();
            // Set up the environment for creating the initial context

            Hashtable<String, String> env = new Hashtable<>();
            env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
            env.put(Context.PROVIDER_URL, applicationProperties.getLdap().getUrl());
            env.put(Context.SECURITY_AUTHENTICATION, "simple");
            env.put(Context.SECURITY_PRINCIPAL, applicationProperties.getLdap().getDomain() + "\\" + String.valueOf(username));
            //env.put(Context.SECURITY_PRINCIPAL, "uid=test.user, " + ldapBase);
            //env.put(Context.SECURITY_PRINCIPAL, "test.user");
            // env.put("java.naming.ldap.attributes.binary", "title");
            env.put("java.naming.ldap.attributes.binary", "objectGUID");
            
            System.out.println("password: " + String.valueOf(userPassword));
            env.put(Context.SECURITY_CREDENTIALS, String.valueOf(userPassword));
            env.put(Context.REFERRAL, "follow");

            String[] returnAttribute = {"givenName", "sn", "mail", "objectGUID"};
//            String[] returnAttribute = {"givenName", "sn", "mail", "title"};
            SearchControls srchControls = new SearchControls();
            srchControls.setReturningAttributes(returnAttribute);
            srchControls.setSearchScope(SearchControls.SUBTREE_SCOPE);
//            String searchFilter = "(uid=" + userName + ")";
            String searchFilter = "(sAMAccountName=" + String.valueOf(username) + ")";
//            String searchFilter = "(uid=" + String.valueOf("test.user") + ")";

            // Create the initial context
            DirContext ctx;
            try {
                ctx = new InitialDirContext(env);

                NamingEnumeration srchResponse = ctx
                        .search(ldapBase, searchFilter, srchControls);

                //userAuthLDAP = (ctx != null);
                // while (srchResponse.hasMoreElements()) {
                SearchResult sr = (SearchResult) srchResponse.next();

                System.out.println(">>>" + sr.getName());
                Attributes attrs = sr.getAttributes();
                //System.out.println(">>>>>>" + attrs.get("sAMAccountName"));
                //System.out.println(">>>>>>" + attrs.get("cn"));
                System.out.println(">>>>>>" + attrs.get("givenName").get());
                System.out.println(">>>>>>" + attrs.get("sn"));
                System.out.println(">>>>>>" + attrs.get("mail"));
                System.out.println(">>>>>>" + attrs.get("objectGUID"));
                byte[] guid = (byte[]) sr.getAttributes().get("objectGUID").get();
//                System.out.println(">>>>>>" + attrs.get("title"));
//                byte[] guid = (byte[]) sr.getAttributes().get("title").get();
//                    System.out.println(">>>>>>" + attrs.get("distinguishedName"));  

                // }
                String objectGuid = convertToDashedString(guid);
                user = userRep.findByObjectGuid(objectGuid);
                if (user == null) {

                    user = new User();
                    user.setEmail(attrs.get("mail").get().toString());
                    user.setFirstName(attrs.get("givenName").get().toString());
                    user.setLastName(attrs.get("sn").get().toString());
                    // Encrypt password and set it to User D.A.O.
                    //user.setPassword(BCrypt.hashpw(body.getPassword(), BCrypt.gensalt()));
                    user.setUserRole(convertToUserRole("hungry"));
                    user.setApproved(true);
                    user.setLastEdit(DateTime.now());
                    user.setRegistrationDate(LocalDate.now());
                    user.setObjectGuid(objectGuid);
                    userRep.save(user);
                }
                // if (ctx != null) {
                ctx.close();
                // }
            } catch (NamingException e) {
                System.out.println(e.getMessage());
                throw new ApiException(404, "User not found (bad credentials)");
            } 

            System.out.println("userAuthLDAP:" + userAuthLDAP);
        } else {
            //fetch in the database the user and verify its password.. uses bcrypt for password hashing
            user = userRep.findByEmail(String.valueOf(userEmail));
            // Check user credentials
            if (((user == null) || (!BCrypt.checkpw(String.valueOf(userPassword), user.getPassword()))) && !userAuthLDAP) {

                throw new ApiException(404, "User not found (bad credentials)");
            } else {
                if (!user.isApproved()) {
                    throw new ApiException(403, "User can not login (not approved)");
                } else {
                    //userAuthDB = true;

//                    //Add roles for the user
//                    switch (user.getUserRole()) {
//                        case HUNGRY:
//                            roles.add("hungry");
//                            break;
//                        case CHEF:
//                            roles.add("hungry");
//                            roles.add("chef");
//                            break;
//                        case ADMIN:
//                            roles.add("hungry");
//                            roles.add("chef");
//                            roles.add("admin");
//                            break;
//                        default:
//                            throw new ApiException(404, "User not found (bad credentials)");
//
//                    }
                }
            }
        }

        //Add roles for the user
        switch (user.getUserRole()) {
            case HUNGRY:
                roles.add("hungry");
                break;
            case CHEF:
                roles.add("hungry");
                roles.add("chef");
                break;
            case ADMIN:
                roles.add("hungry");
                roles.add("chef");
                roles.add("admin");
                break;
            default:
                throw new ApiException(404, "User not found (bad credentials)");

        }

        // the subject should be the ID of the user converted to string
        String subject = Long.toString(user.getId());
        // add subject and roles for token.
        String compactJws = JwtCodec.encode(subject, roles);
        //Create the token object and set the string token.
        Token token = new Token();
        token.setToken(compactJws);
        //Create user and set them on token.
        UserRoleConverter userConverter = new UserRoleConverter();
        org.bootcamp.yum.api.model.User userModel = new org.bootcamp.yum.api.model.User();
        userModel.setId(user.getId());
        userModel.setFirstName(user.getFirstName());
        userModel.setLastName(user.getLastName());
        userModel.setEmail(user.getEmail());
        userModel.setRole(userConverter.convertToDatabaseColumn(user.getUserRole()));
        userModel.setRegistrationDate(user.getRegistrationDate());
        userModel.setApproved(user.isApproved());
        userModel.setLastEdit(new LastEdit(user.getLastEdit(), user.getVersion()));
        userModel.setHasPicture(user.hasPicture());
        token.setUser(userModel);

        return token;

    }//authLoginPost

    public String authMethodGet() {

        if (applicationProperties.getLdap().isEnabled()) {
            return "ldap";
        } else {
            return "email";
        }
    }

}

    

