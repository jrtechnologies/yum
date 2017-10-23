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

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import javax.imageio.ImageIO;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import com.jrtechnologies.yum.api.ApiException;
import com.jrtechnologies.yum.api.ConcurrentModificationException;
import com.jrtechnologies.yum.api.model.LastEdit;
import com.jrtechnologies.yum.api.model.Settings;
import com.jrtechnologies.yum.api.model.User;
import com.jrtechnologies.yum.api.model.UserSettings;
import com.jrtechnologies.yum.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Service
public class SettingsService {

    @Autowired
    UserRepository userRepo;
    
    @PreAuthorize("hasAuthority('hungry')")
    public User settingsGet() throws ApiException {
        User userDTO = new User();
        com.jrtechnologies.yum.data.entity.User userDAO = userRepo.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        userDTO.setId(userDAO.getId());
        userDTO.setFirstName(userDAO.getFirstName());
        userDTO.setLastName(userDAO.getLastName());
        userDTO.setEmail(userDAO.getEmail());
        userDTO.setApproved(userDAO.isApproved());
        LastEdit lastEdit = new LastEdit();
        lastEdit.setTimeStamp(userDAO.getLastEdit());
        lastEdit.setVersion(userDAO.getVersion());
        userDTO.setLastEdit(lastEdit);
        userDTO.setRegistrationDate(userDAO.getRegistrationDate());
        userDTO.setRole(userDAO.getUserRole().toString());
        userDTO.setHasPicture(userDAO.hasPicture());
        userDTO.setBalance(userDAO.getBalance());
        userDTO.setOrderNtf(userDAO.isOrderNtf());
        userDTO.setOrderModifyNtf(userDAO.isOrderModifyNtf());
        userDTO.setAdminOrderNtf(userDAO.isAdminOrderNtf());
        userDTO.setAdminOrderModifyNtf(userDAO.isAdminOrderModifyNtf());
        userDTO.setBalanceNtf(userDAO.isBalanceNtf());

        return userDTO;
    }
    @PreAuthorize("hasAuthority('hungry')")
    public void settingsPut(Settings upUser) throws ApiException {
        com.jrtechnologies.yum.data.entity.User userDAO = userRepo.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        if (upUser == null) {
            throw new ApiException(400, "Bad Request");
        } else if (upUser.getLastEdit().getVersion() != userDAO.getVersion()) // checks the version. It must be the same
        {
            UserSettings userSettingsDTO = new UserSettings();
            userSettingsDTO.setFirstName(userDAO.getFirstName());
            userSettingsDTO.setLastName(userDAO.getLastName());
            userSettingsDTO.setEmail(userDAO.getEmail());
            userSettingsDTO.setRole(userDAO.getUserRole().toString());
            userSettingsDTO.setLastEdit(new LastEdit(userDAO.getLastEdit(), userDAO.getVersion()));
            userSettingsDTO.setOrderNtf(userDAO.isOrderNtf());
            userSettingsDTO.setOrderModifyNtf(userDAO.isOrderModifyNtf());
            userSettingsDTO.setAdminOrderNtf(userDAO.isAdminOrderNtf());
            userSettingsDTO.setAdminOrderModifyNtf(userDAO.isAdminOrderModifyNtf());
            userSettingsDTO.setBalanceNtf(userDAO.isBalanceNtf());
            throw new ConcurrentModificationException(409, "Concurrent modification error.", userSettingsDTO);
        } else {
            
            //Check if name is empty.
            String firstName = upUser.getFirstName().trim();
            String lastName = upUser.getLastName().trim();
            if (firstName.equals("") || lastName.equals("")) {
                throw new ApiException(400, "User couldn't be updated");
            }
            if (upUser.getFirstName() != null && !firstName.equals(userDAO.getFirstName())) {
                if ((firstName.length()) < 0 || (firstName.length()) > 50) {
                    throw new ApiException(400, "First Name not valid"); // First Name's length should be >1 && <50
                }
            }

            if (upUser.getLastName() != null && !lastName.equals(userDAO.getLastName())) {
                if ((lastName.length()) < 0 || (lastName.length()) > 50) {
                    throw new ApiException(400, "Last Name not valid"); // Last Name's length should be >1 && <50
                }
            }

            String newPassword = upUser.getPassword().trim();
//            System.out.println("newPassword: " + newPassword);
            String newPasswordEncrypt = "";
            if (newPassword != null && !newPassword.equals("")){
                newPasswordEncrypt = BCrypt.hashpw(newPassword, BCrypt.gensalt());
                if ((!newPasswordEncrypt.equals(userDAO.getPassword())) && ((newPassword.length()) < 6)) {
                    throw new ApiException(400, "Password not valid"); // Password's length should be >6
                }
            }
            //If there are no invalid inputs, the new data will be update
            if (upUser.getFirstName() != null && !upUser.getFirstName().trim().equals(userDAO.getFirstName())) {
                userDAO.setFirstName(upUser.getFirstName().trim());
            }

            if (upUser.getLastName() != null && !upUser.getLastName().trim().equals(userDAO.getLastName())) {
                userDAO.setLastName(upUser.getLastName().trim());
            }

            if (upUser.getPassword() != null && !newPassword.equals("") && !newPasswordEncrypt.equals(userDAO.getPassword())) {
                userDAO.setPassword(newPasswordEncrypt);
            }

            if (upUser.getEmail() != null && !upUser.getEmail().trim().equals(userDAO.getEmail())) {
                if (userRepo.findByEmail(upUser.getEmail()) != null) {
                        throw new ApiException(412, "User email already exists");
                    }
                userDAO.setEmail(upUser.getEmail());
            }
            userDAO.setOrderNtf(upUser.getOrderNtf());
            userDAO.setOrderModifyNtf(upUser.getOrderModifyNtf());
            userDAO.setAdminOrderNtf(upUser.getAdminOrderNtf());
            userDAO.setAdminOrderModifyNtf(upUser.getAdminOrderModifyNtf());
            userDAO.setBalanceNtf(upUser.getBalanceNtf());
        }
    }
    
    @PreAuthorize("hasAuthority('hungry')")
    public void PicturePost(MultipartFile file) throws ApiException {
        com.jrtechnologies.yum.data.entity.User userDAO = userRepo.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        
        if (file.isEmpty()) {
           throw new ApiException(400, "File is emtpy");
        }
        
        try {
                byte[] bytes = file.getBytes();
//                System.out.println("img bytes:"+bytes.length);
                // crop it, resize it
                // save them in the User DAO
                
                InputStream in = new ByteArrayInputStream(bytes);
                BufferedImage image=ImageIO.read(in);
                int min=0;
                if(image.getWidth()>image.getHeight())
                    min=image.getHeight();
                else
                    min=image.getWidth();


                ByteArrayOutputStream output = new ByteArrayOutputStream();
                Thumbnails.of(image)
                    .sourceRegion(Positions.CENTER, min, min)
                    .size(180, 180)
                    // and maybe .crop(Positions.CENTER)
                    .outputFormat("jpeg")
                    .toOutputStream(output);

                //save this in the DAO
                bytes = output.toByteArray();                

                
                userDAO.setPicture(bytes);
                userRepo.save(userDAO);
                
            } catch (IOException ex) {
            throw new ApiException(500, "Cannot process image");
        }
         
    }
    
     
}
