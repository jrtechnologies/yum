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
 * 
 * POST BOOTCAMP REV 1.0
 */

package org.bootcamp.yum.data.entity;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;
import org.bootcamp.yum.data.converter.BooleanConverter;
import org.bootcamp.yum.data.converter.FoodTypeConverter;
import org.bootcamp.yum.data.converter.LocalDateTimeAttributeConverter;
import org.bootcamp.yum.data.enums.FoodType;
import org.hibernate.annotations.Formula;
import org.joda.time.DateTime; 

@Entity
@Table(name="food")
public class Food {
    

    @Id
    @Column(name="food_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    @Column(name="food_name")
    private String name;


    
  
    @OneToMany(mappedBy = "food")
    private List<OrderItem> orderItems;

    @Column(name="food_type")
    @Convert(converter = FoodTypeConverter.class)
    private FoodType foodType;
    
    @Column(name="description")
    private String description;
    
    @Column(name="price")
    private BigDecimal price;    
    
    @Column(name="archived")
    @Convert(converter = BooleanConverter.class)
    private boolean archived;
    
    @Column(name="standard")
    @Convert(converter = BooleanConverter.class)
    private boolean standard;
    
    //@Version
    @Column(name="last_edit", updatable=false, insertable=false)
    @Convert(converter = LocalDateTimeAttributeConverter.class)
    private DateTime lastEdit;

 
    @Version
    @Column(name="version")
    private int version;
    
    //if (haveTime) { refactor as of http://www.jroller.com/eyallupu/entry/hibernate_derived_properties_performance_and }
    @Formula("(select ifNull(sum(b.quantity),0) FROM order_item b where 1=1 and b.food_id = food_id)")
    private int orderedQuantity;
 
 // This constructor is needed for mock data, when the database is not here to autogenerate the id
    public Food(long id) {
        this.id = id;
    }

 
    public Food(){}
 
    //Use for mockups
    public Food(long id, String name, List<OrderItem> orderItems, FoodType foodType, String description, BigDecimal price, boolean archived, DateTime lastEdit) {
        this.id = id;
        this.name = name;
        this.orderItems = orderItems;
        this.foodType = foodType;
        this.description = description;
        this.price = price;
        this.archived = archived;
        this.lastEdit = lastEdit;
    }
       
    
    public void setId(long id) {
        this.id = id;
    }
     
 
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }
    
    
    public long getId() {
        return id;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }
     
    public FoodType getFoodType() {
        return foodType;
    }
 
    public void setFoodType(FoodType foodType) {
        this.foodType = foodType;
    }

    public DateTime getLastEdit()
    {
        return lastEdit;
    }

    public void setLastEdit(DateTime lastEdit)
    {
        this.lastEdit = lastEdit;
    }
 
    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }
 
    public boolean isEditable(){
        //return this.getOrderItems().size()==0;
        if(this.isArchived() || this.getOrderItems().size()>0)
               return false;
       return true; 
    }  

    public int getOrderedQuantity() {
        return orderedQuantity;
    }

    public void setOrderedQuantity(int orderedQuantity) {
        this.orderedQuantity = orderedQuantity;
    }

    public boolean isStandard() {
        return standard;
    }

    public void setStandard(boolean standard) {
        this.standard = standard;
    }

    // The equals method is useful for the assertEquals
    @Override
    public boolean equals(Object obj) {
        return obj.hashCode() == hashCode();
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 61 * hash + (int) (this.id ^ (this.id >>> 32));
        hash = 61 * hash + Objects.hashCode(this.name);
        hash = 61 * hash + Objects.hashCode(this.orderItems);
        hash = 61 * hash + Objects.hashCode(this.foodType);
        hash = 61 * hash + Objects.hashCode(this.description);
        hash = 61 * hash + Objects.hashCode(this.price);
        hash = 61 * hash + (this.archived ? 1 : 0);
        hash = 61 * hash + (this.standard ? 1 : 0);
        hash = 61 * hash + Objects.hashCode(this.lastEdit);
        hash = 61 * hash + this.version;
        hash = 61 * hash + this.orderedQuantity;
        return hash;
    }
 
 
    @Override
    public String toString() {
        return "Food{" + "id=" + id + ", name=" + name + ", orderItems=" + orderItems + ", foodType=" + foodType + ", description=" + description + ", price=" + price + ", archived=" + archived + ", lastEdit=" + lastEdit + ", ordered qty:"+ this.getOrderedQuantity()+ '}';
    }
    
    public org.bootcamp.yum.api.model.Food toDtoFood() {
        
        org.bootcamp.yum.api.model.Food dto = new org.bootcamp.yum.api.model.Food();

        dto.setArchived(isArchived());
        dto.setDescription(getDescription());
        dto.setFoodName(getName());
        dto.setFoodType(getFoodType().toString());
        dto.setId(getId());
        dto.setPrice(getPrice().doubleValue());
        dto.setStandard(isStandard());
        
        return dto;
    }
   
}
