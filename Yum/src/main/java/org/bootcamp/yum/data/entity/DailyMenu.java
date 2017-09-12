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
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PostPersist;
import javax.persistence.Table;
import javax.persistence.Version;
import org.bootcamp.yum.api.model.FoodWithQuantity;
import org.bootcamp.yum.data.converter.LocalDateAttributeConverter;
import org.bootcamp.yum.data.converter.LocalDateTimeAttributeConverter;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;
 

@Entity
@Table(name="daily_menu")
public class DailyMenu {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    @ManyToMany
    @JoinTable
    (
        name="daily_menu_food",
        joinColumns={ @JoinColumn(name="daily_menu_id", referencedColumnName="id")},
        inverseJoinColumns={ @JoinColumn(name="food_id", referencedColumnName="food_id", unique=true)}
    )
    private List<Food> foods;
    
    //@OneToMany(mappedBy = "dailyMenu", fetch = FetchType.EAGER)
    @OneToMany(mappedBy = "dailyMenu")
    private List<DailyOrder> dailyOrders;
    
    @Column(name="date") 
    @Convert(converter = LocalDateAttributeConverter.class)
    private LocalDate date;
    
    @Column(name="final")
    private boolean finalised;
    
    @Column(name="last_edit", updatable=false, insertable=false)
    @Convert(converter = LocalDateTimeAttributeConverter.class)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private DateTime lastEdit;
    
    @Version
    @Column(name="version")
    private int version;

    
    @PostPersist
    private void getLastEditAfterPost(){
        this.setLastEdit(this.getLastEdit());
        System.out.println("@PostPersist:"+this.lastEdit); 
        
    }
    
    public DailyMenu(long id) {
        this.id = id;
    }

    public DailyMenu() {
    }

    public DailyMenu(long id, List<Food> foods, List<DailyOrder> dailyOrders, LocalDate date, DateTime lastEdit, int version) {
        this.id = id;
        this.foods = foods;
        this.dailyOrders = dailyOrders;
        this.date = date;
        this.lastEdit = lastEdit;
        this.version = version;
    }

    
    
    public long getId(){
        return id;
    }

    public void setId(long id){
        this.id = id;
    }

    public LocalDate getDate(){
        return date;
    }

    public void setDate(LocalDate date){
        this.date = date;
    }

    public List<Food> getFoods() {
        return foods;
    }

    public void setFoods(List<Food> foods) {
        this.foods = foods;
    }

    public List<DailyOrder> getDailyOrders() {
        return dailyOrders;
    }

    public void setDailyOrders(List<DailyOrder> dailyOrders) {
        this.dailyOrders = dailyOrders;
    }

 
    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public boolean hasOrders(){        
        return (this.dailyOrders!=null) && (this.dailyOrders.size()>0) ;  
    }
    
    public DateTime getLastEdit()
    {
        return lastEdit;
    }

    public void setLastEdit(DateTime lastEdit)
    {
        this.lastEdit = lastEdit;

    }
    
    public boolean isFinalised(LocalTime deadlineTime) {                
        if (!finalised){
            // Gets the deadline
            LocalDateTime deadline = this.date.minusDays(1).toLocalDateTime(deadlineTime);
            // if deadline passed sets finalized to true
            if (deadline.compareTo(LocalDateTime.now()) < 0){               
                finalised=true;
            }   
        }
        return finalised;
    }
    
    @Override
    public String toString() {
        return "\nDailyMenu{" + "\n\tid=" + id + "\n\t , date=" + date + '}';
    }
    
    public org.bootcamp.yum.api.model.DailyMenu toDtoDailyMenu() {   
        org.bootcamp.yum.api.model.DailyMenu dto = new org.bootcamp.yum.api.model.DailyMenu();
        dto.setId(id);
        dto.setDate(date);
        dto.setOrderId(0L);
        dto.setLastEdit(new org.bootcamp.yum.api.model.LastEdit(lastEdit, version));
        dto.setIsFinal(finalised);   
        for ( Food food: foods){
            FoodWithQuantity foodWithQuantity = new FoodWithQuantity();
            foodWithQuantity.setFood(food.toDtoFood());
            foodWithQuantity.setQuantity(0);
            dto.addFoodsItem(foodWithQuantity);
        }
        return dto;
    }
}
