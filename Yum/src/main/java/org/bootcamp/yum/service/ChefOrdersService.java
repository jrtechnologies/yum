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
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.model.DailyMenuOrder;
import org.bootcamp.yum.api.model.DailyOrderSummary;
import org.bootcamp.yum.api.model.OrderItem;
import org.bootcamp.yum.api.model.UserOrder;
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * 
 */
@Service
public class ChefOrdersService {
    
 
    @Autowired
    private DailyMenuRepository dailyMenuRep;
 
    
    private static final long ALL_USERS = 0;
    
    public DailyOrderSummary ordersDailyDayGet(String dayStr) throws ApiException {
       
        //Decode & Validate month request
        String patternString = "^(\\d{4})-(\\d{2})-(\\d{2})$";
        Pattern pattern =  Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(dayStr);
        
        if (!matcher.matches()) { 
            throw new ApiException(400, "Bad request of date format ex. 2017-03-01");
        }
        
        LocalDate day = new LocalDate();
        
        try{ 
           day = new LocalDate(dayStr);
        }
        catch(Exception e){
            //e.printStackTrace();
            throw new ApiException(400, "Bad request of date format ex. 2017-03-28  ");
        }
        
        //System.out.println(day);
        
        DailyOrderSummary dailyOrderSummary = new DailyOrderSummary();
        org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRep.findByDate(day);
            
        dailyOrderSummary.setDate(day);
        
        if(dailyMenuEntity==null || !dailyMenuEntity.hasOrders()){
            throw new ApiException(404, "No menu/no orders for the requested date");
        } 

        // DailyOrderSummary-->OrderItems
        List<OrderItem> orderItemList = new ArrayList<OrderItem>(); 
 
        //get summary of daily orders in a list of orders,  food id + quantity
        orderItemList = getOrderItemList(dailyMenuEntity, ALL_USERS);
 
        dailyOrderSummary.setOrderItems(orderItemList);
        
        // DailyOrderSummary-->UserOrder
        List<UserOrder> userOrderList = new ArrayList<UserOrder>(); 
        
        
        List<DailyOrder> dailyOrderEntities = dailyMenuEntity.getDailyOrders();
        for(DailyOrder doe : dailyOrderEntities){
            UserOrder userOrder = new UserOrder();
            HashMap<Long, Integer> foodQtys = new HashMap<>();
            List<OrderItem> orderItemListByUser = new ArrayList<OrderItem>(); 
            List<org.bootcamp.yum.data.entity.OrderItem> orderItems = doe.getOrderItems();
            User user = doe.getUser();
            
            userOrder.setFirstName(user.getFirstName());
            userOrder.setLastName(user.getLastName());
            
            //orderItemListByUser = getOrderItemList(dailyMenuEntity, user.getId());
            
            for(org.bootcamp.yum.data.entity.OrderItem orderItemEntity : orderItems){
                Long foodId = orderItemEntity.getFood().getId();
                foodQtys.put(foodId, (foodQtys.get(foodId)==null?0:foodQtys.get(foodId)) + orderItemEntity.getQuantity());
            }                     
             
            foodQtys.forEach((k,v)->{
                OrderItem orderItem = new OrderItem();
                orderItem.setFoodId(k);
                orderItem.setQuantity(v);

                orderItemListByUser.add(orderItem);
            }); 
            
            userOrder.setOrderItems(orderItemListByUser);
            userOrderList.add(userOrder);
        }
 
         
        dailyOrderSummary.setUserOrders(userOrderList);
//        System.out.println(dailyOrderSummary);
        return dailyOrderSummary;
    }
    
    public List<DailyMenuOrder> ordersMonthlyMonthyearGet(String monthyear) throws ApiException {
       
        //Decode & Validate month request
        String patternString = "^(\\d{2})-(\\d{4})$";
        Pattern pattern =  Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(monthyear);
        if (!matcher.matches()) { 
            throw new ApiException(400, "Bad request of month-year format");
        }
        
        //Build list
        List<DailyMenuOrder> dailyMenuOrders = new ArrayList<>();
        
        //LocalDate monthYearDate = new LocalDate().withYear(Integer.parseInt(monthyear.substring(3, 7))).withMonthOfYear(Integer.parseInt(monthyear.substring(0, 2)));
        LocalDate monthYearDate = new LocalDate().withYear(Integer.parseInt(matcher.group(2))).withMonthOfYear(Integer.parseInt(matcher.group(1)));
        LocalDate startOfMonth = monthYearDate.dayOfMonth().withMinimumValue();
        int daysOfMonth = monthYearDate.dayOfMonth().withMaximumValue().getDayOfMonth();
        
        // for each day of month
        for (int i=0; i<daysOfMonth; i++) {
            
            org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRep.findByDate(startOfMonth);
 
            if(dailyMenuEntity!=null && dailyMenuEntity.hasOrders()){
                
                // DailymenuOrder-->OrderItems
                List<OrderItem> orderItemList = new ArrayList<OrderItem>(); 
                DailyMenuOrder dailyOrder = new DailyMenuOrder();
                
                dailyOrder.setDailyMenuDate(dailyMenuEntity.getDate());
                dailyOrder.setDailyMenuId(dailyMenuEntity.getId());
                
                //get summary of daily orders in a list of orders,  food id + quantity
                orderItemList = getOrderItemList(dailyMenuEntity, ALL_USERS);
                
                dailyOrder.setOrderItems(orderItemList);
                dailyMenuOrders.add(dailyOrder);
            }
         
            startOfMonth = startOfMonth.plusDays(1);
        }
        
            
        return dailyMenuOrders;
        
    }
    
    private List<OrderItem> getOrderItemList(org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity, Long userId) {
        
                List<OrderItem> orderItemList = new ArrayList<OrderItem>();
                HashMap<Long, Integer> foodQtys = new HashMap<>();
                
                // get all orders
                List<DailyOrder> dailyOrderEntities = dailyMenuEntity.getDailyOrders();
                for(DailyOrder doe : dailyOrderEntities){
                    
                    if(userId==ALL_USERS || doe.getUserId()==userId){
                    
                        List<org.bootcamp.yum.data.entity.OrderItem> orderItems = doe.getOrderItems();
                        for(org.bootcamp.yum.data.entity.OrderItem orderItemEntity : orderItems){
                            Long foodId = orderItemEntity.getFood().getId();
                            foodQtys.put(foodId, (foodQtys.get(foodId)==null?0:foodQtys.get(foodId)) + orderItemEntity.getQuantity());
                        }                     
                    }
                }
                
                foodQtys.forEach((k,v)->{
                    OrderItem orderItem = new OrderItem();
                    orderItem.setFoodId(k);
                    orderItem.setQuantity(v);
                    //System.out.println("Item : " + k + " Count : " + v);

                    orderItemList.add(orderItem);
                });
                
                return orderItemList;
            }
}
