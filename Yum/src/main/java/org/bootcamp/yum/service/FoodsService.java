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

package org.bootcamp.yum.service;

import io.swagger.annotations.ApiParam;
import static java.lang.Math.signum;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.*;
import javax.transaction.Transactional;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.ConcurrentModificationException;
import org.bootcamp.yum.api.model.EditedFood;
import org.bootcamp.yum.api.model.Food;
import org.bootcamp.yum.api.model.FoodDetails;
import org.bootcamp.yum.api.model.FoodEditable;
import org.bootcamp.yum.api.model.FoodWithStats;
import org.bootcamp.yum.api.model.FoodsPage;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.Statistic;
import org.bootcamp.yum.data.converter.FoodTypeConverter;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.enums.FoodType;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

 
@Service
public class FoodsService {
    
    @Autowired
    FoodRepository foodrepo;
    
    @Autowired
    DailyMenuRepository dailyMenurepo;
    
    @Autowired
    SettingsRepository settingsRepo;
    
    FoodTypeConverter foodTypeConverter = new FoodTypeConverter();
    
    private static final Logger LOGGER = Logger.getLogger( FoodsService.class.getName() );
    
    public static int getLineNumber() {
        return Thread.currentThread().getStackTrace()[2].getLineNumber();
    }  
    
    // Helper functions
    private void foodEntityToModel(org.bootcamp.yum.data.entity.Food foodEntity, org.bootcamp.yum.api.model.Food foodModel){
        foodModel.setId(foodEntity.getId());
        foodModel.setFoodName(foodEntity.getName());
        foodModel.setFoodType(foodTypeConverter.convertToDatabaseColumn(foodEntity.getFoodType()));
        foodModel.setDescription(foodEntity.getDescription());
        foodModel.setPrice(foodEntity.getPrice().doubleValue()); 
        foodModel.setArchived(foodEntity.isArchived());        
    }
    
    private Food foodFindByName(String name){
        List<org.bootcamp.yum.data.entity.Food> foods = foodrepo.findByNameAndArchived(name, false);        
        
        if(foods!=null && foods.size() > 0){
            org.bootcamp.yum.data.entity.Food food = foods.get(0);
            Food foodModel = new Food();
            foodEntityToModel(food, foodModel); 
            return foodModel;
        }
        return null;
    }
    
