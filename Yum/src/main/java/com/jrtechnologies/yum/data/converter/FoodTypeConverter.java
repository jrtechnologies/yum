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

package com.jrtechnologies.yum.data.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import com.jrtechnologies.yum.data.enums.FoodType;

@Converter(autoApply = true)
public class FoodTypeConverter implements AttributeConverter<FoodType,String>{
    @Override
    public String convertToDatabaseColumn(FoodType foodType) {
        switch (foodType){
            case MAIN:return "Main";
            case SALAD:return "Salad";
            case DRINK:return "Drink";
            default:throw new IllegalArgumentException("Unknown value:" + foodType);
        }
    }

    @Override
    public FoodType convertToEntityAttribute(String dbData) {
        switch (dbData){
            case "Main": return FoodType.MAIN;
            case "Salad": return FoodType.SALAD;
            case "Drink": return FoodType.DRINK;
            default:throw new IllegalArgumentException("Unknown value:" + dbData);
        }
    }    
}
