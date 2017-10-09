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
import javax.validation.Valid;
import javax.validation.constraints.*;
import org.bootcamp.yum.api.model.ConcurrentOrderDeletion;
import org.bootcamp.yum.api.model.DailyMenu;
import org.bootcamp.yum.api.model.DailyMenuDetails;
import org.bootcamp.yum.api.model.DailyMenuOrder;
import org.bootcamp.yum.api.model.DailyOrder;
import org.bootcamp.yum.api.model.DailyOrderSummary;
import org.bootcamp.yum.api.model.Order;
import org.bootcamp.yum.api.model.OrderUpdate;
import org.bootcamp.yum.api.model.UpdateOrderItems;
import org.joda.time.LocalDate;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Api(value = "orders", description = "the orders API")
@RequestMapping(value="/api")
public interface OrdersApi {

    @ApiOperation(value = "Deletes specified order", notes = "Deletes the order", response = Object.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Order succesfully deleted", response = OrderUpdate.class),
        @ApiResponse(code = 400, message = "Order couldn't be deleted.", response = Void.class),
        @ApiResponse(code = 404, message = "Order not found (id).", response = Void.class),
        @ApiResponse(code = 410, message = "Concurrent Order Deletion", response = Void.class),
        @ApiResponse(code = 412, message = "Deadline for orders passed", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/orders/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    @CrossOrigin
    ResponseEntity<Object> ordersIdDelete(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,@ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid,
        @ApiParam(value = "dailymenu details id, version, date"  ) @RequestBody DailyMenuDetails dailyMenuDetails);
    
    @ApiOperation(value = "Modifies order for the specified day", notes = "Modify the order", response = DailyOrder.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Order succesfully retrieved", response = DailyOrder.class),
        @ApiResponse(code = 404, message = "Order not found", response = DailyOrder.class),
        @ApiResponse(code = 410, message = "Concurrent Order Deletion", response = DailyOrder.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyOrder.class) })
    @RequestMapping(value = "/orders/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin
    ResponseEntity<DailyOrder> ordersIdGet(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,
         @NotNull @ApiParam(value = "", required = true) @RequestParam(value = "dailyMenuId", required = true) Long dailyMenuId,
         @NotNull @ApiParam(value = "", required = true) @RequestParam(value = "dailyMenuVersion", required = true) int dailyMenuVersion,
         @NotNull @ApiParam(value = "", required = true) @RequestParam(value = "dailyMenuDate", required = true) LocalDate dailyMenuDate,@ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid) throws ApiException;


    @ApiOperation(value = "Modifies order for the specified day", notes = "Modify the order", response = OrderUpdate.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Order succesfully modified", response = OrderUpdate.class),
        @ApiResponse(code = 304, message = "Unmodified data", response = Void.class),
        @ApiResponse(code = 400, message = "Order couldn't be modified.", response = Void.class),
        @ApiResponse(code = 402, message = "Not enough balance.", response = Void.class),
        @ApiResponse(code = 404, message = "Order not found (id)", response = Void.class),
        @ApiResponse(code = 409, message = "Concurrent modification error", response = DailyOrder.class),
        @ApiResponse(code = 410, message = "Concurrent Order Deletion", response = ConcurrentOrderDeletion.class),
        @ApiResponse(code = 412, message = "Deadline for orders passed", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Error.class) })
    @RequestMapping(value = "/orders/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin
    ResponseEntity<Object> ordersIdPut(@ApiParam(value = "",required=true ) @PathVariable("id") Long id,@ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid,
        @ApiParam(value = "The order items to modify"  ) @RequestBody UpdateOrderItems updateOrderItems, Errors errors) throws ApiException;

    @ApiOperation(value = "Place a new order", notes = "A new order for the specified daily menu", response = DailyMenu.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "hungry", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Order succesfully placed", response = DailyMenu.class),
        @ApiResponse(code = 400, message = "Order couldn't have been placed.", response = DailyMenu.class),
        @ApiResponse(code = 402, message = "Not enough balance.", response = Void.class),
        @ApiResponse(code = 409, message = "Order already placed", response = DailyMenu.class),
        @ApiResponse(code = 410, message = "Concurrent Order Deletion", response = DailyMenu.class),
        @ApiResponse(code = 412, message = "Deadline for orders passed", response = DailyMenu.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenu.class) })
    @RequestMapping(value = "/orders",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin
    ResponseEntity<Object> ordersPost(@ApiParam(value = "The order to place"  ) @RequestBody Order order,@ApiParam(value = "") @RequestParam(value = "userid", required = false) Long userid, Errors errors) throws ApiException;
    
    /////  CHEF   /////
    
    @ApiOperation(value = "Get a summary of orders by month", notes = "", response = DailyMenuOrder.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Month's summary of orders", response = DailyMenuOrder.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenuOrder.class) })
    @RequestMapping(value = "/orders/monthly",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin        
    ResponseEntity<List<DailyMenuOrder>> ordersMonthlyGet()throws ApiException, Exception;
     
    
    @ApiOperation(value = "Get daily orders summary", notes = "", response = DailyOrderSummary.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Daily order", response = DailyOrderSummary.class),
        @ApiResponse(code = 400, message = "bad request", response = DailyOrderSummary.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyOrderSummary.class) })
    @RequestMapping(value = "/orders/daily/{day}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin        
    ResponseEntity<DailyOrderSummary> ordersDailyDayGet(@ApiParam(value = "",required=true ) @PathVariable("day") @Valid @NotNull String day)throws ApiException, Exception;
    
    
    @ApiOperation(value = "Get a summary of orders by month", notes = "", response = DailyMenuOrder.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Month's summary of orders", response = DailyMenuOrder.class),
        @ApiResponse(code = 400, message = "not valid request", response = DailyMenuOrder.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = DailyMenuOrder.class) })
    @RequestMapping(value = "/orders/monthly/{monthyear}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin        
    ResponseEntity<List<DailyMenuOrder>> ordersMonthlyMonthyearGet(@ApiParam(value = "ex 02-2017",required=true ) @PathVariable("monthyear") @Valid @NotNull String monthyear)throws ApiException, Exception;




}
