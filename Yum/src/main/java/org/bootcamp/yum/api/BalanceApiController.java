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
import org.bootcamp.yum.api.model.Deposit;
import org.bootcamp.yum.api.model.Error;

import io.swagger.annotations.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import javax.validation.constraints.*;
import javax.validation.Valid;
import org.bootcamp.yum.service.BalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-26T10:52:56.671+03:00")

@Controller
public class BalanceApiController implements BalanceApi {

    @Autowired
    private BalanceService balanceService;
    
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> balanceIdGet(@ApiParam(value = "",required=true ) @PathVariable("id") Long id) throws ApiException {
        try {
            return new ResponseEntity<>(balanceService.balanceIdGet(id),HttpStatus.OK);
        } catch (ApiException ex) {
            int exCode = ex.getCode();
            return new ResponseEntity<>(HttpStatus.valueOf(exCode));
        } catch (Exception e) {
            Error error = new Error();
            error.setError("500");
            error.setMessage(e.getMessage());
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> balanceIdPut(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,
        @ApiParam(value = "" ,required=true )  @Valid @RequestBody Deposit deposit) throws ApiException {
        try {
            return new ResponseEntity<>(balanceService.balanceIdPut(id, deposit),HttpStatus.OK);     
        } catch (ConcurrentModificationException ex) {
            int exCode = ex.getCode();
            return new ResponseEntity<>(ex.getResponseDTO(), HttpStatus.valueOf(exCode));        
        } catch (ApiException ex) {
            int exCode = ex.getCode();
            return new ResponseEntity<>(HttpStatus.valueOf(exCode));
        } catch (Exception e) {
            Error error = new Error();
            error.setError("500");
            error.setMessage(e.getMessage());
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
