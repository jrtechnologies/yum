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
 
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity; 
import javax.persistence.Id;
import javax.persistence.Table;
import org.joda.time.LocalDate;
import org.bootcamp.yum.data.converter.LocalDateAttributeConverter;

@Entity
@Table(name="holidays")
public class Holiday {
    
    @EmbeddedId 
    private HolidayId id;

    public Holiday() {
    }
 
    
    public Holiday(HolidayId id) {
        this.id = id;
    }  
    

    public LocalDate getHolidate() {
        return id.getHoliday();
    }

    public void setHolidate(LocalDate dt) {
        this.id.setHoliday(dt);
    }


    
    @Override
    public String toString() {
        return "Holiday{" + "id=" + id + '}';
    }
    
}
