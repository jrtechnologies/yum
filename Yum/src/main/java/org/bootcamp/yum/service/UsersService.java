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
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.transaction.Transactional;
import org.bootcamp.ApplicationProperties;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.ConcurrentModificationException;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.Message;
import org.bootcamp.yum.api.model.User;
import org.bootcamp.yum.api.model.UserReg;
import org.bootcamp.yum.api.model.UserSettings;
import org.bootcamp.yum.api.model.UsersPage;
import org.bootcamp.yum.data.converter.UserRoleConverter;
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import static org.bootcamp.yum.service.FoodsService.getLineNumber;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private DailyOrderRepository dailyOrderRepo;
    @Autowired
    SettingsRepository settingsRepo;
    @Autowired
    private EmailService emailService;
    @Autowired
    private ApplicationProperties applicationProperties;

    private static final Logger LOGGER = Logger.getLogger(UsersService.class.getName());

    private void deleteDailyOrders(List<DailyOrder> dailyOrders) {
        Settings settings = settingsRepo.findOne(1);
        for (DailyOrder dailyOrder : dailyOrders) {
            if (!settings.deadlinePassed(dailyOrder.getDailyMenu().getDate())) {
                dailyOrderRepo.delete(dailyOrder);
            } else {
                dailyOrder.setFinalised(true);
            }
        }
    }

    @Transactional
    public org.bootcamp.yum.data.entity.User usersPost(UserReg user) throws ApiException, Exception {
        UserRole userRole = convertToUserRole(user.getRole());
        String email = user.getEmail();
        //Check if user already exists
        if (userRepo.findByEmail(email) != null) {
            throw new ApiException(412, "User already exists");
        }
        //Check if name is empty.
        String firstName = user.getFirstName().trim();
        String lastName = user.getLastName().trim();
        if (firstName.equals("") || lastName.equals("")) {
            throw new ApiException(400, "Validation Failed");
        }
        //Create entity type user.
        org.bootcamp.yum.data.entity.User userEntity = new org.bootcamp.yum.data.entity.User();
        userEntity.setFirstName(firstName);
        userEntity.setLastName(lastName);
        userEntity.setEmail(email);
        userEntity.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt())); //Crypt password 
        userEntity.setUserRole(userRole);
        userEntity.setRegistrationDate(LocalDate.now());
        userEntity.setLastEdit(DateTime.now());
        userRepo.save(userEntity); // Save user in database
        return userEntity;
    }

    @Transactional
    public void usersIdApprovePut(Long id, Boolean approve, Boolean force) throws ApiException {

        if(applicationProperties.getLdap().isEnabled()){ 
            throw new ApiException(404, "Disabled");
        }
        
        org.bootcamp.yum.data.entity.User user = userRepo.findById(id);
        if (user == null) {
            throw new ApiException(404, "User not found");
        }
        if (user.isSuperAdmin()) {
            throw new ApiException(400, "Bad request");
        }

        if (approve == null) {
            throw new ApiException(400, "Bad request");
        }
        if (approve) {
            user.setApproved(approve);
            if (emailService != null) {
                emailService.sendApprovalEmail(user);
            }
        } else {
            if (force == null) {
                throw new ApiException(400, "Bad request");
            } else {
                Settings settings= settingsRepo.findOne(1);
                Boolean notFinalOrders = user.hasNonFinalOrders(settings.getDeadline(), settings.getDeadlineDays());                
                if (!notFinalOrders) {
                    user.setApproved(approve);
                } else {
                    if (!force) {
                        throw new ApiException(409, "Non-final orders found");
                    } else {
                        deleteDailyOrders(user.getDailyOrders());
                        user.setApproved(approve);
                    }

                }
            }
        }
    }

    @Transactional
    public void usersIdPut(UserSettings user, Long id) throws ApiException, Exception {
        if (userRepo.findById(id) != null) {
            if (userRepo.findByEmail(user.getEmail()) != null) {
                org.bootcamp.yum.data.entity.User userDao = userRepo.findByEmail(user.getEmail());
                if (userDao.getId() != id) {
                    throw new ApiException(400, "User couldn't be updated");
                }
            }
            org.bootcamp.yum.data.entity.User userEntity = userRepo.findById(id);
            UserRole userRole = convertToUserRole(user.getRole());
            //Check the version if it is different.
            if (userEntity.getVersion() != user.getLastEdit().getVersion()) {
                UserSettings newUserEntity = new UserSettings();
                newUserEntity.setFirstName(userEntity.getFirstName());
                newUserEntity.setLastName(userEntity.getLastName());
                newUserEntity.setEmail(userEntity.getEmail());
                newUserEntity.setRole(userEntity.getUserRole().toString());
                LastEdit lastEdit = new LastEdit();
                lastEdit.setTimeStamp(userEntity.getLastEdit());
                lastEdit.setVersion(userEntity.getVersion());
                newUserEntity.setLastEdit(lastEdit);
                //return error 409 and the new user from database (With new version).
                throw new ConcurrentModificationException(409, "Concurrent modification error", newUserEntity);
            }
            //Check if name is empty.
            String firstName = user.getFirstName().trim();
            String lastName = user.getLastName().trim();
            if (firstName.equals("") || lastName.equals("")) {
                throw new ApiException(400, "User couldn't be updated");
            }
            userEntity.setFirstName(firstName);
            userEntity.setLastName(lastName);
            userEntity.setEmail(user.getEmail());
            userEntity.setUserRole(userRole);
            userEntity.setLastEdit(user.getLastEdit().getTimeStamp());
            return; // User updated just return.
        }
        throw new ApiException(404, "User not found");
    }

    @Transactional
    public UsersPage usersGet(String pageStr, String sizeStr, String orderBy, String orderDirection) throws ApiException, Exception {

        UsersPage usersPage = new UsersPage();
        List<String> validOrderBy = Arrays.asList("registrationDate", "lastName", "userRole", "approved");
        String error = "";
        long totalPages = 0;
        long totalElements = 0;
        int page, size;  //Pagination
        long repoUserCount = userRepo.count();

        Pageable pr;

        //validations
        try {
            page = pageStr == null ? 0 : Integer.parseInt(pageStr);
            size = sizeStr == null ? (int) repoUserCount : Integer.parseInt(sizeStr);
        } catch (NumberFormatException e) {
            error = "Wrong pagination size or page request";
            LOGGER.log(Level.WARNING, error + " @line:" + getLineNumber(), "");
            throw new ApiException(400, error);
        }

        if (orderBy == null || orderBy.equals("")) {
            orderBy = "registrationDate";
        }
        if (!validOrderBy.contains(orderBy)) {
            error = "Wrong orderBy request:" + orderBy;
            LOGGER.log(Level.WARNING, error + " @line:" + getLineNumber(), "");
            throw new ApiException(400, error);
        }

        if (orderDirection == null) {
            orderDirection = "ASC";
        }

        switch (orderDirection) {
            case "ASC":
                pr = new PageRequest(page, size, Sort.Direction.ASC, orderBy, "id");
                break;
            case "DESC":
                pr = new PageRequest(page, size, Sort.Direction.DESC, orderBy, "id");
                break;
            default:
                pr = new PageRequest(page, size, Sort.Direction.DESC, orderBy, "id");
                break;
        }

//        System.out.println(pr);
        //Iterable<org.bootcamp.yum.data.entity.User> usersPageable = userRepo.findAll();

        Page<org.bootcamp.yum.data.entity.User> usersPageable = userRepo.findAll(pr);
        //totalPages = 
        totalPages = usersPageable.getTotalPages();
        totalElements = usersPageable.getTotalElements();

        if (usersPageable != null) {
            UserRoleConverter userRole = new UserRoleConverter(); // Converter for ENUM user role
            ArrayList<User> usersModelList = new ArrayList<>();
            for (org.bootcamp.yum.data.entity.User userEntity : usersPageable) {
                User userModel = new User();
                userModel.setId(userEntity.getId());
                userModel.setFirstName(userEntity.getFirstName());
                userModel.setLastName(userEntity.getLastName());
                userModel.setEmail(userEntity.getEmail());
                userModel.setRole(userRole.convertToDatabaseColumn(userEntity.getUserRole()));
                userModel.setRegistrationDate(userEntity.getRegistrationDate());
                userModel.setApproved(userEntity.isApproved());
                userModel.setHasPicture(userEntity.hasPicture());
                LastEdit lastEdit = new LastEdit();
                lastEdit.setTimeStamp(userEntity.getLastEdit());
                lastEdit.setVersion(userEntity.getVersion());
                userModel.setLastEdit(lastEdit);
                userModel.setBalance(userEntity.getBalance());
                usersModelList.add(userModel); // add user in List of users
            }
            // return usersModelList; // Return list of all users from database
            usersPage.setTotalElements(totalElements);
            usersPage.setTotalPages(totalPages);
            usersPage.setUsers(usersModelList);

            return usersPage;
        } else {
            throw new ApiException(500, "Interval Server Error");
        }
    }

    @Transactional
    public User userIdGet(Long id) throws ApiException, Exception {
        //If id exists in database.
        if (userRepo.findById(id) != null) {
            org.bootcamp.yum.data.entity.User userEntity = userRepo.findById(id);
            User userModel = new User();
            UserRoleConverter userRole = new UserRoleConverter();
            LastEdit lastEdit = new LastEdit();
            lastEdit.setTimeStamp(userEntity.getLastEdit());
            lastEdit.setVersion(userEntity.getVersion());
            userModel.setId(userEntity.getId());
            userModel.setFirstName(userEntity.getFirstName());
            userModel.setLastName(userEntity.getLastName());
            userModel.setEmail(userEntity.getEmail());
            userModel.setRole(userRole.convertToDatabaseColumn(userEntity.getUserRole()));
            userModel.setRegistrationDate(userEntity.getRegistrationDate());
            userModel.setApproved(userEntity.isApproved());
            userModel.setLastEdit(lastEdit);
            userModel.setHasPicture(userEntity.hasPicture());
            userModel.setBalance(userEntity.getBalance());
            return userModel; // Return one user.
        }
        throw new ApiException(404, "User not found");
    }

    @Transactional
    public void usersIdDelete(Long id, Boolean force) throws ApiException, Exception {

        if(applicationProperties.getLdap().isEnabled()){ 
            throw new ApiException(404, "Disabled");
        }   
        
        if (id > 0) {
            //Check if user exist.
            if (userRepo.findById(id) != null) {
                org.bootcamp.yum.data.entity.User userEntity = userRepo.findById(id);
                //Check if user have order with method getUsersOrdersStatus from User Entity Class.
                Settings settings = settingsRepo.findById(1);
                switch (userEntity.getUsersOrdersStatus(settings.getDeadline(), settings.getDeadlineDays())) {
                    case 0:
                        userRepo.delete(userEntity);
                        return; //After success delete, just return.
                    case 1:
                        throw new ApiException(412, "Orders in past");
                    case 2:
                        throw new ApiException(402, "Orders mix past-future");
                    case 3:
                        if (force == null || !force) {
                            throw new ApiException(409, "Orders in future");
                        } else {
                            deleteDailyOrders(userEntity.getDailyOrders());
                            userRepo.delete(userEntity);
                            return;
                        }
                    default:
                        throw new ApiException(500, "Interval Server Error");
                }
            }
        }
        //if id is negative or not found in database, then return not found.
        throw new ApiException(404, "User not found");

    }

    @Transactional
    public Message usersIdForgotpwdPost(Long id) throws ApiException, Exception {
        if (id == null) {
            throw new ApiException(400, "An unexpected error occured.");
        }
        org.bootcamp.yum.data.entity.User user = userRepo.findById(id);
        if (user == null) {
            throw new ApiException(404, "No user found with this id");
        }
        user.setSecret(UUID.randomUUID().toString());
        user.setSecretCreation(DateTime.now());
        if (emailService != null) {
            emailService.sendResetPasswordLinkEmail(user);
        }
        Message message = new Message();
        message.setMessage("Reset Password");
        return message;
    }

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

}
