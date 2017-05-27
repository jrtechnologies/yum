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
import org.bootcamp.yum.api.model.Error;
import org.bootcamp.yum.api.model.Login;
import org.bootcamp.yum.api.model.PrivacyInfo;
import org.bootcamp.yum.api.model.ResetPwd;
import org.bootcamp.yum.api.model.Token;
import org.bootcamp.yum.api.model.UserReg;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Api(value = "auth", description = "the auth API")
@RequestMapping(value="/api")
public interface AuthApi {

    @ApiOperation(value = "", notes = "Remind password", response = Void.class, tags={ "auth", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "Reset password email sent", response = Void.class),
        @ApiResponse(code = 400, message = "Bad email", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/auth/forgotpwd",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin  
    ResponseEntity<Void> authForgotpwdPost(@ApiParam(value = "The email" ,required=true ) @RequestBody String email) throws ApiException;

    
    @ApiOperation(value = "", notes = "Allow users to log in, and to receive a Token", response = Token.class, tags={ "auth", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Login Success.", response = Token.class),
        @ApiResponse(code = 403, message = "User can not login (not approved).", response = Token.class),
        @ApiResponse(code = 404, message = "User not found (bad credentials).", response = Token.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Token.class) })
    @RequestMapping(value = "/auth/login",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin 
    ResponseEntity<Token> authLoginPost(@ApiParam(value = "The email/password" ,required=true ) @RequestBody Login body) throws ApiException;
    

    @ApiOperation(value = "", notes = "Allow users to register", response = Void.class, tags={ "auth", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Registration Success", response = Void.class),
        @ApiResponse(code = 400, message = "Bad registration data", response = Void.class),
        @ApiResponse(code = 412, message = "user already exists", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/auth/register",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin  
    ResponseEntity<Error> authRegisterPost(@ApiParam(value = "The email/password" ,required=true ) @Valid @RequestBody UserReg body, Errors errors) throws ApiException;


    @ApiOperation(value = "", notes = "Allow users to reset password", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "auth", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "Password change Success", response = Void.class),
        @ApiResponse(code = 400, message = "Bad reset password data", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/auth/changepwd",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin          
    ResponseEntity<Error> authChangepwdPut(@ApiParam(value = "token/password" ,required=true ) @RequestBody ResetPwd body, Errors errors) throws ApiException;

    
    @ApiOperation(value = "", notes = "get yum info", response = Info.class, tags={ "auth", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "ok", response = Info.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Info.class) })
    @RequestMapping(value = "/auth/privacy",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin   
    ResponseEntity<PrivacyInfo> authPrivacyGet() throws ApiException;
}
