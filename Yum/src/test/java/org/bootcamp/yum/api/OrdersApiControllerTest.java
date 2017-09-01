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
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.OrderItemId;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.FoodType;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.bootcamp.yum.service.ChefOrdersService;
import org.bootcamp.yum.service.OrdersService;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.LocalTime;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

/**
 *
 * @author user
 */
@RunWith(MockitoJUnitRunner.class)
public class OrdersApiControllerTest {

    @Rule
    public final MockAuthRule mockAuth = new MockAuthRule();

    @InjectMocks
    private final OrdersService ordersService = new OrdersService();
    
    @Mock
    private FoodRepository mockFoodRepository;
    @Mock
    private UserRepository mockUserRepository;
    @Mock
    private DailyOrderRepository mockDailyOrderRepository;
    @Mock
    private SettingsRepository mockSettingsRepository;
    @Mock
    private DailyMenuRepository mockDailyMenuRepository;

    private MockMvc mockMvc;

    private static List<org.bootcamp.yum.data.entity.Food> mockFoodList;
    private static List<org.bootcamp.yum.data.entity.DailyOrder> mockDailyOrderList;
    private static org.bootcamp.yum.data.entity.DailyOrder mockDailyOrder;
    private static Settings mockSettings;
    private static List<org.bootcamp.yum.data.entity.DailyMenu> mockDailyMenuList; 
    private static User mockUser;

    public OrdersApiControllerTest() {
    }

