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
import org.bootcamp.yum.api.model.DailyMenuChef;
import org.bootcamp.yum.api.model.DailyMenuEdit;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.NewDailyMenu;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Api(value = "dailyMenus", description = "the dailyMenus API")
@RequestMapping(value="/api")
public interface DailyMenusApi {

    @ApiOperation(value = "Put Food/Foods in a dailyMenu", notes = "", response = LastEdit.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "daily menu updated ok", response = LastEdit.class),
        @ApiResponse(code = 204, message = "daily Menu deleted", response = LastEdit.class),
        @ApiResponse(code = 400, message = "Bad Request for daily menu", response = LastEdit.class),
        @ApiResponse(code = 404, message = "daily menu not found", response = LastEdit.class),
        @ApiResponse(code = 409, message = "Concurrent modification error", response = LastEdit.class),
        @ApiResponse(code = 412, message = "can't modify menus older than yesterday", response = LastEdit.class),
        @ApiResponse(code = 417, message = "The request is failed because there are orders on the food", response = LastEdit.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = LastEdit.class) })
    @RequestMapping(value = "/dailyMenus/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin  
    ResponseEntity<Object> dailyMenusIdPut(@ApiParam(value = "",required=true ) @PathVariable("id") String id,
        @ApiParam(value = "The daily menu to be updated" ,required=true ) @RequestBody DailyMenuEdit dailyMenu) throws ApiException;


    @ApiOperation(value = "Gets all dailyMenus", notes = "Return a list of all dailyMenus", response = DailyMenuChef.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A list of dailyMenus", response = DailyMenuChef.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenuChef.class) })
    @RequestMapping(value = "/dailyMenus/monthly",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin  
    ResponseEntity<Object> dailyMenusMonthlyGet() throws ApiException;


    @ApiOperation(value = "Get dailyMenus by month", notes = "", response = DailyMenuChef.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Month's dailyMenus found", response = DailyMenuChef.class),
        @ApiResponse(code = 400, message = "Month's dailyMenus not found", response = DailyMenuChef.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenuChef.class) })
    @RequestMapping(value = "/dailyMenus/monthly/{monthyear}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin  
    ResponseEntity<Object> dailyMenusMonthlyMonthyearGet(@ApiParam(value = "ex. 02-2017",required=true ) @PathVariable("monthyear") String monthyear) throws ApiException;


    @ApiOperation(value = "New daily menu", notes = "", response = DailyMenuChef.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "new daily menu ok", response = DailyMenuChef.class),
        @ApiResponse(code = 400, message = "daily menu bad data", response = DailyMenuChef.class),
        @ApiResponse(code = 409, message = "A menu was already created for that day", response = DailyMenuChef.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenuChef.class) })
    @RequestMapping(value = "/dailyMenus",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin  
    ResponseEntity<Object> dailyMenusPost(@ApiParam(value = "A new daily menu" ,required=true ) @RequestBody NewDailyMenu newDailyMenu) throws ApiException;

}
