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
import org.joda.time.LocalDate;

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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-02T14:58:12.922+03:00")

@Api(value = "report", description = "the report API")
@RequestMapping(value="/api")
public interface ReportApi {

    @ApiOperation(value = "Send email with daily summary", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "Email sent", response = Void.class),
        @ApiResponse(code = 400, message = "bad request", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Error.class) })
    
    @RequestMapping(value = "/report/{day}",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin
    ResponseEntity<Object> reportDayPost(@ApiParam(value = "",required=true ) @PathVariable("day") String day) throws ApiException;

}
