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
import com.jrtechnologies.yum.data.enums.UserRole;


@Converter(autoApply = true) 
public class UserRoleConverter implements AttributeConverter <UserRole,String>{
    @Override
    public String convertToDatabaseColumn(UserRole userRole) {
        switch (userRole){
            case HUNGRY:return "hungry";
            case CHEF:return "chef";
            case ADMIN:return "admin";
            default:throw new IllegalArgumentException("Unknown value:" + userRole);
        }
    }

    @Override
    public UserRole convertToEntityAttribute(String dbData) {
        switch (dbData){
            case "hungry": return UserRole.HUNGRY;
            case "chef": return UserRole.CHEF;
            case "admin": return UserRole.ADMIN;
            default:throw new IllegalArgumentException("Unknown value:" + dbData);
        }
    }    

}
