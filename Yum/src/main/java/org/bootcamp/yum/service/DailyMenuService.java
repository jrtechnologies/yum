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

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import javax.transaction.Transactional;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.ConcurrentCreationException;
import org.bootcamp.yum.api.ConcurrentDeletionException;
import org.bootcamp.yum.api.ConcurrentModificationException;
import org.bootcamp.yum.api.model.DailyMenuChef;
import org.bootcamp.yum.api.model.DailyMenuEdit;
import org.bootcamp.yum.api.model.DailyMenusFoods;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.NewDailyMenu;
import org.bootcamp.yum.api.model.OrderItem;
import org.bootcamp.yum.data.converter.FoodTypeConverter;
import org.bootcamp.yum.data.entity.DailyMenu;
import org.bootcamp.yum.data.entity.Food;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.HolidaysRepository;
import org.bootcamp.yum.data.repository.OrderItemRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Service
public class DailyMenuService
{

    @Autowired
    DailyMenuRepository dailyMenuRep;
    @Autowired
    DailyOrderRepository dailyOrderRep;
    @Autowired
    OrderItemRepository orderItemRep;
    @Autowired
    FoodRepository foodRep;
    @Autowired
    private SettingsRepository settingsRepo;
    @Autowired
    HolidaysRepository holidaysRepo;

    FoodTypeConverter fooodTypeConverter = new FoodTypeConverter();
    /**
     * @update. Chef updates the daily menu
     */
    @PreAuthorize("hasAuthority('chef')")
    @Transactional
    public LastEdit dailyMenusIdPut(Long dailyMenusId, DailyMenuEdit dailyMenu) throws ApiException
    {

        DailyMenu dailyMenuEntity = dailyMenuRep.findById(dailyMenusId); //List of DailyMenus of DB.         
  
        if (dailyMenuEntity == null){
            LocalDate updatedMenuDate = dailyMenu.getDate();
            if(updatedMenuDate==null) throw new ApiException(404, "Daily Menu not found"); // the getDailyMenuChef not found
            
            dailyMenuEntity = dailyMenuRep.findByDate(updatedMenuDate);
            if(dailyMenuEntity!=null){
                throw new ConcurrentDeletionException(410, "You deleted this menu earlier, and recreated it. Here is the new one", getDailyMenuChef(updatedMenuDate));
            }
            else{
                DailyMenuChef emptyMenu = new DailyMenuChef();
                emptyMenu.setId(0L);
                throw new ConcurrentDeletionException(410, "You deleted this menu earlier. Please recreate it again if this is what was intended", emptyMenu);
            }            
        }
        
        //If the deadline passed, chef can't modify the menu
        //if (settingsRepo.findOne(1).deadlinePassed(dailyMenuEntity.getDate())) {
        if (deadlinePassed(dailyMenuEntity.getDate())) {
            dailyMenuEntity.setFinalised(true);
            throw new ApiException(412, "Can't modify menu, deadline time has passed");
        }    
        if(dailyMenu.getLastEdit()==null ){
            throw new ApiException(400, "Bad request data");
        }
  
        if (dailyMenuEntity.getVersion() != dailyMenu.getLastEdit().getVersion())
            throw new ConcurrentModificationException(409, "Concurrent modification error.", createDailyMenuEdit(dailyMenuEntity));
        
        List<DailyMenusFoods> dailyMenuFoods = dailyMenu.getFoods(); // List of foods from D.T.O.
        List<Food> foodsEntity = dailyMenuEntity.getFoods(); // List of foods from DB

        for (Food food : foodsEntity)
            if (isNotExist(food, dailyMenuFoods)) // check if the foods of DAO already is not exist in the list of DTO
            {
                List<org.bootcamp.yum.data.entity.OrderItem> orderItems = orderItemRep.findByFoodIdAndDailyOrderIn(food.getId(), dailyMenuEntity.getDailyOrders());
                if (!orderItems.isEmpty() && !getFoodsId(dailyMenu).contains(food.getId())) // checks if a food has no orders & if it has checks ...
                    throw new ConcurrentDeletionException(417, "The request is failed because there are orders on the food", getModelFood(food));
            }

        List<Food> newListOfFoods = new ArrayList<>();

        for (DailyMenusFoods dailyMenuFood : dailyMenuFoods)
        { // all the foods in the dailyMenu of DTO we copy them to DAO
            Food newFood = foodRep.findById(dailyMenuFood.getFoodId());
            newListOfFoods.add(newFood);
        }

        if (newListOfFoods.isEmpty())
        {
            dailyMenuRep.delete(dailyMenusId);
            throw new ApiException(204, "Daily Menu is deleted"); // the dailyMenu is deleted
        }
        else
            dailyMenuEntity.setFoods(newListOfFoods);

        

        dailyMenuEntity.setLastEdit(DateTime.now()); // update the lastEdit of the dailyMeny
        LastEdit lastEdit = new LastEdit();
        lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
        lastEdit.setVersion(dailyMenuEntity.getVersion() + 1);

        return lastEdit;
    }