    @BeforeClass
    public static void initMock() {
        //Mock hungry user
        mockUser = new User(1);
        mockUser.setApproved(true);
        mockUser.setEmail("hungry@yum.com");
        mockUser.setDailyOrders(new ArrayList<DailyOrder>());
        mockUser.setFirstName("firstName");
        mockUser.setLastName("lastName");
        mockUser.setPassword("1234");
        mockUser.setRegistrationDate(new LocalDate(2017, 4, 22));
        mockUser.setUserRole(UserRole.HUNGRY);
        
        // Mock List of Foods
        mockFoodList = new ArrayList<>();
        // Adding the first mock Food instance
        org.bootcamp.yum.data.entity.Food mockFood = new org.bootcamp.yum.data.entity.Food(10);
        mockFood.setArchived(false);
        mockFood.setDescription("test Pastitsio");
        mockFood.setFoodType(FoodType.MAIN);
        mockFood.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockFood.setName("Pastitsio");
        mockFood.setPrice(new BigDecimal("5.65"));
        mockFoodList.add(mockFood);
        // Adding the second mock Food instance
        org.bootcamp.yum.data.entity.Food mockFood2 = new org.bootcamp.yum.data.entity.Food(11);
        mockFood2.setArchived(false);
        mockFood2.setDescription("test Cretan");
        mockFood2.setFoodType(FoodType.SALAD);
        mockFood2.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockFood2.setName("Cretan");
        mockFood2.setPrice(new BigDecimal("2.65"));
        mockFoodList.add(mockFood2);

        // Mock List of DailyMenus
        mockDailyMenuList = new ArrayList<>();
        // Adding the first mock DailyMenu instance
        org.bootcamp.yum.data.entity.DailyMenu mockDailyMenu = new org.bootcamp.yum.data.entity.DailyMenu(1);
        mockDailyMenu.setDate(LocalDate.now().plusDays(7));
        mockDailyMenu.setFoods(mockFoodList);
        mockDailyMenu.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockDailyMenu.setVersion(1);
        mockDailyMenuList.add(mockDailyMenu);
        // Adding the first mock DailyMenu instance
        org.bootcamp.yum.data.entity.DailyMenu mockDailyMenu2 = new org.bootcamp.yum.data.entity.DailyMenu(2);
        mockDailyMenu2.setDate(new LocalDate(2017, 5, 8));
        mockDailyMenu2.setFoods(mockFoodList);
        mockDailyMenu2.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
         mockDailyMenu.setVersion(1);
        mockDailyMenuList.add(mockDailyMenu);

        // Mock List of OrderItems
        List<org.bootcamp.yum.data.entity.OrderItem> mockOrderItemList1 = new ArrayList<>();
        // Adding the first mock DailyOrder instance
        org.bootcamp.yum.data.entity.OrderItem mockOrderItem = new org.bootcamp.yum.data.entity.OrderItem(new OrderItemId(10, 1));
        mockOrderItem.setFood(mockFood);
        mockOrderItem.setQuantity(4);
        mockOrderItemList1.add(mockOrderItem);
        // Adding the second mock DailyOrder instance
        org.bootcamp.yum.data.entity.OrderItem mockOrderItem2 = new org.bootcamp.yum.data.entity.OrderItem(new OrderItemId(11, 1));
        mockOrderItem2.setFood(mockFood);
        mockOrderItem2.setQuantity(4);
        mockOrderItemList1.add(mockOrderItem2);
        
        
        // Mock List of OrderItems
        List<org.bootcamp.yum.data.entity.OrderItem> mockOrderItemList2 = new ArrayList<>();
        // Adding the first mock DailyOrder instance
        org.bootcamp.yum.data.entity.OrderItem mockOrderItem4 = new org.bootcamp.yum.data.entity.OrderItem(new OrderItemId(10, 1));
        mockOrderItem4.setFood(mockFood);
        mockOrderItem4.setQuantity(4);
        mockOrderItemList2.add(mockOrderItem4);
        // Adding the second mock DailyOrder instance
        org.bootcamp.yum.data.entity.OrderItem mockOrderItem5 = new org.bootcamp.yum.data.entity.OrderItem(new OrderItemId(11, 1));
        mockOrderItem5.setFood(mockFood);
        mockOrderItem5.setQuantity(4);
        mockOrderItemList2.add(mockOrderItem5);
        
         // Mock List of OrderItems
        List<org.bootcamp.yum.data.entity.OrderItem> mockOrderItemList4 = new ArrayList<>();
        // Adding the first mock DailyOrder instance
        org.bootcamp.yum.data.entity.OrderItem mockOrderItem6 = new org.bootcamp.yum.data.entity.OrderItem(new OrderItemId(10, 4));
        mockOrderItem6.setFood(mockFood);
        mockOrderItem6.setQuantity(4);
        mockOrderItemList4.add(mockOrderItem6);
        // Adding the second mock DailyOrder instance
        org.bootcamp.yum.data.entity.OrderItem mockOrderItem7 = new org.bootcamp.yum.data.entity.OrderItem(new OrderItemId(11, 4));
        mockOrderItem7.setFood(mockFood2);
        mockOrderItem7.setQuantity(4);
        mockOrderItemList4.add(mockOrderItem7);
       
        // Mock List of DailyOrders
        mockDailyOrderList = new ArrayList<>();
        // Adding the first mock DailyOrder instance
        org.bootcamp.yum.data.entity.DailyOrder mockDailyOrder1 = new org.bootcamp.yum.data.entity.DailyOrder(1);
        mockDailyOrder1.setDailyMenu(mockDailyMenu);
        mockDailyOrder1.setDailyMenuId(1);
        mockDailyOrder1.setFinalised(false);
        mockDailyOrder1.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockDailyOrder1.setVersion(1);
        mockDailyOrder1.setOrderItems(mockOrderItemList1);
        //mockDailyOrder.setUser(user);
        mockDailyOrder1.setUserId(1);
        mockDailyOrderList.add(mockDailyOrder1);

        // Adding the second mock DailyOrder instance
        org.bootcamp.yum.data.entity.DailyOrder mockDailyOrder2 = new org.bootcamp.yum.data.entity.DailyOrder(2);
        mockDailyOrder2.setDailyMenu(mockDailyMenu);
        mockDailyOrder2.setDailyMenuId(1);
        mockDailyOrder2.setFinalised(false);
        mockDailyOrder2.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockDailyOrder2.setOrderItems(mockOrderItemList2);
        //mockDailyOrder2.setUser(user);
        mockDailyOrder2.setUserId(1);
        mockDailyOrderList.add(mockDailyOrder2);
        
         // Adding the trird mock DailyOrder instance
        org.bootcamp.yum.data.entity.DailyOrder mockDailyOrder3 = new org.bootcamp.yum.data.entity.DailyOrder(3);
        mockDailyOrder3.setDailyMenu(mockDailyMenu);
        mockDailyOrder3.setDailyMenuId(3);
        mockDailyOrder3.setFinalised(true);
        mockDailyOrder3.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockDailyOrder3.setOrderItems(mockOrderItemList1);
        mockDailyOrder3.setUserId(1);
        mockDailyOrderList.add(mockDailyOrder3);
        
         // Adding the forth mock DailyOrder instance
        org.bootcamp.yum.data.entity.DailyOrder mockDailyOrder4 = new org.bootcamp.yum.data.entity.DailyOrder(4);
        mockDailyOrder4.setDailyMenu(mockDailyMenu);
        mockDailyOrder4.setDailyMenuId(2);
        mockDailyOrder4.setFinalised(false);
        mockDailyOrder4.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockDailyOrder4.setOrderItems(mockOrderItemList4);
        mockDailyOrder4.setUserId(1);
        mockDailyOrderList.add(mockDailyOrder4);
        
        // Mock List of OrderItems
        List<org.bootcamp.yum.data.entity.OrderItem> mockOrderItemList = new ArrayList<>();
        // Adding the first mock DailyOrder instance
        org.bootcamp.yum.data.entity.OrderItem mockOrderItem3 = new org.bootcamp.yum.data.entity.OrderItem(new OrderItemId(10, 1));
        mockOrderItem3.setFood(mockFood);
        mockOrderItem3.setQuantity(6);
        mockOrderItemList.add(mockOrderItem3);        
        
         // Adding the first mock DailyOrder instance
        mockDailyOrder = new org.bootcamp.yum.data.entity.DailyOrder(1);
        mockDailyOrder.setDailyMenu(mockDailyMenu);
        mockDailyOrder.setDailyMenuId(1);
        mockDailyOrder.setFinalised(false);
        mockDailyOrder.setLastEdit(new DateTime(2017, 4, 22, 9, 0));
        mockDailyOrder.setOrderItems(mockOrderItemList);
        //mockDailyOrder.setUser(user);
        mockDailyOrder.setUserId(1);
        
        mockSettings = new Settings(1);
        
        mockSettings.setDeadline(new LocalTime(11,0));

    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(new OrdersApiController(ordersService, new ChefOrdersService())).setControllerAdvice(new ExceptionControllerAdvice()).build();
    }

