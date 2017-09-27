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
import java.util.Iterator;
import java.util.List;
import javax.transaction.Transactional;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.ConcurrentCreationException;
import org.bootcamp.yum.api.ConcurrentDeletionException;
import org.bootcamp.yum.api.ConcurrentModificationException;
import org.bootcamp.yum.api.model.ConcurrentOrderDeletion;
import org.bootcamp.yum.api.model.DailyMenu;
import org.bootcamp.yum.api.model.DailyMenuDetails;
import org.bootcamp.yum.api.model.DailyOrder;
import org.bootcamp.yum.api.model.Food;
import org.bootcamp.yum.api.model.FoodWithQuantity;
import org.bootcamp.yum.api.model.LastEdit;
import org.bootcamp.yum.api.model.Order;
import org.bootcamp.yum.api.model.OrderItem;
import org.bootcamp.yum.api.model.UpdateOrderItems;
import org.bootcamp.yum.data.entity.OrderItemId;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class OrdersService {

    @Autowired
    private DailyOrderRepository dailyOrderRep;
    @Autowired
    private DailyMenuRepository dailyMenuRep;
    @Autowired
    private FoodRepository foodRep;
    @Autowired
    private UserRepository userRep;
    @Autowired
    private SettingsRepository settingsRep;
    @Autowired
    private EmailService emailService;

    @Transactional
    public DailyMenu ordersPost(Order order, Long reqUserId) throws ApiException {
        
        org.bootcamp.yum.data.entity.User sourceUser = userRep.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        org.bootcamp.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);
        
        org.bootcamp.yum.data.entity.DailyOrder dailyOrderEntity = new org.bootcamp.yum.data.entity.DailyOrder();

        List<org.bootcamp.yum.data.entity.OrderItem> orderItemsEntity = new ArrayList<>();
        Long dailyMenuId = order.getDailyMenuId();
        org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRep.findById(dailyMenuId);

        //Retrieves user id
        //Long userId = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); 
        Long userId = user.getId();

        //  Validation for dailyMenu
        if (dailyMenuEntity == null) {
            org.bootcamp.yum.data.entity.DailyMenu newDailyMenuEntity = dailyMenuRep.findByDate(order.getDailyMenuDate());
            DailyMenu dailyMenu = new DailyMenu();
            ConcurrentOrderDeletion concurrentOrderDeletion = new ConcurrentOrderDeletion();
            org.bootcamp.yum.api.model.Error error = new org.bootcamp.yum.api.model.Error();
            concurrentOrderDeletion.setError(error);
            error.setError("410");
            if (newDailyMenuEntity == null) {
                dailyMenu.setId(0L);
                error.setMessage("No menu is proposed for this day anymore.");
                concurrentOrderDeletion.setDailyMenu(dailyMenu);
                throw new ConcurrentDeletionException(410, "No menu is proposed for this day anymore.", concurrentOrderDeletion);
            } else {
                error.setMessage("The chef changed the menu recently. Please place your order again.");
                concurrentOrderDeletion.setDailyMenu(newDailyMenuEntity.toDtoDailyMenu());
                throw new ConcurrentDeletionException(410, "The chef changed the menu recently. Please place your order again.", concurrentOrderDeletion);
            }

        } else {
            //check if dailyMenu has been modified, and if so return the new daily menu 
            if (order.getMenuVersion() != dailyMenuEntity.getVersion()) {
                ConcurrentOrderDeletion concurrentOrderDeletion = new ConcurrentOrderDeletion();
                org.bootcamp.yum.api.model.Error error = new org.bootcamp.yum.api.model.Error();
                concurrentOrderDeletion.setError(error);
                error.setError("410");
                error.setMessage("The chef changed the menu recently. Please place your order again.");
                concurrentOrderDeletion.setDailyMenu(dailyMenuEntity.toDtoDailyMenu());
                throw new ConcurrentDeletionException(410, "The chef changed the menu recently. Please place your order again", concurrentOrderDeletion);
            }
            //Check if daily Order already exists 
            org.bootcamp.yum.data.entity.DailyOrder dailyOrder = dailyOrderRep.findByUserIdAndDailyMenuId(user.getId(), dailyMenuId);
            if (dailyOrder != null) {
                throw new ConcurrentCreationException(409, "Order already placed", dailyOrder.toDtoDailyMenu());
            } else {

                LocalDate dailyMenuDate = dailyMenuEntity.getDate();
                // Check for deadline
                if (settingsRep.findOne(1).deadlinePassed(dailyMenuDate) && !allowTodayAdminChangeOrder(sourceUser, dailyMenuDate, reqUserId)) {
                    throw new ApiException(412, "Deadline passed");

                    // Passes Validation
                } else {
                    DailyMenu dailyMenu = new DailyMenu();
                    dailyMenu.setId(dailyMenuId);
                    dailyMenu.setDate(dailyMenuDate);
                    dailyMenu.setFoods(new ArrayList<>());

                    dailyOrderEntity.setOrderItems(orderItemsEntity);
                    dailyOrderEntity.setDailyMenuId(dailyMenuId);
                    dailyOrderEntity.setUserId(userId);
                    dailyOrderEntity.setLastEdit(DateTime.now());
                    List<OrderItem> orderItems = order.getOrderItems();

                    for (OrderItem orderItem : orderItems) {
                        Long foodID = orderItem.getFoodId();
                        org.bootcamp.yum.data.entity.Food foodEntity = foodRep.findById(foodID);

                        // Validation for food existance in foods table and dailyMenu of the current date
                        if ((foodEntity == null) || (!dailyMenuEntity.getFoods().contains(foodEntity))) {
                            throw new ApiException(400, "Bad request");
                        }
                        //Validation for quantity
                        int itemQuantity = orderItem.getQuantity();
                        if (itemQuantity <= 0) {
                            throw new ApiException(400, "Bad request");
                        }

                        org.bootcamp.yum.data.entity.OrderItem orderItemEntity = new org.bootcamp.yum.data.entity.OrderItem();
                        orderItemEntity.setFood(foodEntity);
                        orderItemEntity.setDailyOrder(dailyOrderEntity);
                        orderItemEntity.setQuantity(itemQuantity);
                        dailyOrderEntity.getOrderItems().add(orderItemEntity);

                        FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                        Food food = foodEntity.toDtoFood();

                        foodWithQuantity.setFood(food);
                        foodWithQuantity.setQuantity(itemQuantity);
                        dailyMenu.addFoodsItem(foodWithQuantity);
                    }
                    dailyOrderRep.save(dailyOrderEntity);

                    List<FoodWithQuantity> foodsWQ = dailyMenu.getFoods();
                    for (org.bootcamp.yum.data.entity.Food food : dailyMenuEntity.getFoods()) {
                        boolean contains = false;
                        for (FoodWithQuantity fWQ : foodsWQ) {
                            if (fWQ.getFood().getId() == food.getId()) {
                                contains = true;
                            }
                        }
                        if (!contains) {
                            FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                            Food foodModel = food.toDtoFood();
                            foodWithQuantity.setFood(foodModel);
                            foodWithQuantity.setQuantity(0);
                            dailyMenu.addFoodsItem(foodWithQuantity);
                        }
                    }
                    dailyMenu.setOrderId(dailyOrderEntity.getDailyOrderId());
                    LastEdit lastEdit = new LastEdit();
                    lastEdit.setTimeStamp(dailyMenuEntity.getLastEdit());
                    lastEdit.setVersion(dailyMenuEntity.getVersion());
                    dailyMenu.setLastEdit(lastEdit);
                    dailyMenu.setIsFinal(false);
                    // If user requested email confirmation the email service is injected  
                    if (order.getEmailRequest() && (emailService != null)) {
                        emailService.sendConfirmOrderEmailToHungry(dailyOrderEntity, dailyMenuEntity);
                    }

                    return dailyMenu;
                }
            }
        }

    }

    private void ConcurrentOrderDeletionCheck(Long id, Long dailyMenuId, int dailyMenuVersion, LocalDate dailyMenuDate,
            org.bootcamp.yum.data.entity.User user, org.bootcamp.yum.data.entity.DailyOrder dailyOrderEntity) throws ApiException {

        long userId = user.getId();
        ConcurrentOrderDeletion concurrentOrderDeletion = new ConcurrentOrderDeletion();
        org.bootcamp.yum.api.model.Error error = new org.bootcamp.yum.api.model.Error();
        concurrentOrderDeletion.setError(error);
        error.setError("410");
        // If dailyOrder with the specified id does not exist   
        if ((dailyOrderEntity == null) || (userId != dailyOrderEntity.getUserId())) {
            org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRep.findById(dailyMenuId);
            if (dailyMenuEntity != null) {
                org.bootcamp.yum.data.entity.DailyOrder newDailyOrderEntity = dailyOrderRep.findByUserIdAndDailyMenuId(userId, dailyMenuId); //getDailyMenu();
                if (newDailyOrderEntity != null) {
                    error.setMessage("You cancelled this order earlier, and placed again. Here is the new one.");
                    concurrentOrderDeletion.setDailyMenu(newDailyOrderEntity.toDtoDailyMenu());
                    throw new ConcurrentDeletionException(410, "You cancelled this order earlier, and placed again. Here is the new one.", concurrentOrderDeletion);
                } else {
                    if (dailyMenuVersion != dailyMenuEntity.getVersion()) {
                        error.setMessage("You cancelled this order earlier, and the menu has changed");
                        concurrentOrderDeletion.setDailyMenu(dailyMenuEntity.toDtoDailyMenu());
                        throw new ConcurrentDeletionException(410, "You cancelled this order earlier, and the menu has changed", concurrentOrderDeletion);
                    } else {
                        error.setMessage("You cancelled this order earlier");
                        concurrentOrderDeletion.setDailyMenu(dailyMenuEntity.toDtoDailyMenu());
                        throw new ConcurrentDeletionException(410, "You cancelled this order earlier", concurrentOrderDeletion);
                    }
                }
            } else {
                org.bootcamp.yum.data.entity.DailyMenu newDailyMenuEntity = dailyMenuRep.findByDate(dailyMenuDate);
                if (newDailyMenuEntity != null) {
                    error.setMessage("You cancelled this order earlier, and the menu has changed");
                    concurrentOrderDeletion.setDailyMenu(newDailyMenuEntity.toDtoDailyMenu());

                    throw new ConcurrentDeletionException(410, "You cancelled this order earlier, and the menu has changed", concurrentOrderDeletion);
                } else {
                    error.setError("410");
                    error.setMessage("You cancelled this order earlier, and the menu has changed");
                    concurrentOrderDeletion.setDailyMenu(new DailyMenu());
                    throw new ConcurrentDeletionException(410, "You cancelled this order earlier, and no menu is proposed anymore", concurrentOrderDeletion);
                }
            }

        }
    }

    @Transactional
    public LastEdit ordersIdPut(Long id, UpdateOrderItems updateOrderItems, Long reqUserId) throws ApiException {
        try {
            
            org.bootcamp.yum.data.entity.User sourceUser = userRep.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
            org.bootcamp.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);
            
            //  Validation for daily order
            org.bootcamp.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRep.findByDailyOrderId(id);


            // check if there is no order with this id 
            ConcurrentOrderDeletionCheck(id, updateOrderItems.getDailyMenuId(), updateOrderItems.getDailyMenuVersion(),
                    updateOrderItems.getDailyMenuDate(), user, dailyOrderEntity);

            //  Validation for daily menu
            org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyOrderEntity.getDailyMenu();
            if (dailyMenuEntity == null) {
                throw new ApiException(400, "Order couldn't be modified.");
                // If dailyOrder for the specified user not exists    
            }

            // Concurrent modification       
            int version = dailyOrderEntity.getVersion();
            if (version != updateOrderItems.getLastEdit().getVersion()) {
                DailyOrder dailyOrder = new DailyOrder();
                dailyOrder.setDailyMenuDate(dailyMenuEntity.getDate());

                LastEdit lastEdit = new LastEdit();
                lastEdit.setTimeStamp(dailyOrderEntity.getLastEdit());
                lastEdit.setVersion(version);
                dailyOrder.setLastEdit(lastEdit);
                List<FoodWithQuantity> foods = new ArrayList<>();
                dailyOrder.setFoods(foods);
                List<org.bootcamp.yum.data.entity.OrderItem> orderItemsEntity = dailyOrderEntity.getOrderItems();
                for (org.bootcamp.yum.data.entity.OrderItem orderItemEntity : orderItemsEntity) {
                    org.bootcamp.yum.data.entity.Food foodEntity = orderItemEntity.getFood();
                    FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                    foodWithQuantity.setQuantity(orderItemEntity.getQuantity());
                    Food food = foodEntity.toDtoFood();
                    foodWithQuantity.setFood(food);
                    dailyOrder.addFoodsItem(foodWithQuantity);
                }
                //return dailyOrder;
                throw new ConcurrentModificationException(409, "Concurrent modification error.", dailyOrder);

            } else if (settingsRep.findOne(1).deadlinePassed(dailyOrderEntity.getDailyMenu().getDate()) && !allowTodayAdminChangeOrder(sourceUser, dailyOrderEntity.getDailyMenu().getDate(), reqUserId)) {
                dailyOrderEntity.setFinalised(true);
                throw new ApiException(412, "Deadline for orders passed");
            } else {
                List<OrderItem> orderItemsList = updateOrderItems.getOrderItems();

                if (orderItemsList.isEmpty()) {

                    throw new ApiException(400, "Order couldn't be modified.");
                }
                List<org.bootcamp.yum.data.entity.OrderItem> orderItemsEntity = dailyOrderEntity.getOrderItems();
                for (OrderItem orderItem : orderItemsList) {
                    Long foodID = orderItem.getFoodId();
                    org.bootcamp.yum.data.entity.Food foodEntity = foodRep.findById(foodID);
                    // Validation for food existance in foods table and dailyMenu of the current date
                    if ((foodEntity == null) || (!dailyMenuEntity.getFoods().contains(foodEntity))) {
                        //return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                        throw new ApiException(400, "Order couldn't be modified.");
                    }
                    //Validation for quantity
                    int itemQuantity = orderItem.getQuantity();
                    if (itemQuantity <= 0) {
                        //return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                        throw new ApiException(400, "Order couldn't be modified.");
                    }
                }

                // Passes Validation                            
                Boolean updated = false;
                //Iterate over original order items 
                for (Iterator<org.bootcamp.yum.data.entity.OrderItem> iterator = orderItemsEntity.iterator(); iterator.hasNext();) {
                    org.bootcamp.yum.data.entity.OrderItem orderItemEntity = iterator.next();
                    Boolean found = false;
                    //Iterate over new order items
                    for (Iterator<OrderItem> modelIterator = orderItemsList.iterator(); modelIterator.hasNext();) {
                        OrderItem orderItem = modelIterator.next();
                        if (orderItemEntity.getFood().getId() == orderItem.getFoodId()) {
                            found = true;
                            // Check if quantity has changed
                            int newQuantity = orderItem.getQuantity();
                            if (orderItemEntity.getQuantity() != newQuantity) {
                                orderItemEntity.setQuantity(newQuantity);
                                updated = true;
                            }
                            modelIterator.remove();
                            break;
                        }
                    }
                    // Remove order items that don't exist in modified order
                    if (!found) {
                        iterator.remove();
                        updated = true;
                    }
                }
                // Insert new order items
                for (OrderItem orderItem : orderItemsList) {
                    Long foodID = orderItem.getFoodId();
                    org.bootcamp.yum.data.entity.Food foodEntity = foodRep.findById(foodID);
                    int itemQuantity = orderItem.getQuantity();
                    OrderItemId orderItemId = new OrderItemId();
                    orderItemId.setDailyOrderId(dailyOrderEntity.getDailyOrderId());
                    orderItemId.setFoodId(foodID);
                    org.bootcamp.yum.data.entity.OrderItem orderItemEntity = new org.bootcamp.yum.data.entity.OrderItem();
                    orderItemEntity.setFood(foodEntity);
                    orderItemEntity.setDailyOrder(dailyOrderEntity);
                    orderItemEntity.setQuantity(itemQuantity);
                    updated = true;
                    orderItemsEntity.add(orderItemEntity);
                }
                // Update Order version and timestamp and return lastEdit Object
                if (updated) {
                    dailyOrderEntity.setLastEdit(DateTime.now());
                    dailyOrderEntity.setVersion(dailyOrderEntity.getVersion() + 1);
                    LastEdit lastEdit = new LastEdit();
                    lastEdit.setTimeStamp(dailyOrderEntity.getLastEdit());
                    lastEdit.setVersion(dailyOrderEntity.getVersion());

                    // If user requested email confirmation the email service is injected  
                    if (updateOrderItems.getEmailRequest() && (emailService != null)) {
                        emailService.sendConfirmOrderEmailToHungry(dailyOrderEntity, dailyMenuEntity);
                    }

                    return lastEdit;

                    // if quantities same and no new orderItem    
                } else {
                    throw new ApiException(304, "Unmodified data");
                }
            }

        } catch (IllegalArgumentException e) {
            throw new ApiException(400, "Bad registration data");
        }
    }

    @Transactional
    public void ordersIdDelete(Long id, DailyMenuDetails dailyMenuDetails, Long reqUserId) throws ApiException {
        
        org.bootcamp.yum.data.entity.User sourceUser = userRep.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        org.bootcamp.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);
        
        //  Validation for daily order
        org.bootcamp.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRep.findByDailyOrderId(id);

        // check if there is no order with this id 
        ConcurrentOrderDeletionCheck(id, dailyMenuDetails.getDailyMenuId(), dailyMenuDetails.getDailyMenuVersion(),
                dailyMenuDetails.getDailyMenuDate(), user, dailyOrderEntity);

        org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyOrderEntity.getDailyMenu();
        //  Validation for user, dailyMenu 
        if ((dailyMenuEntity == null) || user.getId() != dailyOrderEntity.getUserId()) {
            throw new ApiException(400, "Order couldn't be deleted.");
            // Check for deadline             
        } else if (settingsRep.findOne(1).deadlinePassed(dailyOrderEntity.getDailyMenu().getDate()) && !allowTodayAdminChangeOrder(sourceUser, dailyMenuEntity.getDate(), reqUserId)) {
            dailyOrderEntity.setFinalised(true);
            throw new ApiException(412, "Deadline for orders passed");
        } else {
            dailyOrderRep.delete(dailyOrderEntity);
        }
    }

    public DailyOrder ordersIdGet(Long id, Long dailyMenuId, int dailyMenuVersion, LocalDate dailyMenuDate, Long reqUserId) throws ApiException {
        
        org.bootcamp.yum.data.entity.User sourceUser = userRep.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        org.bootcamp.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);
        
        org.bootcamp.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRep.findByDailyOrderId(id);


        //long userId = user.getId();
        // check if there is no order with this id 
        ConcurrentOrderDeletionCheck(id, dailyMenuId, dailyMenuVersion, dailyMenuDate, user, dailyOrderEntity);
        org.bootcamp.yum.data.entity.DailyMenu dailyMenuEntity = dailyOrderEntity.getDailyMenu();
        DailyOrder dailyOrder = new DailyOrder();
        dailyOrder.setDailyMenuDate(dailyMenuEntity.getDate());
        LastEdit lastEdit = new LastEdit();
        lastEdit.setTimeStamp(dailyOrderEntity.getLastEdit());
        lastEdit.setVersion(dailyOrderEntity.getVersion());
        dailyOrder.setLastEdit(lastEdit);
        List<FoodWithQuantity> foodsWithQuantity = new ArrayList();
        for (org.bootcamp.yum.data.entity.OrderItem orderItemEntity : dailyOrderEntity.getOrderItems()) {
            FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
            Food food = orderItemEntity.getFood().toDtoFood();
            foodWithQuantity.setFood(food);
            foodWithQuantity.setQuantity(orderItemEntity.getQuantity());
            foodsWithQuantity.add(foodWithQuantity);
        }
        dailyOrder.setFoods(foodsWithQuantity);
        return dailyOrder;

    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    private org.bootcamp.yum.data.entity.User getUserOfDailyOrder(org.bootcamp.yum.data.entity.User sourceUser, Long userId) throws ApiException {

        //org.bootcamp.yum.data.entity.User sourceUser = userRep.findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        org.bootcamp.yum.data.entity.User user;

        //  Validation for sourceUser, 
        if (sourceUser == null) {
            throw new ApiException(400, "User not found.");
        }

        if (userId != 0) {
            if (!sourceUser.getUserRole().toString().equalsIgnoreCase("admin")) {
                throw new ApiException(401, "Access denied.");
            }

            user = userRep.findById(userId);
            if (user == null) {
                throw new ApiException(400, "User not found.");
            }
        } else {
            user = sourceUser;
        }

        return user;

    }
    
    private Boolean allowTodayAdminChangeOrder(org.bootcamp.yum.data.entity.User sourceUser, LocalDate menuDate, Long userId){
        if (userId != 0 && sourceUser.getUserRole().toString().equalsIgnoreCase("admin") && menuDate.isEqual(new LocalDate())) {
            return true;
        }
        return false;
    }

}
