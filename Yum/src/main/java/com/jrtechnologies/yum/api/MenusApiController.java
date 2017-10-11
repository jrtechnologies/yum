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
import com.jrtechnologies.yum.service.MenusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
public class MenusApiController implements MenusApi {
    
    private MenusService menusService;

    @Autowired
    public MenusApiController(MenusService menusService) {
        this.menusService = menusService;
    }
    
    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> menusWeeklyGet(@ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid) throws ApiException, Exception {
        //Return the current weekly menu.
        return new ResponseEntity<>(menusService.menusWeeklyGet(userid), HttpStatus.OK);
    }
    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> menusWeeklyWeekGet(@ApiParam(value = "ex. 02-2017",required=true ) @PathVariable("week") String week,
        @ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid) throws ApiException, Exception {
        //Return the Weekly menu from given week and year numbers..
        return new ResponseEntity<>(menusService.menusWeeklyWeekGet(week, userid), HttpStatus.OK);
    }
    
    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> menusMonthlyGet(
        @ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid) throws ApiException, Exception {
        //Return the current monthly ordered menu. 
        return new ResponseEntity<>(menusService.menusMonthlyGet(userid), HttpStatus.OK);
    }
    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> menusMonthlyMonthyearGet(@ApiParam(value = "ex. 12-2016",required=true ) @PathVariable("monthyear") String monthyear,
        @ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid) throws ApiException, Exception{
        //Return the Monthly menu from given month and year numbers..
        return new ResponseEntity<>(menusService.menusMonthlyMonthyearGet(monthyear, userid), HttpStatus.OK);
    } 
}
