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
package com.jrtechnologies.yum.data.repository;


import java.util.List;
import com.jrtechnologies.yum.data.entity.DailyMenu;
import org.joda.time.LocalDate;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author user
 */
@Repository
public interface DailyMenuRepository extends CrudRepository<DailyMenu, Long>{
    DailyMenu findById(long id);
    DailyMenu findByDate(LocalDate date);
    
    // Search by food id
    List<DailyMenu> findByFoods_Id(long id);
    
    // Search by ids
    @Query( "select d from DailyMenu d where id in :ids" )
    List<DailyMenu> findByIds(@Param("ids") List<Long> idList);
    

    
    //@Query("FROM DailyMenu AS dm WHERE dm.id.foods = ?1")    //This is using a named query method
    //public List<DailyMenu> findAllWithFoodId(long id);
    
}