    /**
     * @return a list to the chef, of Daily Menus of the current month
     */
    @PreAuthorize("hasAuthority('chef')")
    public List<DailyMenuChef> dailyMenusMonthlyGet()
    {

        LocalDate today = LocalDate.now();
        LocalDate startOfMonth = today.dayOfMonth().withMinimumValue();
        int daysOfMonth = today.dayOfMonth().withMaximumValue().getDayOfMonth();
        List<DailyMenuChef> monthlyMenu = new ArrayList<>();
        for (int i = 0; i < daysOfMonth; i++)
        {
            if (getDailyMenuChef(startOfMonth).getDate() != null)
                monthlyMenu.add(getDailyMenuChef(startOfMonth));
            startOfMonth = startOfMonth.plusDays(1);
        }
        return monthlyMenu;
    }

    /**
     * @return a list to the chef, of Daily Menus of month & year he wants
     */
    @PreAuthorize("hasAuthority('chef')")
    public List<DailyMenuChef> dailyMenusMonthlyMonthyearGet(String monthyear) throws ApiException
    {
        String patternString = "^\\d{2}-\\d{4}$";
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(monthyear);
        if (matcher.matches())
        {
            LocalDate monthYearDate = new LocalDate().withYear(Integer.parseInt(monthyear.substring(3, 7))).withMonthOfYear(Integer.parseInt(monthyear.substring(0, 2)));
            LocalDate startOfMonth = monthYearDate.dayOfMonth().withMinimumValue();
            int daysOfMonth = monthYearDate.dayOfMonth().withMaximumValue().getDayOfMonth();
            List<DailyMenuChef> monthlyMenu = new ArrayList<>();
            for (int i = 0; i < daysOfMonth; i++)
            {
                if (getDailyMenuChef(startOfMonth).getDate() != null)
                    monthlyMenu.add(getDailyMenuChef(startOfMonth));
                startOfMonth = startOfMonth.plusDays(1);
            }
            return monthlyMenu;
        }
        else
            throw new ApiException(400, "Invalid date");
    }

    /**
     * @post Chef creates a new Daily Menu, in a specific date
     */
    @PreAuthorize("hasAuthority('chef')")
    public DailyMenuChef dailyMenusPost(NewDailyMenu newDailyMenu) throws ApiException, ConcurrentCreationException
    {

        DailyMenuChef dailyMenuChef = new DailyMenuChef();

        DailyMenu dailyMenuEntity = new DailyMenu();

        List<DailyMenusFoods> dailyMenusFoods = newDailyMenu.getFoods();
        List<Food> foodsEntity = new ArrayList<>();

        if (dailyMenusFoods == null){ //if the list of dailyMenusFoods is empty
            throw new ApiException(400, "The list of Daily Menu Foods is empty");
        }
        
//        System.out.println(newDailyMenu.getDate());
        
        if (dailyMenuRep.findByDate(newDailyMenu.getDate()) != null){ //if in the same date already exists a Daily Menu
            //throw new ConcurrentCreationException(409, "A menu was already created for that day", getNewDailyMenu(dailyMenuRep.findByDate(newDailyMenu.getDate())));
            throw new ConcurrentCreationException(409, "A menu was already created for that day", getDailyMenuChef(newDailyMenu.getDate()));
        }
             
        List<OrderItem> orderItems = new ArrayList<>();
        for (DailyMenusFoods dailyMenusFood : dailyMenusFoods)
        {
            Long foodId = Long.valueOf(dailyMenusFood.getFoodId()); //the id of the food he wants to insert in the getDailyMenuChef

            Food foodEntity = foodRep.findById(foodId); // findById apo ti vasi

            if (foodEntity == null) // if the id is wrong and it can't find the Food
                throw new ApiException(400, "Wrong Id for food");
            else
            {
                OrderItem oItem = new OrderItem();
                oItem.setFoodId(foodId); // save the id of the Food from the user to a new OrderItem entity

                orderItems.add(oItem);
                foodsEntity.add(foodEntity);
            }
        }
        dailyMenuChef.setFoods(orderItems);
        dailyMenuEntity.setFoods(foodsEntity);
        dailyMenuEntity.setDate(newDailyMenu.getDate());

//            DateTime dateNow = DateTime.now();
//            getDailyMenuChef.setLastEdit(dateNow);
        dailyMenuRep.save(dailyMenuEntity); // send the getDailyMenuChef to DB

        dailyMenuChef.setId(dailyMenuEntity.getId()); // fill the dailyMenuChef
        dailyMenuChef.setDate(dailyMenuEntity.getDate());
        LastEdit lastEdit = new LastEdit();
        lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
        lastEdit.setVersion(dailyMenuEntity.getVersion());
        dailyMenuChef.setLastEdit(lastEdit);
      

        return dailyMenuChef;
    }