    @After
    public void tearDown() {
    }


    /**
     * Test of ordersIdPut method, of class OrdersApiController.
     */


    @Test
    @WithMockAuth(id = "1")
    public void testOrdersIdPut200() throws Exception {
  
        // telling Mockito to use this mock every time the findByDailyOrderId method is called on the DailyOrderRepository
        given(mockDailyOrderRepository.findByDailyOrderId(1)).willReturn(mockDailyOrderList.get(0));

        // telling mockito there is one user in the database, with id 1
        // this step is specially needed if you use the User of the token in your controller.
        // in this case, use the annotation @WithMockAuth(id="1")
        given(mockUserRepository.findById(1L)).willReturn(mockUser);

        given(mockFoodRepository.findById(10L)).willReturn(mockFoodList.get(0));
        
        given(mockFoodRepository.findById(11L)).willReturn(mockFoodList.get(1));
        given( mockSettingsRepository.findOne(1)).willReturn(mockSettings);
       
        
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/orders/{id}", 1l)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"dailyMenuId\": 1,\n"
                        + "  \"dailyMenuVersion\": 1,\n"
                        + "  \"dailyMenuDate\": \"2017-05-22\",\n"
                        + "  \"orderItems\": [\n"
                        + "    {\n"
                        + "      \"quantity\": 6,\n"
                        + "      \"foodId\": 10\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"emailRequest\": true,\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-22T06:00:00.000Z\",\n"
                        + "    \"version\": 1\n"
                        + "  }\n"
                        + "}"))
                
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));

        // we verify that we called findAll method once only on the repo.
        verify(mockDailyOrderRepository, times(1)).findByDailyOrderId(1);
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockDailyOrderRepository);
        
    }
   

    @Test
    @WithMockAuth(id = "1")
    public void testOrdersIdPut412() throws Exception {

        // telling Mockito to use this mock every time the findByDailyOrderId method is called on the DailyOrderRepository
        given(mockDailyOrderRepository.findByDailyOrderId(1)).willReturn(mockDailyOrderList.get(2));

        // telling mockito there is one user in the database, with id 1
        // this step is specially needed if you use the User of the token in your controller.
        // in this case, use the annotation @WithMockAuth(id="1")
        given(mockUserRepository.findById(1L)).willReturn(mockUser);

        given(mockFoodRepository.findById(10L)).willReturn(mockFoodList.get(0));
        
        given(mockFoodRepository.findById(11L)).willReturn(mockFoodList.get(1));
        given(mockSettingsRepository.findOne(1)).willReturn(mockSettings);
       
        
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/orders/{id}", 1l)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"dailyMenuId\": 1,\n"
                        + "  \"dailyMenuVersion\": 1,\n"
                        + "  \"dailyMenuDate\": \"2017-05-22\",\n"
                        + "  \"orderItems\": [\n"
                        + "    {\n"
                        + "      \"quantity\": 5,\n"
                        + "      \"foodId\": 10\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"emailRequest\": true,\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-22T06:00:00.000Z\",\n"
                        + "    \"version\": 0\n"
                        + "  }\n"
                        + "}"))
                .andExpect(status().isPreconditionFailed());

        // we verify that we called findAll method once only on the repo.
        verify(mockDailyOrderRepository, times(1)).findByDailyOrderId(1);
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockDailyOrderRepository);
       
        

    }


    @Test
    @WithMockAuth(id = "1")
    public void testOrdersIdPut400() throws Exception {

        // telling Mockito to use this mock every time the findByDailyOrderId method is called on the DailyOrderRepository
        given(mockDailyOrderRepository.findByDailyOrderId(1)).willReturn(mockDailyOrderList.get(0));
        
        given(mockDailyMenuRepository.findById(1)).willReturn(mockDailyMenuList.get(0));

        // telling mockito there is one user in the database, with id 1
        // this step is specially needed if you use the User of the token in your controller.
        // in this case, use the annotation @WithMockAuth(id="1")
        given(mockUserRepository.findById(1L)).willReturn(null);

        given(mockFoodRepository.findById(10L)).willReturn(mockFoodList.get(0));
        
        given(mockFoodRepository.findById(11L)).willReturn(mockFoodList.get(1));
        given(mockSettingsRepository.findOne(1)).willReturn(mockSettings);
       
        
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/orders/{id}", 1l)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"dailyMenuId\": 1,\n"
                        + "  \"dailyMenuVersion\": 1,\n"
                        + "  \"dailyMenuDate\": \"2017-05-22\",\n"
                        + "  \"orderItems\": [\n"
                        + "    {\n"
                        + "      \"quantity\": 0,\n"
                        + "      \"foodId\": 10\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"emailRequest\": true,\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-22T06:00:00.000Z\"\n"
                        + "  }\n"
                        + "}"))
                .andExpect(status().isBadRequest());
             
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockDailyOrderRepository);
    }
    

    @Test
    @WithMockAuth(id = "1")
    public void testOrdersIdPut410() throws Exception {

        // telling Mockito to use this mock every time the findByDailyOrderId method is called on the DailyOrderRepository
        given(mockDailyOrderRepository.findByDailyOrderId(4)).willReturn(null);

        given(mockDailyMenuRepository.findById(1)).willReturn(mockDailyMenuList.get(0));
        // telling mockito there is one user in the database, with id 1
        // this step is specially needed if you use the User of the token in your controller.
        // in this case, use the annotation @WithMockAuth(id="1")
        given(mockUserRepository.findById(1L)).willReturn(mockUser);

        given(mockFoodRepository.findById(10L)).willReturn(mockFoodList.get(0));
        
        given(mockFoodRepository.findById(11L)).willReturn(mockFoodList.get(1));
        given(mockSettingsRepository.findOne(1)).willReturn(mockSettings);
       
        
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/orders/{id}", 4l)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"dailyMenuId\": 1,\n"
                        + "  \"dailyMenuVersion\": 1,\n"
                        + "  \"dailyMenuDate\": \"2017-05-22\",\n"
                        + "  \"orderItems\": [\n"
                        + "    {\n"
                        + "      \"quantity\": 0,\n"
                        + "      \"foodId\": 10\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"emailRequest\": true,\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-22T06:00:00.000Z\"\n"
                        + "  }\n"
                        + "}"))
                .andExpect(status().isGone());

    }
    

    @Test
    @WithMockAuth(id = "1")
    public void testOrdersIdPut400Quant0() throws Exception {

        // telling Mockito to use this mock every time the findByDailyOrderId method is called on the DailyOrderRepository
        given(mockDailyOrderRepository.findByDailyOrderId(2)).willReturn(mockDailyOrderList.get(1));

        given(mockDailyMenuRepository.findById(1)).willReturn(mockDailyMenuList.get(0));
        // telling mockito there is one user in the database, with id 1
        // this step is specially needed if you use the User of the token in your controller.
        // in this case, use the annotation @WithMockAuth(id="1")
        given(mockUserRepository.findById(1L)).willReturn(mockUser);

        given(mockFoodRepository.findById(10L)).willReturn(mockFoodList.get(0));
        
        given(mockFoodRepository.findById(11L)).willReturn(mockFoodList.get(1));
        given( mockSettingsRepository.findOne(1)).willReturn(mockSettings);
       
        
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/orders/{id}", 2l)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"dailyMenuId\": 1,\n"
                        + "  \"dailyMenuVersion\": 1,\n"
                        + "  \"dailyMenuDate\": \"2017-05-22\",\n"
                        + "  \"orderItems\": [\n"
                        + "    {\n"
                        + "      \"quantity\": 0,\n"
                        + "      \"foodId\": 10\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"emailRequest\": true,\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-22T06:00:00.000Z\"\n"
                        + "  }\n"
                        + "}"))
                .andExpect(status().isBadRequest());

    }


    @WithMockAuth(id = "1")
    @Test
    public void testOrdersIdPut304() throws Exception {

        // telling Mockito to use this mock every time the findByDailyOrderId method is called on the DailyOrderRepository
        given(mockDailyOrderRepository.findByDailyOrderId(4)).willReturn(mockDailyOrderList.get(3));

        // telling mockito there is one user in the database, with id 1
        // this step is specially needed if you use the User of the token in your controller.
        // in this case, use the annotation @WithMockAuth(id="1")
        given(mockUserRepository.findById(1L)).willReturn(mockUser);

        given(mockFoodRepository.findById(10L)).willReturn(mockFoodList.get(0));
        
        given(mockFoodRepository.findById(11L)).willReturn(mockFoodList.get(1));
        given( mockSettingsRepository.findOne(1)).willReturn(mockSettings);
       
        
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/orders/{id}", 4l)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"dailyMenuId\": 2,\n"
                        + "  \"dailyMenuVersion\": 1,\n"
                        + "  \"dailyMenuDate\": \"2017-05-22\",\n"
                        + "  \"orderItems\": [\n"
                        + "    {\n"
                        + "      \"quantity\": 4,\n"
                        + "      \"foodId\": 10\n"
                        + "    },\n"
                         + "    {\n"
                        + "      \"quantity\": 4,\n"
                        + "      \"foodId\": 11\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"emailRequest\": true,\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-22T06:00:00.000Z\"\n"
                        + "  }\n"
                        + "}"))
                .andExpect(status().isNotModified());

    }

}
