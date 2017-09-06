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

import org.bootcamp.yum.api.model.Error;

import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-08-24T12:11:06.533+03:00")

@Api(value = "refreshToken", description = "the refreshToken API")
@RequestMapping(value="/api")
public interface RefreshTokenApi {

    @ApiOperation(value = "", notes = "get refreshed token", response = String.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "refreshed token string", response = String.class),
        @ApiResponse(code = 404, message = "Invalid role", response = Error.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Error.class) })
    
    @RequestMapping(value = "/refreshToken",
        produces = { "text/plain" }, 
        method = RequestMethod.GET)
    @CrossOrigin   
    ResponseEntity<String> refreshTokenGet() throws ApiException;

}
