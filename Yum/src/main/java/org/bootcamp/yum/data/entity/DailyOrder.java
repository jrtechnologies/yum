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
package org.bootcamp.yum.data.entity;

import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;
import org.bootcamp.yum.api.model.FoodWithQuantity;
import org.bootcamp.yum.data.converter.LocalDateTimeAttributeConverter;
import org.joda.time.DateTime;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;

@Entity
@Table(name = "daily_order")
public class DailyOrder {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long dailyOrderId;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;
//    
    @ManyToOne
    @JoinColumn(name = "dailymenu_id", insertable = false, updatable = false)
    private DailyMenu dailyMenu;
//    
    @OneToMany(mappedBy = "dailyOrder", cascade = CascadeType.ALL, orphanRemoval = true)  //PERSIST
    private List<OrderItem> orderItems;

    @Column(name = "final")
    private boolean finalised;
    @Column(name = "user_id")
    private long userId;
    @Column(name = "dailymenu_id")
    private long dailyMenuId;
    @Column(name = "comment")
    private String comment;
    @Column(name = "last_edit")
    @Convert(converter = LocalDateTimeAttributeConverter.class)
    private DateTime lastEdit;

    @Version
    @Column(name = "version")
    private int version;

    public DailyOrder(long dailyOrderId) {
        this.dailyOrderId = dailyOrderId;
    }

    public DailyOrder() {
    }

    //Use for mockups
    public DailyOrder(long dailyOrderId, User user, DailyMenu dailyMenu, List<OrderItem> orderItems, boolean finalised, long userId, long dailyMenuId, String comment, DateTime lastEdit, int version) {
        this.dailyOrderId = dailyOrderId;
        this.user = user;
        this.dailyMenu = dailyMenu;
        this.orderItems = orderItems;
        this.finalised = finalised;
        this.userId = userId;
        this.dailyMenuId = dailyMenuId;
        this.comment = comment;
        this.lastEdit = lastEdit;
        this.version = version;
    }
 
    @Override
    public int hashCode() {
        int hash = 3;
        hash = 29 * hash + (int) (this.dailyOrderId ^ (this.dailyOrderId >>> 32));
        hash = 29 * hash + Objects.hashCode(this.orderItems);
        hash = 29 * hash + (this.finalised ? 1 : 0);
        hash = 29 * hash + (int) (this.userId ^ (this.userId >>> 32));
        hash = 29 * hash + (int) (this.dailyMenuId ^ (this.dailyMenuId >>> 32));
        hash = 29 * hash + Objects.hashCode(this.comment);
        hash = 29 * hash + this.version;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        System.out.println("hashCode" + hashCode());
        System.out.println("obj.hashCode()" + obj.hashCode());
        return obj.hashCode() == hashCode();
    }

    public long getDailyOrderId() {
        return dailyOrderId;
    }

    public void setDailyOrderId(long dailyOrderId) {
        this.dailyOrderId = dailyOrderId;
    }

    public boolean isFinalised(LocalTime deadlineTime, int deadlineDays) {
        // check if deadline passed, set finalised field accordingly and return it  
        finalised = dailyMenu.getDate().minusDays(deadlineDays).toLocalDateTime(deadlineTime).compareTo(LocalDateTime.now()) < 0;
        return finalised;
    }

    public void setFinalised(boolean finalised) {
        this.finalised = finalised;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getDailyMenuId() {
        return dailyMenuId;
    }

    public void setDailyMenuId(long dailyMenuId) {
        this.dailyMenuId = dailyMenuId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public DailyMenu getDailyMenu() {
        return dailyMenu;
    }

    public void setDailyMenu(DailyMenu dailyMenu) {
        this.dailyMenu = dailyMenu;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public DateTime getLastEdit() {
        return lastEdit;
    }

    public void setLastEdit(DateTime lastEdit) {
        this.lastEdit = lastEdit;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public org.bootcamp.yum.api.model.DailyMenu toDtoDailyMenu() {
        org.bootcamp.yum.api.model.DailyMenu dto = new org.bootcamp.yum.api.model.DailyMenu();
        dto.setId(dailyMenu.getId());
        dto.setDate(dailyMenu.getDate());
        dto.setOrderId(dailyOrderId);
        dto.setLastEdit(new org.bootcamp.yum.api.model.LastEdit(dailyMenu.getLastEdit(), dailyMenu.getVersion()));
        dto.setIsFinal(finalised); 
        dto.setComment(comment);
        for (OrderItem orderItem : orderItems) {
            FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
            foodWithQuantity.setFood(orderItem.getFood().toDtoFood());
            foodWithQuantity.setQuantity(orderItem.getQuantity());
            dto.addFoodsItem(foodWithQuantity);
        }
        for (Food food : dailyMenu.getFoods()) {
            boolean contains = false;
            for (FoodWithQuantity fWQ : dto.getFoods()) {
                if (fWQ.getFood().getId() == food.getId()) {
                    contains = true;
                }
            }
            if (!contains) {
                FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
                foodWithQuantity.setFood(food.toDtoFood());
                foodWithQuantity.setQuantity(0);
                dto.addFoodsItem(foodWithQuantity);
            }
        }
        return dto;
    }

    @Override
    public String toString() {
        return "DailyOrder{" + "dailyOrderId=" + dailyOrderId + ", user=" + user + ", dailyMenu=" + dailyMenu + ", orderItems=" + orderItems + ", finalised=" + finalised + ", userId=" + userId + ", dailyMenuId=" + dailyMenuId + ", comment=" + comment + ", lastEdit=" + lastEdit + ", version=" + version + '}';
    }

 

}
