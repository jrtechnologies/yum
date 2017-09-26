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

import java.math.BigDecimal;
import org.bootcamp.yum.api.model.Error;

import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-26T10:52:56.671+03:00")

@Api(value = "balance", description = "the balance API")
@RequestMapping(value="/api")
public interface BalanceApi {

    @ApiOperation(value = "", notes = "Get user's balance", response = BigDecimal.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "ok", response = BigDecimal.class),
        @ApiResponse(code = 400, message = "Bad request", response = Void.class),
        @ApiResponse(code = 404, message = "Not found", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Error.class) })
    
    @RequestMapping(value = "/balance/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin
    ResponseEntity<Object> balanceIdGet(@ApiParam(value = "",required=true ) @PathVariable("id") Long id) throws ApiException;


    @ApiOperation(value = "", notes = "Update user's balance", response = BigDecimal.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "ok", response = BigDecimal.class),
        @ApiResponse(code = 400, message = "Bad request", response = Void.class),
        @ApiResponse(code = 404, message = "Not found", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Error.class) })
    
    @RequestMapping(value = "/balance/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin        
    ResponseEntity<Object> balanceIdPut(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,@ApiParam(value = "" ,required=true )  @Valid @RequestBody BigDecimal amount)throws ApiException;

}
