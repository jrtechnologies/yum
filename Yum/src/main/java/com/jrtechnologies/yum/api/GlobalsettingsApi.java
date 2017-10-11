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

import io.swagger.annotations.*;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import com.jrtechnologies.yum.api.model.GlobalSettings;
import com.jrtechnologies.yum.api.model.Holidays;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Api(value = "globalsettings", description = "the globalsettings API")
@RequestMapping(value="/api")
public interface GlobalsettingsApi {

    @ApiOperation(value = "", notes = "get global settings", response = GlobalSettings.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "ok", response = GlobalSettings.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = GlobalSettings.class) })
    @RequestMapping(value = "/globalsettings",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Object> globalsettingsGet() throws ApiException;


    @ApiOperation(value = "", notes = "set global settings", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "settings saved", response = Void.class),
        @ApiResponse(code = 400, message = "An unexpected error occured.", response = Void.class),
        @ApiResponse(code = 409, message = "Concurrent modification error", response = GlobalSettings.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/globalsettings",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin          
    ResponseEntity<Object> globalsettingsPut(@ApiParam(value = "The global settings to be updated" ,required=true ) @RequestBody GlobalSettings settings) throws ApiException;

    
    @ApiOperation(value = "", notes = "get holidays by year", response = Holidays.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "ok", response = Holidays.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = com.jrtechnologies.yum.api.model.Error.class) })
    
    @RequestMapping(value = "/globalsettings/holidays/{year}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin
    ResponseEntity<Holidays> globalsettingsHolidaysYearGet( @Min(2000) @Max(2100)@ApiParam(value = "",required=true ) @PathVariable("year") Integer year) throws ApiException;


    @ApiOperation(value = "", notes = "set holidays by year", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "admin", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "holidays saved", response = Void.class),
        @ApiResponse(code = 400, message = "An unexpected error occured.", response = com.jrtechnologies.yum.api.model.Error.class),
        @ApiResponse(code = 409, message = "Concurrent modification error", response = Holidays.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = com.jrtechnologies.yum.api.model.Error.class) })
    
    @RequestMapping(value = "/globalsettings/holidays/{year}",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin
    ResponseEntity<Object> globalsettingsHolidaysYearPost( @Min(2000) @Max(2100)@ApiParam(value = "",required=true ) @PathVariable("year") Integer year,@ApiParam(value = "The holidays to set" ,required=true )  @Valid @RequestBody Holidays holidays) throws ApiException;

}