    // create a DailyMenuEdit
    public DailyMenuEdit createDailyMenuEdit(DailyMenu dailyMenuEntity)
    {
        List<DailyMenusFoods> newDailyMenusFoods = new ArrayList<>();
        DailyMenuEdit dailyMenuEdit = new DailyMenuEdit();
        List<Food> foodsEntity = dailyMenuEntity.getFoods(); // List of foods from DB

        for (Food foodEntity : foodsEntity)
        {
            DailyMenusFoods dailyMenusFood = new DailyMenusFoods();
            dailyMenusFood.setFoodId((int) foodEntity.getId());
            newDailyMenusFoods.add(dailyMenusFood);
        }

        dailyMenuEdit.setFoods(newDailyMenusFoods);
        LastEdit lastEdit = new LastEdit();
        lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
        lastEdit.setVersion(dailyMenuEntity.getVersion());
        dailyMenuEdit.setLastEdit(lastEdit);

        return dailyMenuEdit;
    }

    // Creates a list of ids of the DailyMenuEdit
    public List<Integer> getFoodsId(DailyMenuEdit dailyMenu)
    {
        List<Integer> listOfIds = new ArrayList<>();
        for (DailyMenusFoods food : dailyMenu.getFoods())
            listOfIds.add(food.getFoodId());
        return listOfIds;
    }

    // Check by id, if the foods of DAO already exist in the list of DTO
    public boolean isNotExist(Food foodEntity, List<DailyMenusFoods> foods)
    {
        for (DailyMenusFoods food : foods)
            if (food.getFoodId() == foodEntity.getId())
                return false;

        return true;
    }

    //Method create one Daily menu.
    public DailyMenuChef getDailyMenuChef(LocalDate currentDay)
    {
        DailyMenu dailyMenuEntity = dailyMenuRep.findByDate(currentDay);
        DailyMenuChef dailyMenuChef = new DailyMenuChef();
        if (dailyMenuEntity != null)
        {
            dailyMenuChef.setDate(dailyMenuEntity.getDate());
            dailyMenuChef.setId(dailyMenuEntity.getId());
            LastEdit lastEdit = new LastEdit();
            lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
            lastEdit.setVersion(dailyMenuEntity.getVersion());
            
            dailyMenuChef.setLastEdit(lastEdit);
            
            for (Food foodEntity : dailyMenuEntity.getFoods())
            {
                org.bootcamp.yum.api.model.Food food = new org.bootcamp.yum.api.model.Food();
                food.setId(foodEntity.getId());
                food.setFoodName(foodEntity.getName());
                food.setFoodType(fooodTypeConverter.convertToDatabaseColumn(foodEntity.getFoodType()));
                 
                food.setPrice(foodEntity.getPrice().doubleValue());
                food.setDescription(foodEntity.getDescription());

                OrderItem orderItem = new OrderItem();
                orderItem.setFoodId(food.getId());
                dailyMenuChef.addFoodsItem(orderItem);
            }
        }
        return dailyMenuChef;
    }

    /*public NewDailyMenu getNewDailyMenu(DailyMenu dailyMenu)
    {
        long id = dailyMenu.getId();
        DailyMenu dailyMenuDAO = dailyMenuRep.findById(id);
        NewDailyMenu newDailyMenu = new NewDailyMenu();
        List<DailyMenusFoods> foods = new ArrayList<>();

        for (Food food : dailyMenuDAO.getFoods())
        {
            DailyMenusFoods dailyMenusFood = new DailyMenusFoods();
            dailyMenusFood.setFoodId((int) food.getId());
            foods.add(dailyMenusFood);
        }
        newDailyMenu.setFoods(foods);
        newDailyMenu.setDate(dailyMenuDAO.getDate());

        return newDailyMenu;
    }*/

    // Return tot he chef, the food which can not be deleted, because it has orders
    public org.bootcamp.yum.api.model.Food getModelFood(Food food)
    {
        org.bootcamp.yum.api.model.Food foodDTO = new org.bootcamp.yum.api.model.Food();

        foodDTO.setId(food.getId());
        foodDTO.setFoodName(food.getName());
        foodDTO.setFoodType(food.getFoodType().toString());
        foodDTO.setDescription(food.getDescription());
        foodDTO.setPrice(food.getPrice().doubleValue());
        foodDTO.setArchived(food.isArchived());

        return foodDTO;
    }

    
    public boolean deadlinePassed(LocalDate date) {
        Settings settings = settingsRepo.findOne(1);
        int deadlineDays = settings.getDeadlineDays();
        LocalTime deadlineTime = settings.getDeadline();
         
        date = date.minusDays(deadlineDays);
        
        while (this.holidaysRepo.findByIdHoliday(date) != null) {
             date = date.minusDays(1);
        }        
        
        // Check if order deadline passed based on given date, deadlineDays and deadlineTime (deadline)
        return (date.toLocalDateTime(deadlineTime).compareTo(LocalDateTime.now()) < 0);
    }
}