    @PreAuthorize("hasAuthority('chef')")
    public Food foodsFindByNameNameGet(String name) throws ApiException {
        
    //        '200': description: Food found           
    //        '404':  description: Food not found
                
        Food food = new Food();
        food = foodFindByName(name);
        if(food!=null){            
            return  food;
        }
        else{ 
            throw new ApiException(404, "Order not found");
           }
    }
    
    
    @PreAuthorize("hasAuthority('chef')")
    @Transactional
    public void foodsFoodIdDelete(Long foodId, Boolean archive) throws ApiException {
        
        //        '204':  description: Food successfully deleted NO_CONTENT
        //        '200':  description: Food successfully archived OK
        //        '412':  description: Food couldn't be deleted PRECONDITION_FAILED
        //        '404':  description: Food not found ok NOT_FOUND

        if(archive==null){ archive=false;}
        
        // Get requested food
        org.bootcamp.yum.data.entity.Food food = foodrepo.findById(foodId);
        if(food==null){
            throw new ApiException(404, "Food not found");
        }
        
        //Check if food has order
        if(!archive && food.getOrderItems()!=null && food.getOrderItems().size()>0){     
                throw new ApiException(412, "Food couldn't be deleted PRECONDITION_FAILED");
        }
        
        // Set archived
        if(archive){
            food.setArchived(true);
            throw new ApiException(200, "Food successfully archived");
        }

        //Delete from daily menus
        List<org.bootcamp.yum.data.entity.DailyMenu> dailyMenus = dailyMenurepo.findByFoods_Id(foodId);

        for(org.bootcamp.yum.data.entity.DailyMenu dm : dailyMenus){
            dm.getFoods().remove(food);
        }
        
        //Delete food
        foodrepo.delete(foodId);
        Settings global_settings = settingsRepo.findOne(1);
        global_settings.setFoods_version(global_settings.getFoods_version() + 1);
    }
    
    
    @PreAuthorize("hasAuthority('chef')")
    public FoodEditable foodsFoodIdGet(Long foodId, String editable) throws ApiException {
        
        //      '200': description: Food get ok 
        //      '404':  description: Food not found
        
        org.bootcamp.yum.data.entity.Food food = foodrepo.findById(foodId);
        FoodEditable foodEditable = new FoodEditable();
        
        //Check food exists
        if(food==null){ 
            throw new ApiException(404, "food not found");
        }
        
        Food foodModel = new Food();
        foodEditable.setFoodItem(foodModel);
        
        if(editable!=null){
            foodEditable.setEditable(food.isEditable());
        }            
        foodEntityToModel(food, foodModel);
        
        LastEdit le = new LastEdit(food.getLastEdit(), food.getVersion());        
        foodEditable.setLastEdit(le);
        
        return   foodEditable;        
   
    }
    
    
    @PreAuthorize("hasAuthority('chef')")
    @Transactional
    public long foodsPost( FoodDetails foodDetails)  throws ApiException, Exception {

       //       '204': Food succesfully created
       //       '400':
       //       '412':  description: Food name already exists PRECONDITION_FAILED
       //        500: Internal server error 
       
        FoodTypeConverter foodType = new FoodTypeConverter();                   //for Food type(Enum).
        org.bootcamp.yum.data.entity.Food food = new org.bootcamp.yum.data.entity.Food();
                
        foodDetails.setFoodName(foodDetails.getFoodName().trim());
        foodDetails.setDescription(foodDetails.getDescription().trim());
       
        //Check if Food name already exists.
        Food foodSame = foodFindByName(foodDetails.getFoodName());

        if(foodSame!=null){           
            throw new ApiException(412, "Food name already exists PRECONDITION_FAILED");
        } 
 
        //Validation Food name.
        if (foodDetails.getFoodName().length() > 99 || foodDetails.getFoodName().matches("^\\s+$") || foodDetails.getFoodName().equals("")) { 
            throw new ApiException(400, "No valid Food name");
        }else if (foodDetails.getDescription().length() > 249) { 
            throw new ApiException(400, "No valid Description.(length < 250)");
        }else if (foodDetails.getPrice() <= 0 || foodDetails.getPrice() > 1.7976931348623157E+308) { System.out.println("**************************mpika edw");
            throw new ApiException(400, "No valid Price.(Price > 0)");
        }else if (!foodDetails.getFoodType().equals("Main") && !foodDetails.getFoodType().equals("Salad") && !foodDetails.getFoodType().equals("Drink")) { 
           throw new ApiException(400, "No valid Food type.(Main,Salad,Drink)");
        }

        food.setName(foodDetails.getFoodName());
        food.setDescription(foodDetails.getDescription());
        food.setFoodType(foodType.convertToEntityAttribute(foodDetails.getFoodType()));
        food.setPrice(BigDecimal.valueOf(foodDetails.getPrice()));       
        food.setOrderItems(new ArrayList<>());

        foodrepo.save(food);    //Save food in DB

        //update foods version
        Settings global_settings = settingsRepo.findOne(1);
        global_settings.setFoods_version(global_settings.getFoods_version() + 1);
        
        return food.getId();
         
    }// food post
    
    
    @Transactional
    @PreAuthorize("hasAuthority('chef')")
    public LastEdit foodsFoodIdPut(  Long foodId, EditedFood food,  Boolean clone) throws ApiException, Exception {
        
        //      '204': description: Food successfully updated NO_CONTENT
        //      '400': description: Food couldn't have been updated BAD_REQUEST
        //      '404': description: Food not found NOT_FOUND
        //      '409': description: Concurrent modification error CONFLICT
        //      '412':  description: Food name already exists PRECONDITION_FAILED
        //       500: Internal server error
        
        FoodTypeConverter foodTypeConverter = new FoodTypeConverter();

        // Get food
        org.bootcamp.yum.data.entity.Food foodEntity = foodrepo.findById(foodId);

        //Check food exists
        if(foodEntity==null) { 
           throw new ApiException(404, "Food not found");
        }
        
        
        // DateTime lastEditTimestamp = DateTime.parse( food.getLastEdit().toString(), DateTimeFormat.forPattern("dd/MM/yyyy HH:mm:ss"));
        DateTime lastEditTimestamp  = food.getLastEdit().getTimeStamp();
        if( lastEditTimestamp!=null && lastEditTimestamp.getMillis() != (foodEntity.getLastEdit().getMillis())) //checks the last edit timestamp of the food
        {
            LOGGER.log(Level.WARNING, ">>>> User last edit:"+lastEditTimestamp+" / db last edit: "+foodEntity.getLastEdit()+" @line:"+getLineNumber(),""); 
        }

        if(foodEntity.getVersion()!=food.getLastEdit().getVersion()){
            LOGGER.log( Level.SEVERE, "User version:"+food.getLastEdit().getVersion()+" / db version: "+foodEntity.getVersion()+" @line:"+getLineNumber(),"");
            throw new  ConcurrentModificationException(409, "Food put version conflict", food);
        }
        
        
        if(clone!=null && clone){
            foodEntity.setArchived(true);
            FoodDetails newFood = new FoodDetails();
            newFood.setDescription(food.getDescription());
            newFood.setFoodName(food.getFoodName());
            newFood.setFoodType(food.getFoodType());
            newFood.setPrice(food.getPrice());
            foodsPost(newFood);
             
        }      
        else{
            String foodName = food.getFoodName().trim();
            String foodDescription = food.getDescription().trim();

            //Check if food name already exist.
            Food foodSame = foodFindByName(food.getFoodName());

            if(foodSame!=null && foodSame.getId()!=foodEntity.getId() ){                    
              throw new ApiException(412, "Food name already exists");
            }




            if (!food.getFoodType().equals("Main") && !food.getFoodType().equals("Salad") && !food.getFoodType().equals("Drink")) {
               throw new ApiException(400, "Not a valid food type");
            }

            if(food.getDescription().length() > 250) // The description is not valid
            {
                throw new ApiException(400, "Food description exceeds limit of 250");
            }        

            if(food.getFoodName().length() > 100) // The food name is not valid
            {
                throw new ApiException(400, "Food name exceeds limit of 250");
            }


            if((food.getPrice().isNaN()) || (signum(food.getPrice()) != 1.0) || food.getPrice()<0.01 ) // signum returns 1.0 if a double is greater than zero
            {                                                                 // The price is not valid
                throw new ApiException(400, "Price not valid");
            }
            
            if(foodEntity.isArchived() == true ){ // checks if it is archived
               if(!foodEntity.getDescription().equalsIgnoreCase(foodDescription)
                       && new BigDecimal(food.getPrice(), MathContext.DECIMAL64).compareTo(foodEntity.getPrice())==0 
                       && foodEntity.getName().equalsIgnoreCase(foodName)
                       && foodTypeConverter.convertToEntityAttribute(food.getFoodType()).equals(foodEntity.getFoodType())
                       ){
                    foodEntity.setDescription(foodDescription);
               }
               else{
                   System.out.println("---");
                   System.out.println(foodEntity);
                   System.out.println(food);
                   System.out.println(new BigDecimal(food.getPrice(), MathContext.DECIMAL64));
                   System.out.println(foodEntity.getPrice());
                   throw new ApiException(400, "Food is archived and cannot be changed");
               }
            }
            else  
            {
                //Update food
                if(!(new BigDecimal(food.getPrice(), MathContext.DECIMAL64).compareTo(foodEntity.getPrice())==0))
                {
                    foodEntity.setPrice(BigDecimal.valueOf(food.getPrice()));
                }
                if(!foodEntity.getName().equalsIgnoreCase(foodName))
                {
                    foodEntity.setName(foodName);
                }  
                if(!foodEntity.getDescription().equalsIgnoreCase(foodDescription))
                {
                    foodEntity.setDescription(foodDescription);
                }
                if( !foodTypeConverter.convertToEntityAttribute(food.getFoodType()).equals(foodEntity.getFoodType()))
                    foodEntity.setFoodType(foodTypeConverter.convertToEntityAttribute(food.getFoodType()));
            
            }
            
            

            //return new ResponseEntity<Message>(response,HttpStatus.NO_CONTENT);
        }


        //update foods version
        Settings global_settings = settingsRepo.findOne(1);
        global_settings.setFoods_version(global_settings.getFoods_version() + 1);
            
        LastEdit lastEdit = new LastEdit(foodEntity.getLastEdit(), foodEntity.getVersion()); 
        return lastEdit;
         
    }// foodsFoodIdPut

