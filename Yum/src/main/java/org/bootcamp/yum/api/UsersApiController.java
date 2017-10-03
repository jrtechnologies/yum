
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

package org.bootcamp.yum.api;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.swagger.annotations.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;
import javax.persistence.OptimisticLockException;
import javax.validation.Valid;
import javax.validation.constraints.*;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import org.bootcamp.JwtCodec;
import org.bootcamp.yum.api.model.Error;
import org.bootcamp.yum.api.model.User;
import org.bootcamp.yum.api.model.UserReg;
import org.bootcamp.yum.api.model.UserSettings;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.bootcamp.yum.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
public class UsersApiController implements UsersApi {

    @Autowired
    UserRepository userRepo;
    @Autowired
    DailyOrderRepository dailyOrderRepo;

    private UsersService userService;

    @Autowired
    public UsersApiController(UsersService userService) {
        this.userService = userService;
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersGet(  
         @ApiParam(value = "Request pagination page") @RequestParam(value = "page", required = false) String page,
         @ApiParam(value = "Request pagination size / num of users") @RequestParam(value = "size", required = false) String size,
         @ApiParam(value = "Request orderBy filter") @RequestParam(value = "orderBy", required = false) String orderBy, 
         @ApiParam(value = "Request orderBy filter") @RequestParam(value = "orderDirection", required = false) String orderDirection,
         @ApiParam(value = "Request search term") @RequestParam(value = "lastName", required = false) String lastName) throws ApiException, Exception {
        //Call method to return all users from database, from class UsersService.
        return new ResponseEntity<>(userService.usersGet(   page, size, orderBy, orderDirection, lastName), HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersIdApprovePut(@ApiParam(value = "", required = true) @PathVariable("id") Long id,
            @NotNull @ApiParam(value = "Approve or disapprove", required = true) @RequestParam(value = "approve", required = true) Boolean approve,
            @ApiParam(value = "Force disapprove user") @RequestParam(value = "force", required = false) Boolean force) throws ApiException, Exception {
        userService.usersIdApprovePut(id, approve, force) ;
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersIdDelete(@ApiParam(value = "", required = true ) @PathVariable("id") Long id,
            @ApiParam(value = "") @RequestParam(value = "force", required = false) Boolean force) throws ApiException, Exception {
        //Call method to delete one user, from class UsersService.
        userService.usersIdDelete(id, force);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersIdForgotpwdPost(@ApiParam(value = "", required = true) @PathVariable("id") Long id) throws ApiException, Exception {
        return new ResponseEntity<>(userService.usersIdForgotpwdPost(id), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersIdGet(@ApiParam(value = "", required = true) @PathVariable("id") Long id) throws ApiException, Exception {
        //Call method to return one user, from class UsersService.
        return new ResponseEntity<>(userService.userIdGet(id), HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersIdPut(@ApiParam(value = "", required = true) @PathVariable("id") Long id,
            @ApiParam(value = "The user data to be updated", required = true) @Valid @RequestBody UserSettings user, Errors errors) throws ApiException, Exception {
        if (errors.hasErrors()) {//Check for validation error from UserSettings class(package:model)
            Error error = new Error();
            error.setError("400");
            error.setMessage("Validation Failed");
            System.out.println("" + errors.getAllErrors());
            return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
        }
        try {
            //Call method for update user from class UsersService.
            userService.usersIdPut(user, id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (OptimisticLockException ex) {
            try {
                User newUserVersion = userService.userIdGet(id);
                throw new ConcurrentModificationException(409, "Concurrent modification error", newUserVersion);    
            } catch (ApiException ex1){
                Logger.getLogger(UsersApiController.class.getName()).log(Level.SEVERE, null, ex1);
                throw new ApiException(500, "Concurrent modification exception: internal error");
            }
        }
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersPost(@ApiParam(value = "The user to save") @Valid @RequestBody UserReg user, Errors errors) throws ApiException, Exception {
        if (errors.hasErrors()) { //Check for validation error from UserReg class(package:model) 
            Error error = new Error();
            error.setError("400");
            error.setMessage("Validation Failed");
            System.out.println("" + errors.getAllErrors());
            return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
        }
        //Call method for save user in database from class UsersService.
        org.bootcamp.yum.data.entity.User userEntity = userService.usersPost(user);
        //After created return id of new user.
        return new ResponseEntity<>(userEntity.getId(), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
     
    public ResponseEntity<Void> usersIdPictureDelete(@PathVariable("id") Integer id) throws ApiException{
        org.bootcamp.yum.data.entity.User user =  userRepo.findById(id);
        if(user==null){
            throw new ApiException(404, "User not found");
        }
          
        user.setPicture(null);
        userRepo.save(user);
        
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    //@PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> usersIdPictureGet(@RequestParam(value = "token", required = true) String token, @PathVariable("id") Integer id)throws ApiException {
        org.bootcamp.yum.data.entity.User user =  userRepo.findById(id);
        
//        System.out.println("token:"+token);
//        System.out.println("id:"+id);
        if(user==null){
            //throw new ApiException(404, "User not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if(token==null || token.trim().length()==0){
            //throw new ApiException(400, "No token")
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
       
        Long clientUserId = 0L;
        try{
            Claims claims = JwtCodec.decode(token);
            clientUserId = Long.parseLong(claims.getSubject());
        } catch(JwtException e){
            //throw new ApiException(403, "Access denied");
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } 
       if(!user.hasPicture()){
            //throw new ApiException(404, "No picture");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        ByteArrayInputStream inputStream = new ByteArrayInputStream(user.getPicture()); 
        
        return ResponseEntity
        .ok()
        .contentLength(user.getPictureLength())
        .contentType(MediaType.parseMediaType("image/jpeg"))
        .body(new InputStreamResource(inputStream));
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Void> usersIdPicturePost(@PathVariable("id") Integer id, MultipartFile file)throws ApiException {
        org.bootcamp.yum.data.entity.User user =  userRepo.findById(id);
        if(user==null){
            throw new ApiException(404, "User not found");
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

                
                user.setPicture(bytes);
                userRepo.save(user);
                
            } catch (IOException ex) {
            throw new ApiException(500, "Cannot process image");
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
