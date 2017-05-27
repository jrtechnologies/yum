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
import org.bootcamp.yum.api.model.Settings;
import org.bootcamp.yum.api.model.User;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-05-02T13:29:02.045+03:00")

@Api(value = "settings", description = "the settings API")
@RequestMapping(value="/api")
public interface SettingsApi {

    @ApiOperation(value = "", notes = "get user settings", response = User.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "User data", response = User.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = User.class) })
    @RequestMapping(value = "/settings",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Object> settingsGet() throws ApiException;


    @ApiOperation(value = "Uploads a file.", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Picture set", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/settings/picture",
        produces = { "application/json" }, 
        consumes = { "multipart/form-data" },
        method = RequestMethod.POST)
    @CrossOrigin
    ResponseEntity<Void> settingsPicturePost(@ApiParam(value = "file detail") @RequestPart("file") MultipartFile upfile,
        @ApiParam(value = "Description of file contents." ) @RequestPart(value="userid", required=false)  Integer userid) throws ApiException;


    

    @ApiOperation(value = "", notes = "set user data/settings", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "User data changed successfully", response = Void.class),
        @ApiResponse(code = 400, message = "Invalid data", response = Void.class),
        @ApiResponse(code = 409, message = "Concurrent modification error", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/settings",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin
    ResponseEntity<Object> settingsPut(@ApiParam(value = "User data" ,required=true ) @RequestBody Settings upUser, Errors errors) throws ApiException;
    
    

    @ApiOperation(value = "", notes = "Get profile picture.", response = InputStreamResource.class
    )
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "a picture", response = InputStreamResource.class)    
    })
    @RequestMapping(value = "/settings/picture/token",
        produces = { "image/jpeg" }, 
        method = RequestMethod.GET)
    @CrossOrigin 
    ResponseEntity<Object> settingsPictureTokenGet( @RequestParam(value = "token", required = true) String token)throws ApiException;

    
    @ApiOperation(value = "deletes profile picture.", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "Picture deleted", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/settings/picture",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    @CrossOrigin        
    ResponseEntity<Void> settingsPictureDelete() throws ApiException;
}
