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
import javax.validation.Valid;
import javax.validation.constraints.*;
import org.bootcamp.yum.api.model.EditedFood;
import org.bootcamp.yum.api.model.Food;
import org.bootcamp.yum.api.model.FoodDetails;
import org.bootcamp.yum.api.model.FoodEditable;
import org.bootcamp.yum.api.model.FoodWithStats;
import org.bootcamp.yum.api.model.FoodsPage;
import org.bootcamp.yum.api.model.Message;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-21T15:50:12.081+03:00")


@Api(value = "foods", description = "the foods API")
@RequestMapping(value="/api")
@Validated
public interface FoodsApi {
 
 
    @ApiOperation(value = "Get food by name", notes = "", response = Food.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Food found", response = Food.class),
        @ApiResponse(code = 404, message = "Food not found", response = Food.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Food.class) })
    @RequestMapping(value = "/foods/findByName/{name}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<Food> foodsFindByNameNameGet(@ApiParam(value = "",required=true ) @PathVariable("name") String name) throws ApiException, Exception;


    @ApiOperation(value = "Deletes an existing food", notes = "Chef can update food name, type, description or price", response = Void.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Food successfully archived", response = Void.class),
        @ApiResponse(code = 204, message = "Food successfully deleted", response = Void.class),
        @ApiResponse(code = 404, message = "Food not found", response = Void.class),
        @ApiResponse(code = 412, message = "Food couldn't be deleted", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/foods/{foodId}",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    @CrossOrigin          
    ResponseEntity<Void> foodsFoodIdDelete(@ApiParam(value = "",required=true ) @PathVariable("foodId") Long foodId,
         @ApiParam(value = "") @RequestParam(value = "archive", required = false) Boolean archive) throws ApiException, Exception;


    @ApiOperation(value = "Get food by id, optionally check if editable", notes = "", response = FoodEditable.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Food get ok", response = FoodEditable.class),
        @ApiResponse(code = 404, message = "Food not found", response = FoodEditable.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = FoodEditable.class) })
    @RequestMapping(value = "/foods/{foodId}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
    ResponseEntity<FoodEditable> foodsFoodIdGet(
        @ApiParam(value = "",required=true )  @PathVariable("foodId") @Valid   @Digits( integer=9,  fraction=0 ) Long foodId,
        @ApiParam(value = "")  @RequestParam(value = "editable", required = false) String editable
    )throws ApiException, Exception;



    @ApiOperation(value = "Updates an existing food", notes = "Chef can update food name, type, description or price", response = Message.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "A custom message.", response = Message.class),
        @ApiResponse(code = 400, message = "An unexpected error occured.", response = Message.class),
        @ApiResponse(code = 404, message = "Food not found", response = Message.class),
        @ApiResponse(code = 409, message = "Concurrent modification error", response = Message.class),
        @ApiResponse(code = 412, message = "Food name already exists", response = Message.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Message.class) })
    @RequestMapping(value = "/foods/{foodId}",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    @CrossOrigin          
    ResponseEntity<Message> foodsFoodIdPut(@ApiParam(value = "",required=true ) @PathVariable("foodId") Long foodId,
        @ApiParam(value = "The food to be updated" ,required=true ) @Valid @RequestBody EditedFood food,
         @ApiParam(value = "") @RequestParam(value = "clone", required = false) Boolean clone)throws ApiException, Exception;


    @ApiOperation(value = "Gets all foods, optionally return stats per food", notes = "Return a list of all foods", response = FoodWithStats.class, responseContainer = "List", authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A list of foods", response = FoodWithStats.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = FoodWithStats.class) })
    @RequestMapping(value = "/foods",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    @CrossOrigin          
     ResponseEntity<FoodsPage> foodsGet( @ApiParam(value = "") @RequestParam(value = "stats", required = false) Boolean stats,
         @ApiParam(value = "Request pagination page") @RequestParam(value = "page", required = false) String page,
         @ApiParam(value = "Request pagination size / num of foods") @RequestParam(value = "size", required = false) String size,
         @ApiParam(value = "Request foodType filter") @RequestParam(value = "foodType", required = false) String foodType,
         @ApiParam(value = "Request archived filter") @RequestParam(value = "archived", required = false) String archived,
         @ApiParam(value = "Request orderBy filter") @RequestParam(value = "orderBy", required = false) String orderBy,
         @ApiParam(value = "Request foods version") @RequestParam(value = "foods_version", required = false) @Valid @Digits( integer=9,  fraction=0 )Integer foods_version,
         @ApiParam(value = "Request orderBy filter") @RequestParam(value = "orderDirection", required = false) String orderDirection) throws ApiException, Exception;


    @ApiOperation(value = "A new food", notes = "Create a food with basic data", response = Message.class, authorizations = {
        @Authorization(value = "Bearer")
    }, tags={ "chef", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "Food succesfully created", response = Void.class),
        @ApiResponse(code = 400, message = "An unexpected error occured.", response = Void.class),
        @ApiResponse(code = 412, message = "Food name already exists", response = Void.class),
        @ApiResponse(code = 500, message = "An unexpected error occured.", response = Void.class) })
    @RequestMapping(value = "/foods",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    @CrossOrigin          
    ResponseEntity<Object> foodsPost(@ApiParam(value = "The food to save"  )@Valid @RequestBody FoodDetails foodDetails, Errors errors) throws ApiException, Exception;

}
