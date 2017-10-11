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
import javax.persistence.Convert;
import javax.persistence.Embeddable;
import com.jrtechnologies.yum.data.converter.LocalDateAttributeConverter;
import org.joda.time.LocalDate;

@Embeddable 
public class HolidayId  implements Serializable {
    
    @Column(name="holidate") 
    @Convert(converter = LocalDateAttributeConverter.class)
    private LocalDate holiday;
    
    
    public LocalDate getHoliday() {
        return holiday;
    }

    public void setHoliday(LocalDate holiday) {
        this.holiday = holiday;
    }
    
    @Override
    public String toString() {
        return "Holiday{" + "holiday=" + holiday + '}';
    }
    
}
