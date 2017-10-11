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
package com.jrtechnologies.yum.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
//import javax.transaction.Transactional;
import com.jrtechnologies.yum.api.ApiException;
import com.jrtechnologies.yum.api.ConcurrentCreationException;
import com.jrtechnologies.yum.api.ConcurrentDeletionException;
import com.jrtechnologies.yum.api.ConcurrentModificationException;
import com.jrtechnologies.yum.api.model.ConcurrentOrderDeletion;
import com.jrtechnologies.yum.api.model.DailyMenu;
import com.jrtechnologies.yum.api.model.DailyMenuDetails;
import com.jrtechnologies.yum.api.model.DailyOrder;
import com.jrtechnologies.yum.api.model.Food;
import com.jrtechnologies.yum.api.model.FoodWithQuantity;
import com.jrtechnologies.yum.api.model.LastEdit;
import com.jrtechnologies.yum.api.model.Order;
import com.jrtechnologies.yum.api.model.OrderItem;
import com.jrtechnologies.yum.api.model.OrderUpdate;
import com.jrtechnologies.yum.api.model.UpdateOrderItems;
import com.jrtechnologies.yum.data.entity.OrderItemId;
import com.jrtechnologies.yum.data.entity.Settings;
import com.jrtechnologies.yum.data.entity.Transaction;
import com.jrtechnologies.yum.data.repository.DailyMenuRepository;
import com.jrtechnologies.yum.data.repository.DailyOrderRepository;
import com.jrtechnologies.yum.data.repository.FoodRepository;
import com.jrtechnologies.yum.data.repository.HolidaysRepository;
import com.jrtechnologies.yum.data.repository.SettingsRepository;
import com.jrtechnologies.yum.data.repository.TransactionRepository;
import com.jrtechnologies.yum.data.repository.UserRepository;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Autowired
    HolidaysRepository holidaysRepo;
    @Autowired
    private TransactionRepository transactionRep;

    @Transactional
    public DailyMenu ordersPost(Order order, Long reqUserId) throws ApiException {

        com.jrtechnologies.yum.data.entity.User sourceUser = userRep
                .findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        com.jrtechnologies.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);

        com.jrtechnologies.yum.data.entity.DailyOrder dailyOrderEntity = new com.jrtechnologies.yum.data.entity.DailyOrder();

        List<com.jrtechnologies.yum.data.entity.OrderItem> orderItemsEntity = new ArrayList<>();
        Long dailyMenuId = order.getDailyMenuId();
        com.jrtechnologies.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRep.findById(dailyMenuId);

        //Retrieves user id
        //Long userId = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); 
        Long userId = user.getId();

        //  Validation for dailyMenu
        if (dailyMenuEntity == null) {
            com.jrtechnologies.yum.data.entity.DailyMenu newDailyMenuEntity = dailyMenuRep
                    .findByDate(order.getDailyMenuDate());
            DailyMenu dailyMenu = new DailyMenu();
            ConcurrentOrderDeletion concurrentOrderDeletion = new ConcurrentOrderDeletion();
            com.jrtechnologies.yum.api.model.Error error = new com.jrtechnologies.yum.api.model.Error();
            concurrentOrderDeletion.setError(error);
            error.setError("410");
            if (newDailyMenuEntity == null) {
                dailyMenu.setId(0L);
                error.setMessage("No menu is proposed for this day anymore.");
                concurrentOrderDeletion.setDailyMenu(dailyMenu);
                throw new ConcurrentDeletionException(410, "No menu is proposed for this day anymore.",
                        concurrentOrderDeletion);
            } else {
                error.setMessage("The chef changed the menu recently. Please place your order again.");
                concurrentOrderDeletion.setDailyMenu(newDailyMenuEntity.toDtoDailyMenu());
                throw new ConcurrentDeletionException(410,
                        "The chef changed the menu recently. Please place your order again.", concurrentOrderDeletion);
            }

        }

        //check if dailyMenu has been modified, and if so return the new daily menu 
        if (order.getMenuVersion() != dailyMenuEntity.getVersion()) {
            ConcurrentOrderDeletion concurrentOrderDeletion = new ConcurrentOrderDeletion();
            com.jrtechnologies.yum.api.model.Error error = new com.jrtechnologies.yum.api.model.Error();
            concurrentOrderDeletion.setError(error);
            error.setError("410");
            error.setMessage("The chef changed the menu recently. Please place your order again.");
            concurrentOrderDeletion.setDailyMenu(dailyMenuEntity.toDtoDailyMenu());
            throw new ConcurrentDeletionException(410,
                    "The chef changed the menu recently. Please place your order again", concurrentOrderDeletion);
        }
        //Check if daily Order already exists 
        com.jrtechnologies.yum.data.entity.DailyOrder dailyOrder = dailyOrderRep.findByUserIdAndDailyMenuId(user.getId(),
                dailyMenuId);
        if (dailyOrder != null) {
            throw new ConcurrentCreationException(409, "Order already placed", dailyOrder.toDtoDailyMenu());
        }

        LocalDate dailyMenuDate = dailyMenuEntity.getDate();
        // Check for deadline
        if (deadlinePassed(dailyMenuDate) && !allowAdminAfterTodayChangeOrder(sourceUser, dailyMenuDate, reqUserId)) {
            throw new ApiException(412, "Deadline passed");

        }
        //check comment size
        if ((order.getComment() != null ? order.getComment() : "").length() > 150) {
            throw new ApiException(400, "Bad request");
        }

        DailyMenu dailyMenu = new DailyMenu();
        dailyMenu.setId(dailyMenuId);
        dailyMenu.setDate(dailyMenuDate);
        dailyMenu.setFoods(new ArrayList<>());
        dailyMenu.setComment(order.getComment());
        dailyOrderEntity.setOrderItems(orderItemsEntity);
        dailyOrderEntity.setDailyMenuId(dailyMenuId);
        dailyOrderEntity.setUserId(userId);
        dailyOrderEntity.setLastEdit(DateTime.now());
        dailyOrderEntity.setComment(order.getComment());
        List<OrderItem> orderItems = order.getOrderItems();
        BigDecimal orderAmount = new BigDecimal(0);

        for (OrderItem orderItem : orderItems) {
            Long foodID = orderItem.getFoodId();
            com.jrtechnologies.yum.data.entity.Food foodEntity = foodRep.findById(foodID);

            // Validation for food existance in foods table and dailyMenu of the current date
            if ((foodEntity == null) || (!dailyMenuEntity.getFoods().contains(foodEntity))) {
                throw new ApiException(400, "Bad request");
            }
            //Validation for quantity
            int itemQuantity = orderItem.getQuantity();
            if (itemQuantity <= 0) {
                throw new ApiException(400, "Bad request");
            }

            com.jrtechnologies.yum.data.entity.OrderItem orderItemEntity = new com.jrtechnologies.yum.data.entity.OrderItem();
            orderItemEntity.setFood(foodEntity);
            orderItemEntity.setDailyOrder(dailyOrderEntity);
            orderItemEntity.setQuantity(itemQuantity);
            dailyOrderEntity.getOrderItems().add(orderItemEntity);

            FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
            Food food = foodEntity.toDtoFood();

            foodWithQuantity.setFood(food);
            foodWithQuantity.setQuantity(itemQuantity);
            dailyMenu.addFoodsItem(foodWithQuantity);
            // Add (food price x quantity) to order amount
            orderAmount = orderAmount.add(foodEntity.getPrice().multiply(new BigDecimal(itemQuantity)));
        }

        BigDecimal balance = user.getBalance();
        if (balance == null) {
            balance = orderAmount.negate();
        } else {
            balance = balance.subtract(orderAmount);
        }

        if (balance.compareTo(BigDecimal.ZERO) < 0) {
            throw new ApiException(402, "Not enough balance");
        }

        dailyOrderRep.save(dailyOrderEntity);
        user.setBalance(balance);
        Transaction transaction = new Transaction(userId, orderAmount, balance, sourceUser.getId(),
                dailyOrderEntity.getDailyOrderId(), dailyMenuId, 1);
        transactionRep.save(transaction);

        List<FoodWithQuantity> foodsWQ = dailyMenu.getFoods();
        for (com.jrtechnologies.yum.data.entity.Food food : dailyMenuEntity.getFoods()) {
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
        dailyMenu.setBalance(balance);
        // If user requested email confirmation the email service is injected  
        if (order.getEmailRequest() && (emailService != null)) {
            emailService.sendConfirmOrderEmailToHungry(dailyOrderEntity, dailyMenuEntity);
        }

        return dailyMenu;

    }

    private void ConcurrentOrderDeletionCheck(Long dailyMenuId, int dailyMenuVersion, LocalDate dailyMenuDate,
            com.jrtechnologies.yum.data.entity.User user, com.jrtechnologies.yum.data.entity.DailyOrder dailyOrderEntity)
            throws ApiException {

        long userId = user.getId();
        ConcurrentOrderDeletion concurrentOrderDeletion = new ConcurrentOrderDeletion();
        com.jrtechnologies.yum.api.model.Error error = new com.jrtechnologies.yum.api.model.Error();
        concurrentOrderDeletion.setError(error);
        error.setError("410");
        // If dailyOrder with the specified id does not exist   
        if ((dailyOrderEntity == null) || (userId != dailyOrderEntity.getUserId())) {
            com.jrtechnologies.yum.data.entity.DailyMenu dailyMenuEntity = dailyMenuRep.findById(dailyMenuId);
            if (dailyMenuEntity != null) {
                com.jrtechnologies.yum.data.entity.DailyOrder newDailyOrderEntity = dailyOrderRep
                        .findByUserIdAndDailyMenuId(userId, dailyMenuId); //getDailyMenu();
                if (newDailyOrderEntity != null) {
                    error.setMessage("You cancelled this order earlier, and placed again. Here is the new one.");
                    concurrentOrderDeletion.setDailyMenu(newDailyOrderEntity.toDtoDailyMenu());
                    throw new ConcurrentDeletionException(410,
                            "You cancelled this order earlier, and placed again. Here is the new one.",
                            concurrentOrderDeletion);
                } else {
                    if (dailyMenuVersion != dailyMenuEntity.getVersion()) {
                        error.setMessage("You cancelled this order earlier, and the menu has changed");
                        concurrentOrderDeletion.setDailyMenu(dailyMenuEntity.toDtoDailyMenu());
                        throw new ConcurrentDeletionException(410,
                                "You cancelled this order earlier, and the menu has changed", concurrentOrderDeletion);
                    } else {
                        error.setMessage("You cancelled this order earlier");
                        concurrentOrderDeletion.setDailyMenu(dailyMenuEntity.toDtoDailyMenu());
                        throw new ConcurrentDeletionException(410, "You cancelled this order earlier",
                                concurrentOrderDeletion);
                    }
                }
            } else {
                com.jrtechnologies.yum.data.entity.DailyMenu newDailyMenuEntity = dailyMenuRep.findByDate(dailyMenuDate);
                if (newDailyMenuEntity != null) {
                    error.setMessage("You cancelled this order earlier, and the menu has changed");
                    concurrentOrderDeletion.setDailyMenu(newDailyMenuEntity.toDtoDailyMenu());

                    throw new ConcurrentDeletionException(410,
                            "You cancelled this order earlier, and the menu has changed", concurrentOrderDeletion);
                } else {
                    error.setError("410");
                    error.setMessage("You cancelled this order earlier, and the menu has changed");
                    concurrentOrderDeletion.setDailyMenu(new DailyMenu());
                    throw new ConcurrentDeletionException(410,
                            "You cancelled this order earlier, and no menu is proposed anymore",
                            concurrentOrderDeletion);
                }
            }

        }
    }

    @Transactional(rollbackFor = ApiException.class)
    public OrderUpdate ordersIdPut(Long id, UpdateOrderItems updateOrderItems, Long reqUserId) throws ApiException {
        try {

            com.jrtechnologies.yum.data.entity.User sourceUser = userRep
                    .findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
            com.jrtechnologies.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);

            //  Validation for daily order
            com.jrtechnologies.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRep.findByDailyOrderId(id);

            // check if there is no order with this id 
            ConcurrentOrderDeletionCheck(updateOrderItems.getDailyMenuId(), updateOrderItems.getDailyMenuVersion(),
                    updateOrderItems.getDailyMenuDate(), user, dailyOrderEntity);

            //  Validation for daily menu
            com.jrtechnologies.yum.data.entity.DailyMenu dailyMenuEntity = dailyOrderEntity.getDailyMenu();
            if (dailyMenuEntity == null) {
                throw new ApiException(400, "Order couldn't be modified.");
                // If dailyOrder for the specified user not exists    
            }

            //check comment size
            if ((updateOrderItems.getComment() != null ? updateOrderItems.getComment() : "").length() > 150) {
                throw new ApiException(400, "Bad request");
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
                dailyOrder.setComment(dailyOrderEntity.getComment());
                List<FoodWithQuantity> foods = new ArrayList<>();
                dailyOrder.setFoods(foods);
                List<com.jrtechnologies.yum.data.entity.OrderItem> orderItemsEntity = dailyOrderEntity.getOrderItems();
                for (com.jrtechnologies.yum.data.entity.OrderItem orderItemEntity : orderItemsEntity) {
                    com.jrtechnologies.yum.data.entity.Food foodEntity = orderItemEntity.getFood();
                    FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                    foodWithQuantity.setQuantity(orderItemEntity.getQuantity());
                    Food food = foodEntity.toDtoFood();
                    foodWithQuantity.setFood(food);
                    dailyOrder.addFoodsItem(foodWithQuantity);
                }
                //return dailyOrder;
                throw new ConcurrentModificationException(409, "Concurrent modification error.", dailyOrder);

            }
            if (deadlinePassed(dailyOrderEntity.getDailyMenu().getDate())
                    && !allowAdminAfterTodayChangeOrder(sourceUser, dailyOrderEntity.getDailyMenu().getDate(),
                            reqUserId)) {
                dailyOrderEntity.setFinalised(true);
                throw new ApiException(412, "Deadline for orders passed");
            }

            List<OrderItem> orderItemsList = updateOrderItems.getOrderItems();

            if (orderItemsList.isEmpty()) {

                throw new ApiException(400, "Order couldn't be modified.");
            }
            List<com.jrtechnologies.yum.data.entity.OrderItem> orderItemsEntity = dailyOrderEntity.getOrderItems();
            for (OrderItem orderItem : orderItemsList) {
                Long foodID = orderItem.getFoodId();
                com.jrtechnologies.yum.data.entity.Food foodEntity = foodRep.findById(foodID);
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
            BigDecimal orderAmount = new BigDecimal(0);

            //edit comment
            if (updateOrderItems.getComment() != null) {
                if (!updateOrderItems.getComment().equals(dailyOrderEntity.getComment())) {
                    dailyOrderEntity.setComment(updateOrderItems.getComment());
                    updated = true;
                }
            }

            //Iterate over original order items 
            for (Iterator<com.jrtechnologies.yum.data.entity.OrderItem> iterator = orderItemsEntity.iterator(); iterator
                    .hasNext();) {
                com.jrtechnologies.yum.data.entity.OrderItem orderItemEntity = iterator.next();
                Boolean found = false;
                com.jrtechnologies.yum.data.entity.Food foodEntity = orderItemEntity.getFood();
                int oldQuantity = orderItemEntity.getQuantity();
                //Iterate over new order items
                for (Iterator<OrderItem> modelIterator = orderItemsList.iterator(); modelIterator.hasNext();) {
                    OrderItem orderItem = modelIterator.next();
                    if (foodEntity.getId() == orderItem.getFoodId()) {
                        found = true;
                        // Check if quantity has changed
                        int newQuantity = orderItem.getQuantity();
                        if (oldQuantity != newQuantity) {
                            orderItemEntity.setQuantity(newQuantity);
                            updated = true;
                            orderAmount = orderAmount
                                    .add(foodEntity.getPrice().multiply(new BigDecimal(newQuantity - oldQuantity)));
                        }
                        modelIterator.remove();
                        break;
                    }
                }
                // Remove order items that don't exist in modified order
                if (!found) {
                    iterator.remove();
                    updated = true;
                    orderAmount = orderAmount.subtract(foodEntity.getPrice().multiply(new BigDecimal(oldQuantity)));
                }
            }
            // Insert new order items
            for (OrderItem orderItem : orderItemsList) {
                Long foodID = orderItem.getFoodId();
                com.jrtechnologies.yum.data.entity.Food foodEntity = foodRep.findById(foodID);
                int itemQuantity = orderItem.getQuantity();
                OrderItemId orderItemId = new OrderItemId();
                orderItemId.setDailyOrderId(dailyOrderEntity.getDailyOrderId());
                orderItemId.setFoodId(foodID);
                com.jrtechnologies.yum.data.entity.OrderItem orderItemEntity = new com.jrtechnologies.yum.data.entity.OrderItem();
                orderItemEntity.setFood(foodEntity);
                orderItemEntity.setDailyOrder(dailyOrderEntity);
                orderItemEntity.setQuantity(itemQuantity);
                updated = true;
                orderAmount = orderAmount.add(foodEntity.getPrice().multiply(new BigDecimal(itemQuantity)));
                orderItemsEntity.add(orderItemEntity);
            }
            // Update Order version and timestamp and return lastEdit Object
            if (updated) {
                dailyOrderEntity.setLastEdit(DateTime.now());
                dailyOrderEntity.setVersion(dailyOrderEntity.getVersion() + 1);
                LastEdit lastEdit = new LastEdit();
                lastEdit.setTimeStamp(dailyOrderEntity.getLastEdit());
                lastEdit.setVersion(dailyOrderEntity.getVersion());

                BigDecimal balance = user.getBalance();
                if (balance == null) {
                    balance = orderAmount.negate();
                } else {
                    balance = balance.subtract(orderAmount);
                }

                if (balance.compareTo(BigDecimal.ZERO) < 0) {
                    throw new ApiException(402, "Not enough balance");
                }

                user.setBalance(balance);

                OrderUpdate orderUpdate = new OrderUpdate();
                orderUpdate.setBalance(balance);
                orderUpdate.setLastEdit(lastEdit);

                Transaction transaction = new Transaction(user.getId(), orderAmount, balance, sourceUser.getId(),
                        dailyOrderEntity.getDailyOrderId(), dailyMenuEntity.getId(), 2);
                transactionRep.save(transaction);

                // If user requested email confirmation the email service is injected  
                if (updateOrderItems.getEmailRequest() && (emailService != null)) {
                    emailService.sendConfirmOrderEmailToHungry(dailyOrderEntity, dailyMenuEntity);
                }

                return orderUpdate;

                // if quantities same and no new orderItem    
            } else {
                throw new ApiException(304, "Unmodified data");
            }

        } catch (IllegalArgumentException e) {
            throw new ApiException(400, "Bad registration data");
        }
    }

    @Transactional
    public OrderUpdate ordersIdDelete(Long id, DailyMenuDetails dailyMenuDetails, Long reqUserId) throws ApiException {

        com.jrtechnologies.yum.data.entity.User sourceUser = userRep
                .findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        com.jrtechnologies.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);

        //  Validation for daily order
        com.jrtechnologies.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRep.findByDailyOrderId(id);

        // check if there is no order with this id 
        ConcurrentOrderDeletionCheck(dailyMenuDetails.getDailyMenuId(), dailyMenuDetails.getDailyMenuVersion(),
                dailyMenuDetails.getDailyMenuDate(), user, dailyOrderEntity);

        com.jrtechnologies.yum.data.entity.DailyMenu dailyMenuEntity = dailyOrderEntity.getDailyMenu();
        //  Validation for user, dailyMenu 
        if ((dailyMenuEntity == null) || user.getId() != dailyOrderEntity.getUserId()) {
            throw new ApiException(400, "Order couldn't be deleted.");
            // Check for deadline             
        } else if (deadlinePassed(dailyOrderEntity.getDailyMenu().getDate())
                && !allowAdminAfterTodayChangeOrder(sourceUser, dailyMenuEntity.getDate(), reqUserId)) {
            dailyOrderEntity.setFinalised(true);
            throw new ApiException(412, "Deadline for orders passed");
        } else {
            BigDecimal orderAmount = new BigDecimal(0);
            for (com.jrtechnologies.yum.data.entity.OrderItem orderItem : dailyOrderEntity.getOrderItems()) {
                orderAmount = orderAmount
                        .add(orderItem.getFood().getPrice().multiply(new BigDecimal(orderItem.getQuantity())));
            }

            BigDecimal balance = user.getBalance();
            if (balance == null) {
                balance = orderAmount;
            } else {
                balance = balance.add(orderAmount);
            }
            user.setBalance(balance);
            OrderUpdate orderUpdate = new OrderUpdate();
            orderUpdate.setBalance(balance);

            Transaction transaction = new Transaction(user.getId(), orderAmount, balance, sourceUser.getId(),
                    dailyOrderEntity.getDailyOrderId(), dailyMenuEntity.getId(), 3);
            transactionRep.save(transaction);
            dailyOrderRep.delete(dailyOrderEntity);
            return orderUpdate;
        }
    }

    public DailyOrder ordersIdGet(Long id, Long dailyMenuId, int dailyMenuVersion, LocalDate dailyMenuDate,
            Long reqUserId) throws ApiException {

        com.jrtechnologies.yum.data.entity.User sourceUser = userRep
                .findById((Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        com.jrtechnologies.yum.data.entity.User user = getUserOfDailyOrder(sourceUser, reqUserId);

        com.jrtechnologies.yum.data.entity.DailyOrder dailyOrderEntity = dailyOrderRep.findByDailyOrderId(id);

        //long userId = user.getId();
        // check if there is no order with this id 
        ConcurrentOrderDeletionCheck(dailyMenuId, dailyMenuVersion, dailyMenuDate, user, dailyOrderEntity);
        com.jrtechnologies.yum.data.entity.DailyMenu dailyMenuEntity = dailyOrderEntity.getDailyMenu();
        DailyOrder dailyOrder = new DailyOrder();
        dailyOrder.setDailyMenuDate(dailyMenuEntity.getDate());
        dailyOrder.setComment(dailyOrderEntity.getComment());
        LastEdit lastEdit = new LastEdit();
        lastEdit.setTimeStamp(dailyOrderEntity.getLastEdit());
        lastEdit.setVersion(dailyOrderEntity.getVersion());
        dailyOrder.setLastEdit(lastEdit);
        List<FoodWithQuantity> foodsWithQuantity = new ArrayList<>();
        for (com.jrtechnologies.yum.data.entity.OrderItem orderItemEntity : dailyOrderEntity.getOrderItems()) {
            FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
            Food food = orderItemEntity.getFood().toDtoFood();
            foodWithQuantity.setFood(food);
            foodWithQuantity.setQuantity(orderItemEntity.getQuantity());
            foodsWithQuantity.add(foodWithQuantity);
        }
        dailyOrder.setFoods(foodsWithQuantity);
        return dailyOrder;

    }

    private com.jrtechnologies.yum.data.entity.User getUserOfDailyOrder(com.jrtechnologies.yum.data.entity.User sourceUser,
            Long userId) throws ApiException {

        com.jrtechnologies.yum.data.entity.User user;

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

    private Boolean allowAdminAfterTodayChangeOrder(com.jrtechnologies.yum.data.entity.User sourceUser, LocalDate menuDate,
            Long userId) {
        if (userId != 0 && sourceUser.getUserRole().toString().equalsIgnoreCase("admin")
                && (menuDate.isEqual(new LocalDate()) || menuDate.isAfter(new LocalDate()))) {
            return true;
        }
        return false;
    }

    public boolean deadlinePassed(LocalDate date) {
        Settings settings = settingsRep.findOne(1);
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
