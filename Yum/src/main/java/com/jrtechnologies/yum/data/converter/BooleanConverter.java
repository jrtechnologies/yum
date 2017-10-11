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

/**
 *
 * 
 */
 
@Converter(autoApply = true)
public class BooleanConverter implements AttributeConverter<Boolean, Integer>{
    @Override
    public Integer convertToDatabaseColumn(Boolean bool) {
        if(bool) return 1;
        return 0; 
        }

    @Override
    public Boolean convertToEntityAttribute(Integer dbData) {
        
        if(dbData==null) return false;
        
        switch (dbData){
            case 0: return false;
            case 1: return true;
        }
        return false;
    }    

}
