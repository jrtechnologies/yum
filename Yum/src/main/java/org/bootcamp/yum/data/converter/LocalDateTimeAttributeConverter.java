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

package org.bootcamp.yum.data.converter;

import java.sql.Timestamp;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;

@Converter(autoApply = true)
public class LocalDateTimeAttributeConverter implements AttributeConverter<DateTime, Timestamp>{
    

    @Override
    public Timestamp convertToDatabaseColumn(DateTime jodDateTime) {
        return (jodDateTime == null ? null : new Timestamp(jodDateTime.toDateTime().getMillis()));
    }
 
    @Override
    public DateTime convertToEntityAttribute(Timestamp sqlTimestamp) {      
        return (sqlTimestamp == null ? null : new DateTime(sqlTimestamp, DateTimeZone.UTC));
    }    

}
