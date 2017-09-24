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
package org.bootcamp.yum.data.repository;
 
import java.util.ArrayList;
import javax.persistence.Convert;
import javax.transaction.Transactional;
import org.bootcamp.yum.data.converter.LocalDateAttributeConverter;
import org.bootcamp.yum.data.entity.Holiday;
import org.joda.time.LocalDate;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HolidaysRepository extends CrudRepository<Holiday, LocalDate>{
    
    //Holiday findById(LocalDate dt);
    
    @Query(value="select h.* from holidays h where year(h.holidate)=:year ", nativeQuery = true)    
    ArrayList<java.sql.Date> findByYear(@Param("year") int year);
    
    @Transactional
    @Query(value="delete from holidays where year(holidate)=:year ", nativeQuery = true)  
    @Modifying
    void deleteByYear(@Param("year") int year);
}

 
