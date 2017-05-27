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
import javax.validation.Valid;
import javax.validation.constraints.*;
import org.bootcamp.yum.api.model.EditedFood;
import org.bootcamp.yum.api.model.Error;
import org.bootcamp.yum.api.model.Food;
import org.bootcamp.yum.api.model.FoodDetails;
import org.bootcamp.yum.api.model.FoodEditable;
import org.bootcamp.yum.api.model.FoodsPage;
import org.bootcamp.yum.api.model.Message;
import org.bootcamp.yum.service.FoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
@Validated
public class FoodsApiController implements FoodsApi {
    
    @Autowired
    private FoodsService foodService;

    @Autowired
    public FoodsApiController(FoodsService foodService) {
        this.foodService = foodService;
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////////
    // APIs
    ////////////////////////////////////////////////////////////////////////////////////////////
    
    @Override
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<Food> foodsFindByNameNameGet(@ApiParam(value = "",required=true ) @PathVariable("name") String name) throws ApiException, Exception{
        
    //        '200': description: Food found           
    //        '404':  description: Food not found
            
            return new ResponseEntity<Food>(foodService.foodsFindByNameNameGet(name), HttpStatus.OK);        
 
    }
    
    @PreAuthorize("hasAuthority('chef')")
    @Transactional
    public ResponseEntity<Void> foodsFoodIdDelete(@ApiParam(value = "",required=true ) @PathVariable("foodId") Long foodId,
         @ApiParam(value = "") @RequestParam(value = "archive", required = false) Boolean archive) throws ApiException, Exception {
        
        //        '204':  description: Food successfully deleted NO_CONTENT
        //        '200':  description: Food successfully archived OK
        //        '412':  description: Food couldn't be deleted PRECONDITION_FAILED
        //        '404':  description: Food not found ok NOT_FOUND

        if(archive==null){ archive=false;}        
        
        foodService.foodsFoodIdDelete(foodId, archive); 
        
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<FoodEditable> foodsFoodIdGet(@ApiParam(value = "",required=true )  @PathVariable("foodId") @Valid  @Digits( integer=9,  fraction=0 ) Long foodId, 
         @ApiParam(value = "")  @RequestParam(value = "editable", required = false) String editable)  throws ApiException, Exception{
        
        //      '200': description: Food get ok 
        //      '404':  description: Food not found
         
        FoodEditable foodEditable =new FoodEditable();        
      
        foodEditable = foodService.foodsFoodIdGet(foodId, editable); 
        
        return new ResponseEntity<FoodEditable>(foodEditable,HttpStatus.OK);        
   
    }
    
    
    @PreAuthorize("hasAuthority('chef')")
    @Transactional
    public ResponseEntity<Object> foodsPost(@ApiParam(value = "The food to save"  ) @RequestBody FoodDetails foodDetails, Errors errors)  throws ApiException, Exception {

       //       '204': Food succesfully created
       //       '400':
       //       '412':  description: Food name already exists PRECONDITION_FAILED
       //        500: Internal server error 
        if (errors.hasErrors()) {
            Error error = new Error();
            error.setError("400");
            error.setMessage("Validation Failed");
            System.out.println("" + errors.getAllErrors());
            return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
        }        
       
        foodService.foodsPost(foodDetails); 
        return new ResponseEntity<>( HttpStatus.NO_CONTENT);
         
    }
    
    
    @Transactional
    @PreAuthorize("hasAuthority('chef')")
    public ResponseEntity<Message> foodsFoodIdPut(@ApiParam(value = "",required=true ) @PathVariable("foodId") Long foodId,
        @ApiParam(value = "The food to be updated" ,required=true ) @RequestBody EditedFood food,
         @ApiParam(value = "") @RequestParam(value = "clone", required = false) Boolean clone)  throws ApiException, Exception {
        
        //      '204': description: Food successfully updated NO_CONTENT
        //      '400': description: Food couldn't have been updated BAD_REQUEST
        //      '404': description: Food not found NOT_FOUND
        //      '409': description: Concurrent modification error CONFLICT
        //      '412':  description: Food name already exists PRECONDITION_FAILED
        //       500: Internal server error
        
        Message response = new Message();
        try { 
          foodService.foodsFoodIdPut(foodId, food, clone); 
        } catch (OptimisticLockException ex) {
            try {
                FoodEditable newFood = foodService.foodsFoodIdGet(foodId, "false");
                throw new ConcurrentModificationException(409, "DB ConcurrentModificationException", newFood);
            } catch (ApiException ex1) {
                Logger.getLogger(OrdersApiController.class.getName()).log(Level.SEVERE, null, ex1);
                throw new ApiException(500, "Concurrent modification exception: internal error");
            }
        }
        return new ResponseEntity<Message>(response,HttpStatus.NO_CONTENT);
          

    }

    //@PreAuthorize("hasAuthority('chef') or hasAuthority('hungry')")
    @PreAuthorize("hasAuthority('chef')")
   // public ResponseEntity<List<FoodWithStats>> foodsGet( @ApiParam(value = "") @RequestParam(value = "stats", required = false) Boolean stats) {
    public ResponseEntity<FoodsPage> foodsGet(Boolean stats, String page, String size, String foodType, String archived, String orderBy, Integer foods_version, String orderDirection) throws ApiException, Exception {    
        
        //        '200':   description: A list of foods
        FoodsPage foods = new FoodsPage(); 
        
        foods = foodService.foodsGet(stats, page, size, foodType, archived, orderBy, foods_version, orderDirection); 
 
        return new ResponseEntity<FoodsPage>(foods, HttpStatus.OK);
        
    }

 

 



}
