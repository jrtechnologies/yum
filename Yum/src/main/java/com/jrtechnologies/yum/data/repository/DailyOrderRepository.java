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

import com.jrtechnologies.yum.data.entity.DailyOrder;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author user
 */
@Repository
public interface DailyOrderRepository extends CrudRepository<DailyOrder, Long>{
    DailyOrder findByUserIdAndDailyMenuId(long userId, long dailyMenuId);
    DailyOrder findByDailyOrderId(long id);
    DailyOrder findByUserId(long id);
    //This Query return (True/False) if user have final orders(in Past).
    @Query(value="SELECT CASE WHEN COUNT(DISTINCT final) = 1 THEN 'true' ELSE 'false' END AS bool\n" +
                    "FROM daily_order WHERE user_id =:user_id AND final = 1", nativeQuery = true)
    Boolean ifHasFinalOrders (@Param("user_id") Long id);
    //This Query return (True/False) if user haven't final orders(in Future).
    @Query(value="SELECT CASE WHEN COUNT(DISTINCT final) = 1 THEN 'true' ELSE 'false' END AS bool\n" +
                    "FROM daily_order WHERE user_id =:user_id AND final = 0", nativeQuery = true)
    Boolean ifHasNotFinalOrders (@Param("user_id") Long id);
}    