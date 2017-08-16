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
import org.bootcamp.yum.api.model.GlobalSettings;
import org.bootcamp.yum.api.model.Login;
import org.bootcamp.yum.api.model.PrivacyInfo;
import org.bootcamp.yum.api.model.ResetPwd;
import org.bootcamp.yum.api.model.Token;
import org.bootcamp.yum.api.model.UserReg;
import org.bootcamp.yum.data.repository.UserRepository;
import org.bootcamp.yum.service.AuthService;
import org.bootcamp.yum.service.GlobalsettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
public class AuthApiController implements AuthApi {

    @Autowired
    UserRepository userRep;

    private AuthService authService;
    
    @Autowired
    private GlobalsettingsService globalsettingsService;

    @Autowired
    public AuthApiController(AuthService authService) {
        this.authService = authService;
          
    }

    @Override
    public ResponseEntity<Void> authForgotpwdPost(@ApiParam(value = "The email", required = true) @RequestBody String email) throws ApiException {
        authService.authForgotpwdPost(email);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @Override
    public ResponseEntity<Token> authLoginPost(@ApiParam(value = "The email/password", required = true) @RequestBody Login body) throws ApiException {
        return new ResponseEntity<>(authService.authLoginPost(body), HttpStatus.OK);         
    }

    @Transactional
    @Override
    public ResponseEntity<Error> authRegisterPost(@ApiParam(value = "The email/password", required = true) @Valid @RequestBody UserReg body, Errors errors) throws ApiException {

        if (errors.hasErrors()) {
            Error error = new Error();
            error.setError("400");
            error.setMessage("Validation Failed");
            System.out.println("" + errors.getAllErrors());
            return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
        }
        authService.authRegisterPost(body);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Error> authChangepwdPut(@ApiParam(value = "token/password" ,required=true ) @RequestBody ResetPwd body, Errors errors) throws ApiException {
        if (errors.hasErrors()) {
            Error error = new Error();
            error.setError("400");
            error.setMessage("Validation Failed");
            System.out.println("" + errors.getAllErrors());
            return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
        }
        authService.authChangepwdPut(body);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    public ResponseEntity<PrivacyInfo> authPrivacyGet() throws ApiException {
        
        org.bootcamp.yum.api.model.PrivacyInfo info = new org.bootcamp.yum.api.model.PrivacyInfo();
        GlobalSettings gs = globalsettingsService.globalsettingsGet();
 
        info.setPolicy(gs.getPolicy());
        info.setTos(gs.getTos());
        info.setLastEdit(gs.getLastEdit());
         
        return new ResponseEntity<PrivacyInfo>( info, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> authMethodGet() {
        
        return new ResponseEntity<String> (authService.authMethodGet(),HttpStatus.OK);
        
    }

    
    
}
