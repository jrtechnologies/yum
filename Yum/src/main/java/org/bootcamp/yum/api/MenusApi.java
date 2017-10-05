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
import org.bootcamp.yum.api.model.DailyMenu;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Api(value = "menus", description = "the menus API")
@RequestMapping(value="/api")
public interface MenusApi {

    @ApiOperation(value = "Gets monthly menus.", notes = "Return a list containing all menus of the month.", response = DailyMenu.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A list of daily menus.", response = DailyMenu.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenu.class) })
    @RequestMapping(value = "/menus/monthly",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Object> menusMonthlyGet(@ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid) throws ApiException, Exception;


    @ApiOperation(value = "Gets monthly menus of the specified month.", notes = "Returns a list containing all menus of the month.", response = DailyMenu.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A list of daily menus.", response = DailyMenu.class),
        @ApiResponse(code = 400, message = "Monthly menu not found.", response = DailyMenu.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenu.class) })
    @RequestMapping(value = "/menus/monthly/{monthyear}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Object> menusMonthlyMonthyearGet(@ApiParam(value = "ex. 12-2016",required=true ) @PathVariable("monthyear") String monthyear,@ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid) throws ApiException, Exception;


    @ApiOperation(value = "Gets weekly menus", notes = "Returns a list containing all menus of the week.", response = DailyMenu.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A list of daily menus", response = DailyMenu.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenu.class) })
    @RequestMapping(value = "/menus/weekly",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Object> menusWeeklyGet(@ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid) throws ApiException, Exception;


    @ApiOperation(value = "Gets weekly menu of the specified week", notes = "Returns a list containing all menus of the week.", response = DailyMenu.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A list of daily menus", response = DailyMenu.class),
        @ApiResponse(code = 400, message = "Weekly menu not found.", response = DailyMenu.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenu.class) })
    @RequestMapping(value = "/menus/weekly/{week}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Object> menusWeeklyWeekGet(@ApiParam(value = "ex. 02-2017",required=true ) @PathVariable("week") String week, @ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid) throws ApiException, Exception;

}
