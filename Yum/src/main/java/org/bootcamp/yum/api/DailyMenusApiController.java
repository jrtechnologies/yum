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
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.OptimisticLockException;
import javax.transaction.Transactional;
import org.bootcamp.yum.api.model.DailyMenuChef;
import org.bootcamp.yum.api.model.DailyMenuEdit;
import org.bootcamp.yum.api.model.NewDailyMenu;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.OrderItemRepository;
import org.bootcamp.yum.service.DailyMenuService;
import org.junit.Ignore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
public class DailyMenusApiController implements DailyMenusApi {
    
    @Autowired
    DailyMenuRepository dailyMenuRep;
    @Autowired
    DailyOrderRepository dailyOrderRep;
    @Autowired
    OrderItemRepository orderItemRep;
    @Autowired
    FoodRepository foodRep;
    
    private DailyMenuService dailyMenuService;

    @Autowired
    public DailyMenusApiController(DailyMenuService dailyMenuService) {
        this.dailyMenuService = dailyMenuService;
    }

    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Void> dailyMenusIdDelete(@ApiParam(value = "",required=true ) @PathVariable("id") Long id) throws ApiException {
         
       // return new ResponseEntity<Void>(HttpStatus.OK);
       try { 
        dailyMenuService.dailyMenusIdDelete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
        } catch (OptimisticLockException ex) {
            Logger.getLogger(DailyMenusApiController.class.getName()).log(Level.SEVERE, null, ex);
            throw new ApiException(500, "Concurrent modification exception: internal error");
        }    
    }


    /**
     * @update. Chef updates the daily menu
     */
    @Override
    @PreAuthorize("hasAuthority('chef')")
    @Transactional
    public ResponseEntity<Object> dailyMenusIdPut(@ApiParam(value = "",required=true ) @PathVariable("id") String id,
        @ApiParam(value = "The daily menu to be updated" ,required=true ) @RequestBody DailyMenuEdit dailyMenu) throws ApiException, ConcurrentModificationException, ConcurrentDeletionException {
        
        Long dailyMenusId = Long.parseLong(id); // id (DTO) from the getDailyMenuChef he wants to insert foods
        
        try {
            //dailyMenuService.dailyMenusIdPut(dailyMenusId, dailyMenu);
            /****         HttpStatus.OK        ****/
            return new ResponseEntity<>( dailyMenuService.dailyMenusIdPut(dailyMenusId, dailyMenu), HttpStatus.OK);
            /****         HttpStatus.OK        ****/
        } catch (OptimisticLockException ex) {
            Logger.getLogger(DailyMenusApiController.class.getName()).log(Level.SEVERE, null, ex);
            throw new ApiException(500, "Concurrent modification exception: internal error");
        }     
    }    

    /**
     * @return a list to the chef, of Daily Menus of the current month
     */
    @Override
    @Ignore
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<Object> dailyMenusMonthlyGet() throws ApiException{
        
        return new ResponseEntity<>(dailyMenuService.dailyMenusMonthlyGet(), HttpStatus.OK);
    }

    /**
     * @return a list to the chef, of Daily Menus of month & year he wants
     */
    @Override
    @Ignore
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<Object> dailyMenusMonthlyMonthyearGet(@ApiParam(value = "ex. 02-2017",required=true ) @PathVariable("monthyear") String monthyear) throws ApiException{
        
        return new ResponseEntity<>(dailyMenuService.dailyMenusMonthlyMonthyearGet(monthyear), HttpStatus.OK);
    }

    /**
     * @post Chef creates a new Daily Menu, in a specific date
     */
    @Override
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<Object> dailyMenusPost(@ApiParam(value = "A new daily menu" ,required=true ) @RequestBody NewDailyMenu newDailyMenu) throws ApiException, ConcurrentCreationException{
        
        try {
            //dailyMenuService.dailyMenusPost(newDailyMenu);
            DailyMenuChef dailyMenusPost = dailyMenuService.dailyMenusPost(newDailyMenu);
            return new ResponseEntity<>(dailyMenusPost, HttpStatus.OK);
        } catch (OptimisticLockException ex) {
            Logger.getLogger(DailyMenusApiController.class.getName()).log(Level.SEVERE, null, ex);
            throw new ApiException(500, "Concurrent modification exception: internal error");
        } 
    }

}
