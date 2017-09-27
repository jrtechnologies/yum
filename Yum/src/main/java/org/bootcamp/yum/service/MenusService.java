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
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import javax.transaction.Transactional;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.model.DailyMenu;
import org.bootcamp.yum.api.model.Food;
import org.bootcamp.yum.api.model.FoodWithQuantity;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.data.entity.OrderItemId;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.HolidaysRepository;
import org.bootcamp.yum.data.repository.OrderItemRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class MenusService {

    @Autowired
    private DailyMenuRepository dailyMenuRepo;
    @Autowired
    private DailyOrderRepository dailyOrderRepo;
    @Autowired
    private OrderItemRepository orderItemRepo;
    @Autowired
    private SettingsRepository settingsRepo;
    @Autowired
    private UserRepository userRepo;
    @Autowired
    HolidaysRepository holidaysRepo;
    private static final org.slf4j.Logger log = LoggerFactory.getLogger(MenusService.class);
    
    @Transactional
    public List<DailyMenu> menusWeeklyGet(Long userId) throws ApiException, Exception {
        LocalDate today = LocalDate.now();
        LocalDate firstDayOfWeek = today.minusDays(today.getDayOfWeek() - 1);
        List<org.bootcamp.yum.api.model.DailyMenu> weeklyMenu = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            DailyMenu dailymenu = createWeekDailyMenu(firstDayOfWeek.plusDays(i), userId);
            if (dailymenu.getDate() != null) {
                weeklyMenu.add(dailymenu);
            }
        }
        return weeklyMenu;
    }

    @Transactional
    public List<DailyMenu> menusWeeklyWeekGet(String week, Long userId) throws ApiException, Exception {
         
        
        String patternString = "^\\d{2}-\\d{4}$";
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(week);
        if (matcher.matches()) {
            int year = Integer.parseInt(week.substring(3, 7)); 
            
            int weekNumber = Integer.parseInt(week.substring(0, 2));
            int weeksOfYear = getWeeksofYear(year);
            //Validation check for weeks number.
            if (weekNumber < 1 || weekNumber > 53 || (weeksOfYear == 52 && weekNumber == 53)) {
                throw new ApiException(400, "Weekly menu not found");
            }
            LocalDate firstDayOfWeek;
            /* If year have 52 weeks but end in next week
             * (it haven't 53 weeks, then some days is in next year) then print 
             * first week of next year with last days of previous year.
             */
            if (weeksOfYear == 53 && weekNumber == 53) { 
                weekNumber = 01;
                year += 1;
            }
             
            
            firstDayOfWeek = new LocalDate().withYear(year).withWeekOfWeekyear(weekNumber);
            firstDayOfWeek = firstDayOfWeek.minusDays(firstDayOfWeek.getDayOfWeek() - 1); 
           
            List<org.bootcamp.yum.api.model.DailyMenu> weeklyMenu = new ArrayList<>();
            for (int i = 0; i < 7; i++) {
                DailyMenu dailymenu = createWeekDailyMenu(firstDayOfWeek.plusDays(i), userId);
                if (dailymenu.getDate() != null) {
                    weeklyMenu.add(dailymenu);
                }
            }
            return weeklyMenu;
        } else {
            throw new ApiException(400, "Weekly menu not found");
        }
    }

    @Transactional
    public List<DailyMenu> menusMonthlyGet(@ApiParam(value = "") @RequestParam(value = "stats", required = false) Long userId) throws ApiException, Exception {
        LocalDate today = LocalDate.now();
        LocalDate startOfMonth = today.dayOfMonth().withMinimumValue();
        int daysOfMonth = today.dayOfMonth().withMaximumValue().getDayOfMonth();
        List<DailyMenu> monthlyMenu = new ArrayList<>();
        for (int i = 0; i < daysOfMonth; i++) {
            DailyMenu dailymenu = createOrderedDailyMenu(startOfMonth.plusDays(i), userId);
            if (dailymenu.getDate() != null) {
                monthlyMenu.add(dailymenu);
            }
        }
        return monthlyMenu;
    }

    @Transactional
    public List<DailyMenu> menusMonthlyMonthyearGet(String monthyear, Long userId) throws ApiException, Exception {
        String patternString = "^\\d{2}-\\d{4}$";
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(monthyear);
        if (matcher.matches()) {
            int month = Integer.parseInt(monthyear.substring(0, 2));
            int year = Integer.parseInt(monthyear.substring(3, 7));
            if (month > 12) {
                throw new ApiException(400, "Monthly menu not found");
            }
            LocalDate monthYearDate = new LocalDate().withYear(year).withMonthOfYear(month);
            LocalDate startOfMonth = monthYearDate.dayOfMonth().withMinimumValue();
            int daysOfMonth = monthYearDate.dayOfMonth().withMaximumValue().getDayOfMonth();
            List<DailyMenu> monthlyMenu = new ArrayList<>();
            for (int i = 0; i < daysOfMonth; i++) {
                DailyMenu dailymenu = createOrderedDailyMenu(startOfMonth.plusDays(i), userId);
                if (dailymenu.getDate() != null) {
                    monthlyMenu.add(dailymenu);
                }
            }
            return monthlyMenu;
        } else {
            throw new ApiException(400, "Monthly menu not found");
        }
    }

    //Method create one ordered Daily menu.
    private DailyMenu createOrderedDailyMenu(LocalDate currentDay, Long reqUserid) throws ApiException {
        //Long userId = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //org.bootcamp.yum.data.entity.User user = userRepo.findById(userId);
        org.bootcamp.yum.data.entity.User user = getUserOfDailyOrder(reqUserid);
        
        org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRepo.findByDate(currentDay);
        DailyMenu dailyMenu = new DailyMenu();
        if (dailyMenuEntity == null) {
            return dailyMenu;
        }
        org.bootcamp.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRepo.findByUserIdAndDailyMenuId(user.getId(), dailyMenuEntity.getId());
        if (dailyOrderEntity != null) {
            dailyMenu.setId(dailyMenuEntity.getId());
            dailyMenu.setDate(dailyMenuEntity.getDate());
            dailyMenu.setOrderId(dailyOrderEntity.getDailyOrderId());
            LastEdit lastEdit = new LastEdit();
            lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
            lastEdit.setVersion(dailyMenuEntity.getVersion());
            dailyMenu.setLastEdit(lastEdit);
            Boolean finalisedDailyOrder = settingsRepo.findOne(1).deadlinePassed(currentDay);
            dailyOrderEntity.setFinalised(finalisedDailyOrder);
            dailyMenu.setIsFinal(finalisedDailyOrder);
            
            for (org.bootcamp.yum.data.entity.Food foodEntity : dailyMenuEntity.getFoods()) {
                FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                foodWithQuantity.setFood(createFood(foodEntity)); //Create and add food in foodWithQuantity.
                OrderItemId orderItemId = new OrderItemId();
                orderItemId.setDailyOrderId(dailyOrderEntity.getDailyOrderId());
                orderItemId.setFoodId(foodEntity.getId());
                org.bootcamp.yum.data.entity.OrderItem orderItemEntity = orderItemRepo.findById(orderItemId);
                if (orderItemEntity != null) { //Check the food how many times is ordered.
                    foodWithQuantity.setQuantity(orderItemEntity.getQuantity());
                } else {
                    foodWithQuantity.setQuantity(0);
                }
                dailyMenu.addFoodsItem(foodWithQuantity); //Add the food in daily menu.
            }
        } else if (!settingsRepo.findOne(1).deadlinePassed(currentDay)) {
            dailyMenuEntity.setFinalised(false);
            dailyMenu.setDate(dailyMenuEntity.getDate());
            dailyMenu.setIsFinal(false);
        }

        return dailyMenu;
    }

    //Method create one Daily menu.
    private DailyMenu createWeekDailyMenu(LocalDate currentDay, Long reqUserId) throws ApiException {
        //Long userId = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //org.bootcamp.yum.data.entity.User user = userRepo.findById(userId);
        org.bootcamp.yum.data.entity.User user = getUserOfDailyOrder( reqUserId );
        org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRepo.findByDate(currentDay);      
        
        
        DailyMenu dailyMenu = new DailyMenu();
        //Check if exist daily menu.
        if (dailyMenuEntity != null) {
            dailyMenu.setId(dailyMenuEntity.getId());
            dailyMenu.setDate(dailyMenuEntity.getDate());
            //Take current user. 
            org.bootcamp.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRepo.findByUserIdAndDailyMenuId(user.getId(), dailyMenuEntity.getId());
            //Check if this daily menu is ordered from user.
            if (dailyOrderEntity != null) {
                dailyMenu.setOrderId(dailyOrderEntity.getDailyOrderId());
                LastEdit lastEdit = new LastEdit();
                lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
                lastEdit.setVersion(dailyMenuEntity.getVersion());
                dailyMenu.setLastEdit(lastEdit);
                Boolean deadlinePassed = settingsRepo.findOne(1).deadlinePassed(currentDay);
                dailyOrderEntity.setFinalised(deadlinePassed);
                dailyMenu.setIsFinal(deadlinePassed);
                for (org.bootcamp.yum.data.entity.Food foodEntity : dailyMenuEntity.getFoods()) {
                    FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                    foodWithQuantity.setFood(createFood(foodEntity)); //Create and add food in foodWithQuantity.
                    OrderItemId orderItemId = new OrderItemId();
                    orderItemId.setDailyOrderId(dailyOrderEntity.getDailyOrderId());
                    orderItemId.setFoodId(foodEntity.getId());
                    org.bootcamp.yum.data.entity.OrderItem orderItemEntity = orderItemRepo.findById(orderItemId);
                    if (orderItemEntity != null) { //Check the food how many times is ordered.
                        foodWithQuantity.setQuantity(orderItemEntity.getQuantity());
                    } else {
                        foodWithQuantity.setQuantity(0);
                    }
                    dailyMenu.addFoodsItem(foodWithQuantity); //Add the food in daily menu.
                }
            } else {//If daily menu isn't ordered from user, not set order stats.  
                Boolean deadlinePassed = settingsRepo.findOne(1).deadlinePassed(currentDay);
                dailyMenuEntity.setFinalised(deadlinePassed);
                dailyMenu.setIsFinal(deadlinePassed);
                LastEdit lastEdit = new LastEdit();
                lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
                lastEdit.setVersion(dailyMenuEntity.getVersion());
                dailyMenu.setLastEdit(lastEdit);
                for (org.bootcamp.yum.data.entity.Food foodEntity : dailyMenuEntity.getFoods()) {
                    FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                    foodWithQuantity.setFood(createFood(foodEntity)); //Create and add food in foodWithQuantity.
                    foodWithQuantity.setQuantity(0);
                    dailyMenu.addFoodsItem(foodWithQuantity);//Add the food in daily menu.
                }
            }
        }
        return dailyMenu;
    }

    //Method create one Food.
    private Food createFood(org.bootcamp.yum.data.entity.Food foodEntity) {
        Food food = new Food();
        food.setId(foodEntity.getId());
        food.setFoodName(foodEntity.getName());
        food.foodType(foodEntity.getFoodType().toString());
        food.setPrice(foodEntity.getPrice().doubleValue());
        food.setDescription(foodEntity.getDescription());
        food.setArchived(foodEntity.isArchived());
        return food;
    }

    /* Return number of weeks(Of given year)
    *  But if one year have 52 weeks and 1-2 days in first week of next year then return (-1).
     */
    private int getWeeksofYear(int year) {
        int weeks = (new LocalDate(year, 12, 31)).getWeekOfWeekyear();
        return weeks;
    }
    
    public boolean deadlinePassed(LocalDate date) {
        Settings settings = settingsRepo.findById(1);
        int deadlineDays = settings.getDeadlineDays();
        LocalTime deadlineTime = settings.getDeadline();
         
        date = date.minusDays(deadlineDays);
        
        while (this.holidaysRepo.findByIdHoliday(date) != null) {
             date = date.minusDays(1);
        }        
        
        // Check if order deadline passed based on given date, deadlineDays and deadlineTime (deadline)
        return (date.toLocalDateTime(deadlineTime).compareTo(LocalDateTime.now()) < 0);
    }
    
    private org.bootcamp.yum.data.entity.User getUserOfDailyOrder(Long userId) throws ApiException{
        
        org.bootcamp.yum.data.entity.User sourceUser = userRepo.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        org.bootcamp.yum.data.entity.User user;
        
        //  Validation for sourceUser, 
        if (sourceUser == null) {
            throw new ApiException(404, "User not found.");
        }
        
        if (userId != 0) {
            if (!sourceUser.getUserRole().toString().equalsIgnoreCase("admin")) { 
                throw new ApiException(401, "Access denied."); 
            }

            user = userRepo.findById(userId);
            if (user == null) {
                throw new ApiException(404, "User not found.");
            }
        } else {
            user = sourceUser;
        }
        
        return user;
        
    }
}
