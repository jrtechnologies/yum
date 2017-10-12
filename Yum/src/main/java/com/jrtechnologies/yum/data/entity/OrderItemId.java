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

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 *
 * 
 * http://stackoverflow.com/questions/13032948/how-to-create-and-handle-composite-primary-key-in-jpa
 */
    
@Embeddable
public class OrderItemId  implements Serializable {
    
    @Column(name="food_id") 
    long foodId; 
    @Column(name="daily_order_id")
    long dailyOrderId;

    public OrderItemId(long foodId, long dailyOrderId) {
        this.foodId = foodId;
        this.dailyOrderId = dailyOrderId;
    }

    public OrderItemId() {
    }
    
    public long getFoodId() {
        return foodId;
    }

    public void setFoodId(long foodId) {
        this.foodId = foodId;
    }

    public long getDailyOrderId() {
        return dailyOrderId;
    }

    public void setDailyOrderId(long dailyOrderId) {
        this.dailyOrderId = dailyOrderId;
    }

    @Override
    public String toString() {
        return "OrderItemId{" + "foodId=" + foodId + ", dailyOrderId=" + dailyOrderId + '}';
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 89 * hash + (int) (this.foodId ^ (this.foodId >>> 32));
        hash = 89 * hash + (int) (this.dailyOrderId ^ (this.dailyOrderId >>> 32));
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
        final OrderItemId other = (OrderItemId) obj;
        return true;
    }
    
    
}
