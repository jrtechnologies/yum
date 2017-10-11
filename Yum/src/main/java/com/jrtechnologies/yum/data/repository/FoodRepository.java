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
import com.jrtechnologies.yum.data.entity.Food;
import com.jrtechnologies.yum.data.enums.FoodType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author user
 */

@Repository

//public interface FoodRepository extends CrudRepository<Food, Long> {
public interface FoodRepository extends PagingAndSortingRepository<Food, Long> {
    
    Food findById(long id);    
    
    List<Food> findByNameAndArchived(String name, boolean archived);
    Page<Food> findByFoodType(Pageable pageable, FoodType foodType);
    
    Page<Food> findByFoodTypeAndArchived(Pageable pageable, FoodType foodType, boolean archived);
    Page<Food> findByArchived(Pageable pageable, boolean archived);
     
     
    //nativeQuery usage 
    //https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#_native_queries
    
    @Query(value="SELECT sum(ifnull(b.quantity,0)) FROM\n" +
    "daily_menu d \n" +
    "left join daily_order c on c.dailymenu_id=d.id\n" +
    "left join order_item b on b.daily_order_id=c.id\n" +
    "left join food a on a.food_id=b.food_id\n" +
    "where d.date between :dateFrom and :dateTo and a.food_id=:food_id", nativeQuery = true)
    Integer findFoodOrderedQuantitiesByDates(@Param("dateFrom") String dateFrom,@Param("dateTo") String dateTo,@Param("food_id") Long food_id);
    
    
    @Query(value="SELECT sum(ifnull(b.quantity,0)) FROM order_item b where 1=1 and b.food_id=:food_id", nativeQuery = true)
    Integer findFoodOrderedQuantities (@Param("food_id") Long food_id);
            
    @Query(value="SELECT count(d.*) FROM  food d ", nativeQuery = true)
    Integer countAllFood();
    
}

