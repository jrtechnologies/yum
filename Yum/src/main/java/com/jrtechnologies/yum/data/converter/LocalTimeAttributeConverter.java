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

import java.sql.Time;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import org.joda.time.LocalTime;

@Converter(autoApply = true)
public class LocalTimeAttributeConverter implements AttributeConverter<LocalTime, Time>{
    

    @Override
    public Time convertToDatabaseColumn(LocalTime jodaLocalTime) { 
        return new Time(jodaLocalTime.toDateTimeToday().getMillis());
    }
 
    @Override
    public LocalTime convertToEntityAttribute(Time sqlTime) {      
        return (sqlTime == null ? null : new LocalTime(sqlTime));
    }
 

}
