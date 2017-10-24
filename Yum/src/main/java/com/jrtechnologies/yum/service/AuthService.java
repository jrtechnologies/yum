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

import java.math.BigDecimal;
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
import com.jrtechnologies.ApplicationProperties;
import com.jrtechnologies.JwtCodec;
import com.jrtechnologies.yum.api.ApiException;
import com.jrtechnologies.yum.api.model.LastEdit;
import com.jrtechnologies.yum.api.model.Login;
import com.jrtechnologies.yum.api.model.ResetPwd;
import com.jrtechnologies.yum.api.model.Token;
import com.jrtechnologies.yum.api.model.UserReg;
import com.jrtechnologies.yum.data.converter.UserRoleConverter;
import com.jrtechnologies.yum.data.entity.User;
import com.jrtechnologies.yum.data.enums.UserRole;
import com.jrtechnologies.yum.data.repository.UserRepository;
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
            user.setFirstEmail(email);
            user.setFirstName(body.getFirstName());
            user.setLastName(body.getLastName());
            // Encrypt password and set it to User D.A.O.
            user.setPassword(BCrypt.hashpw(body.getPassword(), BCrypt.gensalt()));
            user.setUserRole(userRole);
            user.setApproved(false);
            user.setLastEdit(DateTime.now());
            user.setRegistrationDate(LocalDate.now());
            user.setBalance(BigDecimal.ZERO);
            user.setOrderNtf(true);
            user.setOrderModifyNtf(true);
            user.setAdminOrderNtf(true);
            user.setAdminOrderModifyNtf(true);
            user.setBalanceNtf(true);
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


    @Transactional
    public Token authLoginPost(Login body) throws ApiException {

         //roles is an array of string:          
        ArrayList<String> roles = new ArrayList<>();
        User user = null;
        // check LDAP enabled from application.properties
        boolean userAuthLDAP = applicationProperties.getLdap().isEnabled();
        boolean superAdmin = false;

        char[] userEmail = body.getEmail().toCharArray();
        char[] userPassword = body.getPassword().toCharArray();
        char[] username = body.getUsername().toCharArray();

        // check if user is superadmin 
        user = userRep.findById(1);
        if (String.valueOf(username).equals(user.getEmail())) {
            userAuthLDAP = false;
            superAdmin = true;
        }

        // ldap authentication
        if (userAuthLDAP) {

            String ldapBase = applicationProperties.getLdap().getBase();
            String principalAttribute = applicationProperties.getLdap().getPrincipalAttribute();
            String idAttribute = applicationProperties.getLdap().getIdAttribute();
            
            // Set up the environment for creating the initial context
            Hashtable<String, String> env = new Hashtable<>();
            env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
            env.put(Context.PROVIDER_URL, applicationProperties.getLdap().getUrl());
            env.put(Context.SECURITY_AUTHENTICATION, "simple");

            // if ldap is active directory
            if (principalAttribute.equals("sAMAccountName")) {
                env.put(Context.SECURITY_PRINCIPAL, applicationProperties.getLdap().getDomain() + "\\" + String.valueOf(username));
            } else {
                env.put(Context.SECURITY_PRINCIPAL, principalAttribute + "=" + String.valueOf(username) + ", " + ldapBase);
            }

            env.put(Context.SECURITY_CREDENTIALS, String.valueOf(userPassword));
            env.put(Context.REFERRAL, "follow");
            env.put("java.naming.ldap.attributes.binary", idAttribute);

            // retrieve user details from ldap
            String[] returnAttribute = {"givenName", "sn", "mail", idAttribute};
            SearchControls srchControls = new SearchControls();
            srchControls.setReturningAttributes(returnAttribute);
            srchControls.setSearchScope(SearchControls.SUBTREE_SCOPE);


            String searchFilter = "(" + principalAttribute + "=" + String.valueOf(username) + ")";

            
            try {
                 // Create the initial context
                DirContext ctx = new InitialDirContext(env);
                NamingEnumeration srchResponse = ctx.search(ldapBase, searchFilter, srchControls);
                SearchResult sr = (SearchResult) srchResponse.next();
                Attributes attrs = sr.getAttributes();
                ctx.close();
                byte[] ldapId = (byte[]) sr.getAttributes().get(idAttribute).get();

                user = userRep.findByLdapId(ldapId);
                
                // store user in db on first login
                if (user == null) {
                    user = new User();
                    String email = attrs.get("mail").get().toString();
                    user.setEmail(email);
                    user.setFirstEmail(email);
                    user.setFirstName(attrs.get("givenName").get().toString());
                    user.setLastName(attrs.get("sn").get().toString());
                    user.setUserRole(convertToUserRole("hungry"));
                    user.setApproved(true);
                    user.setLastEdit(DateTime.now());
                    user.setRegistrationDate(LocalDate.now());
                    user.setLdapId(ldapId);
                    user.setPassword(BCrypt.hashpw("123456", BCrypt.gensalt()));
                    user.setBalance(BigDecimal.ZERO);
                    user.setOrderNtf(true);
                    user.setOrderModifyNtf(true);
                    user.setAdminOrderNtf(true);
                    user.setAdminOrderModifyNtf(true);
                    user.setBalanceNtf(true);
                    userRep.save(user);
                }
                
            } catch (NamingException e) {
                throw new ApiException(404, "User not found (bad credentials)");
            } 

        // not-ldap and super admin authentication   
        } else {

            //fetch in the database the user and verify its password.. uses bcrypt for password hashing
            if (!superAdmin) {
                user = userRep.findByEmail(String.valueOf(userEmail));
            }

            // Check user credentials
            if (((user == null) || (!BCrypt.checkpw(String.valueOf(userPassword), user.getPassword()))) && !userAuthLDAP) {

                throw new ApiException(404, "User not found (bad credentials)");
            } else {
                if (!user.isApproved()) {
                    throw new ApiException(403, "User can not login (not approved)");
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
        com.jrtechnologies.yum.api.model.User userModel = new com.jrtechnologies.yum.api.model.User();
        userModel.setId(user.getId());
        userModel.setFirstName(user.getFirstName());
        userModel.setLastName(user.getLastName());
        userModel.setEmail(user.getEmail());
        userModel.setRole(userConverter.convertToDatabaseColumn(user.getUserRole()));
        userModel.setRegistrationDate(user.getRegistrationDate());
        userModel.setApproved(user.isApproved());
        userModel.setLastEdit(new LastEdit(user.getLastEdit(), user.getVersion()));
        userModel.setHasPicture(user.hasPicture());
        userModel.setBalance(user.getBalance());
        userModel.setOrderNtf(user.isOrderNtf());
        userModel.setOrderModifyNtf(user.isOrderModifyNtf());
        userModel.setAdminOrderNtf(user.isAdminOrderNtf());
        userModel.setAdminOrderModifyNtf(user.isAdminOrderModifyNtf());
        userModel.setBalanceNtf(user.isBalanceNtf());
        token.setUser(userModel);

        return token;

    }

    public String authMethodGet() {

        if (applicationProperties.getLdap().isEnabled()) {
            return "ldap";
        } else {
            return "email";
        }
    }

}

    

