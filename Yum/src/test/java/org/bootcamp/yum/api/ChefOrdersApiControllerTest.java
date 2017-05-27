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

package org.bootcamp.yum.api;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.bootcamp.test.MockAuthRule;
import org.bootcamp.test.annotation.WithMockAuth;
import org.bootcamp.yum.data.entity.DailyMenu;
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.Food;
import org.bootcamp.yum.data.entity.OrderItem;
import org.bootcamp.yum.data.entity.OrderItemId;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.FoodType;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.service.ChefOrdersService;
import org.bootcamp.yum.service.OrdersService;
import static org.hamcrest.Matchers.hasSize;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.BDDMockito.given;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

/**
 *
 * 
 */
@RunWith(MockitoJUnitRunner.class)
public class ChefOrdersApiControllerTest {
    @Rule
    public final MockAuthRule mockAuth = new MockAuthRule();

    @InjectMocks
    private final ChefOrdersService chefOrdersService = new ChefOrdersService();
    
    private final OrdersService ordersService = new OrdersService();
    
    @Mock
    private DailyMenuRepository dailyMenuRep;
 
    private MockMvc mockMvc;
    
    
    @Before
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(new OrdersApiController(ordersService,chefOrdersService))
                .setControllerAdvice(new ExceptionControllerAdvice())
                .build();
    }
    
  
    @Test
    @WithMockAuth(id="1")
    public void testOrdersDailyDayGet() throws Exception {
        System.out.println("testOrdersDailyDayGet");
        
        String dayStr ="2015-05-02"; 
        LocalDate day = new LocalDate(dayStr);
        
        User user1 = new User(1, null, "Last Name", "First Name", "email", UserRole.HUNGRY, "password", new LocalDate("1745-02-02"), true, null, 0);
        User user2 = new User(1, null, "Second user", "2nd First Name", "email", UserRole.CHEF, "password", new LocalDate("1745-02-02"), true, null, 0);     
        
        List<Food> foods = new ArrayList<>();
        Food food1 = new Food(1, "test food 1", new ArrayList<>(), FoodType.DRINK, "description", new BigDecimal("10"), false, new DateTime());
        Food food2 = new Food(2, "test food 2", new ArrayList<>(), FoodType.MAIN, "description", new BigDecimal("5.65"), false, new DateTime());   
        Food food3 = new Food(3, "test food 3", new ArrayList<>(), FoodType.SALAD, "description", new BigDecimal("5.65"), false, new DateTime()); 
        foods.add(food1);
        foods.add(food2);  
        foods.add(food3);  
        
        List<OrderItem> orderItems = new ArrayList<>();
        OrderItem orderItem1 = new OrderItem(new OrderItemId(1, 22), null, food2, 50);
        OrderItem orderItem2 = new OrderItem(new OrderItemId(2, 22), null, food1, 5500);
        OrderItem orderItem3 = new OrderItem(new OrderItemId(3, 22), null, food3, 5500);
        orderItems.add(orderItem1);
        orderItems.add(orderItem2);
        orderItems.add(orderItem3);
        
        List<DailyOrder> dailyOrders = new ArrayList<>();
        DailyOrder dailyOrder1 = new DailyOrder(22, user1, null, orderItems, true, 0, 0, null, 0);
        DailyOrder dailyOrder2 = new DailyOrder(22, user2, null, orderItems, true, 0, 0, null, 0);
        dailyOrders.add(dailyOrder1);     
        dailyOrders.add(dailyOrder2); 
        
        DailyMenu dailyMenu1 = new DailyMenu(1, foods, dailyOrders, day, null, 1);
        
        
        given(dailyMenuRep.findByDate(day)).willReturn(dailyMenu1);
        
        
        mockMvc.perform(get("/api/orders/daily/"+dayStr)).andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.orderItems", hasSize(3)))
                .andExpect(jsonPath("$.userOrders", hasSize(2)))  ;
        
        verify(dailyMenuRep, times(1)).findByDate(day);
        verifyNoMoreInteractions(dailyMenuRep);
    }
    
    @Test
    @WithMockAuth(id="1")
    public void testOrdersMonthYearGet() throws Exception {
        System.out.println("testOrdersMonthYearGet");
        
        String monthYear = "05-2017";
        
        User user1 = new User(1, null, "Last Name", "First Name", "email", UserRole.HUNGRY, "password", new LocalDate("1745-02-02"), true, null, 0);
                
        List<Food> foods = new ArrayList<>();
        Food food1 = new Food(1, "test food 1", new ArrayList<>(), FoodType.DRINK, "description", new BigDecimal("10"), false, new DateTime());
        Food food2 = new Food(2, "test food 2", new ArrayList<>(), FoodType.MAIN, "description", new BigDecimal("5.65"), false, new DateTime());   
        foods.add(food1);
        foods.add(food2);  
        
        List<OrderItem> orderItems = new ArrayList<>();
        OrderItem orderItem1 = new OrderItem(new OrderItemId(1, 22), null, food2, 5);
        OrderItem orderItem2 = new OrderItem(new OrderItemId(2, 22), null, food1, 5000);
        orderItems.add(orderItem1);
        orderItems.add(orderItem2);
        
        List<DailyOrder> dailyOrders = new ArrayList<>();
        DailyOrder dailyOrder = new DailyOrder(22, user1, null, orderItems, true, 0, 0, null, 0);
        dailyOrders.add(dailyOrder);     
 
        
        DailyMenu dailyMenu1 = new DailyMenu(1, foods, dailyOrders, new LocalDate("2017-05-02"), null, 1);
        DailyMenu dailyMenu2 = new DailyMenu(2, foods, dailyOrders, new LocalDate("2017-05-03"), null, 1);
        
        
        given(dailyMenuRep.findByDate(new LocalDate("2017-05-02"))).willReturn(dailyMenu1);
        given(dailyMenuRep.findByDate(new LocalDate("2017-05-03"))).willReturn(dailyMenu2);
        
        mockMvc.perform(get("/api/orders/monthly/"+monthYear)).andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$", hasSize(2)));
        
        verify(dailyMenuRep, times(1)).findByDate(new LocalDate("2017-05-01"));
        verify(dailyMenuRep, times(1)).findByDate(new LocalDate("2017-05-02"));
        verify(dailyMenuRep, times(1)).findByDate(new LocalDate("2017-05-05"));
        verify(dailyMenuRep, times(1)).findByDate(new LocalDate("2017-05-30"));
    }
}
