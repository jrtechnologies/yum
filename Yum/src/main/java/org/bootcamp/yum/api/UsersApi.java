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

import io.swagger.annotations.*;
import javax.validation.Valid;
import javax.validation.constraints.*;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.Message;
import org.bootcamp.yum.api.model.User;
import org.bootcamp.yum.api.model.UserReg;
import org.bootcamp.yum.api.model.UserSettings;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Api(value = "users", description = "the users API")
@RequestMapping(value="/api")
public interface UsersApi {

    @ApiOperation(value = "Get users", notes = "", response = User.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Get User list ok", response = User.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = User.class) })
    @RequestMapping(value = "/users",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Object> usersGet(  
         @ApiParam(value = "Request pagination page") @RequestParam(value = "page", required = false) String page,
         @ApiParam(value = "Request pagination size / num of users") @RequestParam(value = "size", required = false) String size,
         @ApiParam(value = "Request orderBy filter") @RequestParam(value = "orderBy", required = false) String orderBy,
         @ApiParam(value = "Request orderBy filter") @RequestParam(value = "orderDirection", required = false) String orderDirection,
         @ApiParam(value = "Request search term") @RequestParam(value = "lastName", required = false) String lastName) throws ApiException, Exception;

    @ApiOperation(value = "", notes = "Change approve status of user", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "no content", response = Void.class),
        @ApiResponse(code = 400, message = "Bad request", response = Void.class),
        @ApiResponse(code = 404, message = "not found", response = Void.class),
        @ApiResponse(code = 409, message = "Non-final orders found", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/users/{id}/approve",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin        
    ResponseEntity<Object> usersIdApprovePut(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,
         @NotNull @ApiParam(value = "Approve or disapprove", required = true) @RequestParam(value = "approve", required = true) Boolean approve,
         @ApiParam(value = "Force disapprove user") @RequestParam(value = "force", required = false) Boolean force) throws ApiException, Exception;

    @ApiOperation(value = "Deletes an existing user", notes = " ", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "User successfully deleted", response = Void.class),
        @ApiResponse(code = 400, message = "User couldn't be deleted", response = Void.class),
        @ApiResponse(code = 402, message = "Mix final orders", response = Void.class),
        @ApiResponse(code = 404, message = "User not found", response = Void.class),
        @ApiResponse(code = 409, message = "Only not final orders", response = Void.class),
        @ApiResponse(code = 412, message = "Only final orders", response = Void.class) })
    @RequestMapping(value = "/users/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    @CrossOrigin 
    ResponseEntity<Object> usersIdDelete(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,
            @ApiParam(value = "") @RequestParam(value = "force", required = false) Boolean force) throws ApiException, Exception;


    @ApiOperation(value = "", notes = "initiate pass reset", response = Message.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 201, message = "A custom message.", response = Message.class),
        @ApiResponse(code = 400, message = "An unexpected error occured.", response = Message.class),
        @ApiResponse(code = 404, message = "not found", response = Message.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Message.class) })
    @RequestMapping(value = "/users/{id}/forgotpwd",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin          
    ResponseEntity<Object> usersIdForgotpwdPost(@ApiParam(value = "",required=true ) @PathVariable("id") Long id) throws ApiException, Exception;


    @ApiOperation(value = "Get user by id", notes = "", response = User.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "user found", response = User.class),
        @ApiResponse(code = 404, message = "User not found", response = User.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = User.class) })
    @RequestMapping(value = "/users/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin 
    ResponseEntity<Object> usersIdGet(@ApiParam(value = "",required=true ) @PathVariable("id") Long id) throws ApiException, Exception;


    @ApiOperation(value = "Updates an existing user", notes = "Admin can update user data EXCEPT password. Can only initiate a pass reset.", response = LastEdit.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "User successfully updated", response = LastEdit.class),
        @ApiResponse(code = 400, message = "User couldn't be updated", response = LastEdit.class),
        @ApiResponse(code = 404, message = "User not found", response = LastEdit.class),
        @ApiResponse(code = 409, message = "Concurrent modification error", response = LastEdit.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = LastEdit.class) })
    @RequestMapping(value = "/users/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin 
    ResponseEntity<Object> usersIdPut(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,
        @ApiParam(value = "The user data to be updated" ,required=true )@Valid @RequestBody UserSettings user, Errors errors) throws ApiException, Exception;


    @ApiOperation(value = "", notes = "creates a new user", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 201, message = "User Created Successfully", response = Void.class),
        @ApiResponse(code = 400, message = "An unexpected error occured.", response = Void.class),
        @ApiResponse(code = 412, message = "user already exists", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/users",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin 
    ResponseEntity<Object> usersPost(@ApiParam(value = "The user to save"  )@Valid @RequestBody UserReg user, Errors errors) throws ApiException, Exception;
    
    
    
    @ApiOperation(value = "deletes profile picture.", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Picture deleted", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/users/{id}/picture",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    @CrossOrigin 
    ResponseEntity<Void> usersIdPictureDelete(@ApiParam(value = "user id",required=true ) @PathVariable("id") Integer id)throws ApiException;


    @ApiOperation(value = "", notes = "Get profile picture.", response = InputStreamResource.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A jpeg file.", response = InputStreamResource.class) })
    @RequestMapping(value = "/users/{id}/picture/token",
        produces = { "image/jpeg" }, 
        method = RequestMethod.GET)
    @CrossOrigin    
    ResponseEntity<Object> usersIdPictureGet( @NotNull @ApiParam(value = "auth token", required = true) @RequestParam(value = "token", required = true) String token,
        @ApiParam(value = "user id",required=true ) @PathVariable("id") Integer id)throws ApiException;


    @ApiOperation(value = "Uploads a file.", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Picture set", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/users/{id}/picture",
        produces = { "application/json" }, 
        consumes = { "multipart/form-data" },
        method = RequestMethod.POST)
    @CrossOrigin 
    ResponseEntity<Void> usersIdPicturePost(@ApiParam(value = "user id",required=true ) @PathVariable("id") Integer id,
        @ApiParam(value = "file detail") @RequestPart("file") MultipartFile file)throws ApiException;

    
         
    
}
