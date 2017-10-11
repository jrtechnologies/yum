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

package com.jrtechnologies.yum.api;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.swagger.annotations.*;
import java.io.ByteArrayInputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.OptimisticLockException;
import javax.transaction.Transactional;
import com.jrtechnologies.JwtCodec;
import com.jrtechnologies.yum.api.model.Settings;
import com.jrtechnologies.yum.api.model.User;
import com.jrtechnologies.yum.data.repository.UserRepository;
import com.jrtechnologies.yum.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
public class SettingsApiController implements SettingsApi {
    
    @Autowired
    private UserRepository userRepo;

    
    private SettingsService settingsService;

    @Autowired
    public SettingsApiController(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> settingsGet() throws ApiException{

        return new ResponseEntity<>(settingsService.settingsGet(), HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Void> settingsPicturePost(@ApiParam(value = "file detail") @RequestPart("file") MultipartFile file,
        @ApiParam(value = "Description of file contents." ) @RequestPart(value="userid", required=false)  Integer userid) throws ApiException {
        // do some magic!
        settingsService.PicturePost(file);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasAuthority('hungry')")
    @Transactional
    public ResponseEntity<Object> settingsPut(@ApiParam(value = "User data" ,required=true ) @RequestBody Settings upUser, Errors errors) throws ApiException{
        
        if (errors.hasErrors()) 
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        
        try {
            settingsService.settingsPut(upUser);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (OptimisticLockException ex) {
            try {
                User user = settingsService.settingsGet();
                throw new ConcurrentModificationException(409, "Concurrent modification error.", user);
            } catch (ApiException ex1) {
                Logger.getLogger(SettingsApiController.class.getName()).log(Level.SEVERE, null, ex1);
                throw new ApiException(500, "Concurrent modification exception: internal error");
            }
        }  

    }

    @Override  
    public ResponseEntity<Object> settingsPictureTokenGet(@RequestParam(value = "token", required = false) String token) throws ApiException{ 
     
//        System.out.println("token:" + token);
        
        if(token==null || token.trim().length()==0){
            //throw new ApiException(403, "Invalid token");
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        
        Long clientUserId = 0L;
        try{
            Claims claims = JwtCodec.decode(token);
            clientUserId = Long.parseLong(claims.getSubject());
        } catch(JwtException e){
            //throw new ApiException(403, "Access denied");
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } 
        
        com.jrtechnologies.yum.data.entity.User userDAO = userRepo.findById(clientUserId);               
        
        if(!userDAO.hasPicture()){
            //throw new ApiException(404, "No picture");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        ByteArrayInputStream inputStream = new ByteArrayInputStream(userDAO.getPicture());        
        
        return ResponseEntity
        .ok()
        .contentLength(userDAO.getPictureLength())
        .contentType(MediaType.parseMediaType("image/jpeg"))
        .body(new InputStreamResource(inputStream));
        
    }
    
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Void> settingsPictureDelete() throws ApiException {
        com.jrtechnologies.yum.data.entity.User user = userRepo.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        if(user==null){
            throw new ApiException(404, "User not found");
        }
          
        user.setPicture(null);
        userRepo.save(user);
   
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
