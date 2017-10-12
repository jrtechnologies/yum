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

package com.jrtechnologies.yum.data.entity;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

/**
 *
 * 
 */
@Entity   
@Table(name="order_item")
public class OrderItem  { 
    
    @EmbeddedId 
    private OrderItemId id;

    @ManyToOne
    @JoinColumn(name = "daily_order_id", insertable=false, updatable=false)
    private DailyOrder dailyOrder;

    @ManyToOne
    @JoinColumn(name = "food_id", insertable=false, updatable=false)
    private Food food;
        
    @Column(name="quantity")
    private int quantity;

    public OrderItem(OrderItemId id) {
        this.id = id;
    }

    public OrderItem() {
    }

    //Use for mockups
    public OrderItem(OrderItemId id, DailyOrder dailyOrder, Food food, int quantity) {
        this.id = id;
        this.dailyOrder = dailyOrder;
        this.food = food;
        this.quantity = quantity;
    }
    
    @PrePersist
    private void prePersiste() {
       if (getId() == null) {
           OrderItemId pk = new OrderItemId();
           pk.setDailyOrderId(dailyOrder.getDailyOrderId());
           pk.setFoodId(food.getId());
           setId(pk);
       }
    }
    
    public OrderItemId getId() {
        return id;
    }

    public void setId(OrderItemId id) {
        this.id = id;
    }
 

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public DailyOrder getDailyOrder() {
        return dailyOrder;
    }

    public void setDailyOrder(DailyOrder dailyOrder) {
        this.dailyOrder = dailyOrder;
    }

    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 83 * hash + Objects.hashCode(this.id);
        //hash = 83 * hash + Objects.hashCode(this.dailyOrder);
        //hash = 83 * hash + Objects.hashCode(this.food);
        hash = 83 * hash + this.quantity;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final OrderItem other = (OrderItem) obj;
        return true;
    }

    
    
    @Override
    public String toString() {
        return "OrderItem{" + "id=" + id + ", dailyOrder id=" +  ", food=" + ", quantity=" + quantity + '}';
    }

    
 

   
   
}


