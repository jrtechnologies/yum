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
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.OptimisticLockException;
import javax.validation.constraints.NotNull;
import org.bootcamp.yum.api.model.DailyMenuDetails;
import org.bootcamp.yum.api.model.DailyMenuOrder;
import org.bootcamp.yum.api.model.DailyOrder;
import org.bootcamp.yum.api.model.DailyOrderSummary;
import org.bootcamp.yum.api.model.Error;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.Order;
import org.bootcamp.yum.api.model.UpdateOrderItems;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.OrderItemRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.bootcamp.yum.service.ChefOrdersService;
import org.bootcamp.yum.service.OrdersService;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
public class OrdersApiController implements OrdersApi {

    //delete refactor
    @Autowired
    DailyOrderRepository dailyOrderRep;
    @Autowired
    DailyMenuRepository dailyMenuRep;
    @Autowired
    OrderItemRepository orderItemRep;
    @Autowired
    FoodRepository foodRep;
    @Autowired
    UserRepository userRep;
    //delete refactor
    
    
    @Autowired
    private OrdersService ordersService;

    @Autowired
    private ChefOrdersService chefOrdersService;
    
    @Autowired
    public OrdersApiController(OrdersService ordersService, ChefOrdersService chefOrdersService) {
        this.ordersService = ordersService;
        this.chefOrdersService = chefOrdersService;
    }

    @Override
    public ResponseEntity<Object> ordersIdDelete(@ApiParam(value = "", required = true) @PathVariable("id") Long id,
            @ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid,
            @ApiParam(value = "dailymenu details id, version, date"  ) @RequestBody DailyMenuDetails dailyMenuDetails) {
        try {
//            ordersService.ordersIdDelete(id, dailyMenuDetails, userid);
            return new ResponseEntity<>(ordersService.ordersIdDelete(id, dailyMenuDetails, userid), HttpStatus.OK);
        } catch (ConcurrentDeletionException ex) {
            int exCode = ex.getCode();
            return new ResponseEntity<>(ex.getResponseDTO() ,HttpStatus.valueOf(exCode));    
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

    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<DailyOrder> ordersIdGet(@ApiParam(value = "", required = true) @PathVariable("id") Long id,
        @NotNull @ApiParam(value = "", required = true) @RequestParam(value = "dailyMenuId", required = true) Long dailyMenuId,
        @NotNull @ApiParam(value = "", required = true) @RequestParam(value = "dailyMenuVersion", required = true) int dailyMenuVersion,
        @NotNull @ApiParam(value = "", required = true) @RequestParam(value = "dailyMenuDate", required = true) @DateTimeFormat(pattern = "YYYY-MM-dd") LocalDate dailyMenuDate,
        @ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid) throws ApiException {
        DailyOrder dailyOrder = ordersService.ordersIdGet(id, dailyMenuId, dailyMenuVersion, dailyMenuDate, userid);
        return new ResponseEntity<>(dailyOrder, HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> ordersIdPut(@ApiParam(value = "", required = true) @PathVariable("id") Long id,
        @ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid,
            @ApiParam(value = "The order items to modify") @RequestBody UpdateOrderItems updateOrderItems, Errors errors) throws ApiException {

        if (errors.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        try {
            //OrderUpdate orderUpdate = ordersService.ordersIdPut(id, updateOrderItems, userid);
            return new ResponseEntity<>(ordersService.ordersIdPut(id, updateOrderItems, userid), HttpStatus.OK);
        } catch (OptimisticLockException ex) {
            try {
                DailyOrder dailyOrder = ordersService.ordersIdGet(id,updateOrderItems.getDailyMenuId(),updateOrderItems.getDailyMenuVersion(), updateOrderItems.getDailyMenuDate(), userid );
                throw new ConcurrentModificationException(409, "Concurrent modification error.", dailyOrder);
            } catch (ConcurrentDeletionException e) {
            int exCode = e.getCode();
            return new ResponseEntity<>(e.getResponseDTO() ,HttpStatus.valueOf(exCode));   
            
            } catch (ApiException ex1) {
                Logger.getLogger(OrdersApiController.class.getName()).log(Level.SEVERE, null, ex1);
                throw new ApiException(500, "Concurrent modification exception: internal error");
            }

        }

    }

    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<Object> ordersPost(@ApiParam(value = "The order to place") @RequestBody Order order,
        @ApiParam(value = "") @RequestParam(value = "userid", required = false, defaultValue = "0") Long userid, Errors errors) throws ApiException {

        if (errors.hasErrors()) {
            Error error = new Error();
            error.setError("400");
            error.setMessage("Validation Failed");
            return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(ordersService.ordersPost(order, userid), HttpStatus.OK);
    }
    
    
    /////  CHEF   /////
    
    @Override
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<DailyOrderSummary> ordersDailyDayGet(@ApiParam(value = "", required = true) @PathVariable("day") String day) throws ApiException, Exception {
        // do some magic!
        
        DailyOrderSummary dailyOrderSummary = chefOrdersService.ordersDailyDayGet(day);
        return new ResponseEntity<>(dailyOrderSummary, HttpStatus.OK);
    }
    
    @Override
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<List<DailyMenuOrder>> ordersMonthlyGet() throws ApiException, Exception {
        
        DateTime dt = new DateTime();  // current time
        String monthyear =  String.format("%02d", dt.getMonthOfYear())+"-"+dt.getYear(); 
         
        List<DailyMenuOrder> dailyMenuOrder = chefOrdersService.ordersMonthlyMonthyearGet(monthyear);
        return new ResponseEntity<>(dailyMenuOrder, HttpStatus.OK);
    }
    
    @Override
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<List<DailyMenuOrder>> ordersMonthlyMonthyearGet(@ApiParam(value = "ex 02-2017", required = true) @PathVariable("monthyear") String monthyear) throws ApiException, Exception {
        
        List<DailyMenuOrder> dailyMenuOrder = chefOrdersService.ordersMonthlyMonthyearGet(monthyear);
        return new ResponseEntity<>(dailyMenuOrder, HttpStatus.OK);
    }
}