    @PreAuthorize("hasAuthority('chef')")    
     public  FoodsPage foodsGet(@ApiParam(value = "") @RequestParam(value = "stats", required = false) Boolean statsRequest, String pageStr, String sizeStr, String foodTypeStr, String archivedStr, String orderByStr, Integer foods_version, String orderDirectionStr) throws ApiException {   
        //        '200':   description: A list of foods
        
        //init vars
        String error="";
        long totalPages=0;
        long totalElements=0;
        FoodsPage foodsPage = new FoodsPage();
         Pageable pr ;
         
        List<FoodWithStats> foods = new ArrayList<FoodWithStats>();                
        int page,size ;  //Pagination
        int repoFoodCount = (int)foodrepo.count() ;
        boolean archived = false;
        boolean stats = false;
        /*List<String> footTypesList = Stream.of(FoodType.values())
                               .map(FoodType::name)
                               .collect(Collectors.toList());
        footTypesList.add("all");*/
        
        Settings global_settings = settingsRepo.findOne(1);
        int dbFoodsVersion = global_settings.getFoods_version();
            
        // request to check foods version
        if(foods_version!=null && foods_version>=0){

            if(foods_version!=dbFoodsVersion){
                //Return all foods
                LOGGER.log( Level.WARNING, "foods version not the same:"+foods_version+" db:"+dbFoodsVersion+", @line:" + getLineNumber(),""); 
                pageStr=null;
                sizeStr=null;
                archivedStr = "false";
                foodTypeStr="All"; 
            }
            else{
               throw new ApiException(304, "Foods ok"); 
            }
        } 
            

        try{
             page = pageStr==null? 0 : Integer.parseInt(pageStr);
             size = sizeStr==null? repoFoodCount : Integer.parseInt(sizeStr);

             if(size>repoFoodCount){ 
                 error = "Requested size exceeds available foods";
                 LOGGER.log( Level.WARNING, error + " @line:" + getLineNumber(),""); 
                //throw new ApiException(400, error );
             }
        }
        catch(NumberFormatException e){
            error = "Wrong pagination size or page request";
            LOGGER.log( Level.WARNING, error + " @line:" + getLineNumber(),""); 
            throw new ApiException(400, error);
        }
       

        try{ 
            archived = Boolean.parseBoolean(archivedStr);
            }
        catch(Exception e){
            error="Wrong archived option request";
            LOGGER.log( Level.WARNING, error + " @line:"+getLineNumber(),""); 
            throw new ApiException(400, error);
        }
        
        try{ 
            stats = (statsRequest==null) ? false : statsRequest;
            }
        catch(Exception e){
            error="Wrong stats option request";
            LOGGER.log( Level.WARNING, error + " @line:"+getLineNumber(),""); 
            throw new ApiException(400, error);
        }
        
        
       List<String> validFoodTypesList = Arrays.asList("Main", "Salad", "Drink", "All");    
       if(foodTypeStr==null || foodTypeStr.equals("")){ foodTypeStr="All";}
       if(!validFoodTypesList.contains(foodTypeStr)){
            error = "Wrong foodType filter request:"+foodTypeStr;
            LOGGER.log( Level.WARNING,  error+ " @line:"+getLineNumber(),""); 
            throw new ApiException(400, error);
        }
        
        //orderByStr
        
        orderByStr = (orderByStr==null || orderByStr.equals(""))? "id": orderByStr;
        
        if(orderByStr.equals("popular")){            
            orderByStr="orderedQuantity";
        }
               
        
        List<String> validOrderBy = Arrays.asList("id", "price", "orderedQuantity");      
        if(!validOrderBy.contains(orderByStr)){
            error = "Wrong ordered by option request:"+orderByStr;
            LOGGER.log( Level.WARNING,  error+ " @line:"+getLineNumber(),""); 
            throw new ApiException(400, error);
        }
        

        if(orderDirectionStr==null){ orderDirectionStr = "DESC"; }
        switch(orderDirectionStr){
            case "ASC":   
                pr = new PageRequest(page, size , Sort.Direction.ASC,  orderByStr );
                break;
            case "DESC":
                pr = new PageRequest(page, size , Sort.Direction.DESC,  orderByStr );
                break;
            default:   
                pr = new PageRequest(page, size , Sort.Direction.ASC,  orderByStr );
                break;
        }
        
        System.out.println(pr);
        
        Page<org.bootcamp.yum.data.entity.Food> foodEntities = null;
        if(foodTypeStr.equals("All")){                
            if(archivedStr==null || archivedStr.equals("")){
                foodEntities =  foodrepo.findAll(pr);
                System.out.println("@1");
                
            }
            else {
                foodEntities =  foodrepo.findByArchived(pr,archived );
                System.out.println("@2");
            }

        }
        else {
             FoodType foodType = foodTypeConverter.convertToEntityAttribute(foodTypeStr);
             if(archivedStr==null || archivedStr.equals("")){
                foodEntities =  foodrepo.findByFoodType(pr, foodType);
                System.out.println("@3");
             }
             else{
                foodEntities =  foodrepo.findByFoodTypeAndArchived(pr, foodType, archived);
                System.out.println("@4");
             }
             
        }
         
        
        totalElements = foodEntities.getTotalElements();
        totalPages = foodEntities.getTotalPages();

        for (org.bootcamp.yum.data.entity.Food f: foodEntities){
            Food foodModel = new Food();
            foodEntityToModel(f, foodModel); 
            
            FoodWithStats foodComplex = new FoodWithStats();
            foodComplex.setFoodItem(foodModel);
            
            LastEdit le = new LastEdit();
            le.setTimeStamp(f.getLastEdit());

            foodComplex.setLastEdit(le);          
            foodComplex.setEditable(f.isEditable());            



            foods.add(foodComplex);

            if(stats){

                //NEED A HELPER CLASS for weeks /days
                LocalDate dt = LocalDate.now();
                //LocalDate firstDayOfWeek = new LocalDate().withYear(dt.getWeekyear()).withWeekOfWeekyear(dt.getWeekOfWeekyear());
                LocalDate firstDayOfWeek = dt.minusDays(dt.getDayOfWeek() - 1);
                LocalDate lastDayOfWeek = firstDayOfWeek.plusDays(4);

                Statistic stat = new Statistic();
                stat.setWeek(dt.getWeekOfWeekyear());
                stat.setQuantity( foodrepo.findFoodOrderedQuantitiesByDates(firstDayOfWeek.toString(), lastDayOfWeek.toString(), f.getId()));

                LocalDate firstDayOfLastWeek = dt.minusDays(dt.getDayOfWeek() - 1).minusDays(7);
                LocalDate lastDayOfLastWeek = firstDayOfLastWeek.plusDays(4);

                Statistic statLastWeek = new Statistic();
                statLastWeek.setWeek(firstDayOfLastWeek.getWeekOfWeekyear());
                statLastWeek.setQuantity( foodrepo.findFoodOrderedQuantitiesByDates(firstDayOfLastWeek.toString(), lastDayOfLastWeek.toString(), f.getId()));
                
                LocalDate firstDayOf2ndLastWeek = dt.minusDays(dt.getDayOfWeek() - 1).minusDays(14);
                LocalDate lastDayOf2ndLastWeek = firstDayOf2ndLastWeek.plusDays(4);

                Statistic stat2ndLastWeek = new Statistic();
                stat2ndLastWeek.setWeek(firstDayOf2ndLastWeek.getWeekOfWeekyear());
                stat2ndLastWeek.setQuantity( foodrepo.findFoodOrderedQuantitiesByDates(firstDayOf2ndLastWeek.toString(), lastDayOf2ndLastWeek.toString(), f.getId()));
                
                Statistic statAllTime = new Statistic();
                statAllTime.setQuantity(foodrepo.findFoodOrderedQuantities( f.getId()));
                        
                System.out.println("cur:"+firstDayOfWeek+" "+lastDayOfWeek);
                System.out.println("last:"+firstDayOfLastWeek+" "+lastDayOfLastWeek);
                System.out.println("2ndLast:"+firstDayOf2ndLastWeek+" "+lastDayOf2ndLastWeek);
                
                Map<String, Statistic> statistics = new HashMap<String, Statistic>();
                
                statistics.put("currentWeek", stat);
                statistics.put("lastWeek", statLastWeek);
                statistics.put("2ndLastWeek", stat2ndLastWeek);
                statistics.put("allTime", statAllTime);
                
                foodComplex.setStats(statistics);
            }
        }
        
        /*keep for reference
            
        if(orderByPopularity){
            Collections.sort(foods, new Comparator<FoodWithStats>() {
                @Override
                public int compare(FoodWithStats food1, FoodWithStats food2) {
                    int q1 = food1.getStats().get("all Time").getQuantity();
                    int q2 = food2.getStats().get("all Time").getQuantity();
                    return q1 > q2 ? 1 : (q1 < q2 ? -1 : 0);
                }
            });
        }*/
        foodsPage.setTotalElements(totalElements);
        foodsPage.setTotalPages(totalPages);
        foodsPage.setFoods(foods);
        foodsPage.setFoods_version(dbFoodsVersion);
        
        System.out.println(foodsPage);
        
        return  foodsPage;

 
        
    }

}
