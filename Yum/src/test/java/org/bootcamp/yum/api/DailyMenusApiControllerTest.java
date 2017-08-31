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
import org.bootcamp.yum.data.entity.DailyMenu;
import org.bootcamp.yum.data.entity.Food;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.enums.FoodType;
import org.bootcamp.yum.data.repository.DailyMenuRepository;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.OrderItemRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.service.DailyMenuService;
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
public class DailyMenusApiControllerTest
{

    @Rule
    public final MockAuthRule mockAuth = new MockAuthRule();

    @InjectMocks
    private final DailyMenuService dailyMenuService = new DailyMenuService();

    @Mock
    private DailyMenuRepository mockDailyMenuRepository;

    @Mock
    private FoodRepository mockFoodRepository;
    
    @Mock
    private OrderItemRepository mockOrderItemRepository;
    
    @Mock
    private SettingsRepository mockSettingsRepository;


    private MockMvc mockMvc;

    public DailyMenusApiControllerTest()
    {
    }

    @BeforeClass
    public static void setUpClass()
    {
    }

    @AfterClass
    public static void tearDownClass()
    {
    }

    @Before
    public void setUp()
    {
        mockMvc = MockMvcBuilders.standaloneSetup(new DailyMenusApiController(dailyMenuService)).setControllerAdvice(new ExceptionControllerAdvice()).build();
    }

    private static List<DailyMenu> mockDailyMenuList;
    private static List<Food> mockFoodList;
    private static List<org.bootcamp.yum.data.entity.OrderItem> mockOrderItemsList;
    private static Food mockFood1;
    private static Food mockFood2;
    private static DailyMenu mockDailyMenu;
    private static Settings mockSettings;

    @BeforeClass
    public static void initMock()
    {
        mockDailyMenuList = new ArrayList<>();
        mockFoodList = new ArrayList<>();
        mockOrderItemsList = new ArrayList<>();

        mockFood1 = new Food(1);
        mockFood1.setName("mousaka");
        mockFood1.setFoodType(FoodType.MAIN);
        mockFood1.setDescription("tradition main dish");
        mockFood1.setPrice(new BigDecimal("5.5"));
        mockFood1.setArchived(false);
        mockFood1.setLastEdit(new DateTime(2017, 4, 28, 13, 5));
        mockFood1.setVersion(1);

        mockFood2 = new Food(2);
        mockFood2.setName("greek salad");
        mockFood2.setFoodType(FoodType.SALAD);
        mockFood2.setDescription("tradition cretan salad");
        mockFood2.setPrice(new BigDecimal("4"));
        mockFood2.setArchived(false);
        mockFood2.setLastEdit(new DateTime(2017, 4, 28, 13, 30));
        mockFood2.setVersion(1);

        mockDailyMenu = new DailyMenu();
        mockDailyMenu.setId(6);
        mockDailyMenu.setDate(new LocalDate(2117, 9, 1));
        mockDailyMenu.setLastEdit(new DateTime(2017, 4, 28, 14, 00));
        mockDailyMenu.setVersion(1);
        
        mockSettings = new Settings(1);
        mockSettings.setCurrency("EURO");
        mockSettings.setDeadline(new LocalTime(12, 0, 0));
        mockSettings.setNotes("Notes..");
        mockSettings.setPolicy("Policy..");
        mockSettings.setTos("Tos..");
        mockSettings.setVersion(1);

    }

    @After
    public void tearDown()
    {
    }

    /**
     * Test of dailyMenusIdPut method, of class DailyMenusApiController.
     */
    @Test
    public void testDailyMenusIdPut() throws Exception
    {
        mockFoodList.add(mockFood2);
        mockDailyMenu.setFoods(mockFoodList);
        mockDailyMenuList.add(mockDailyMenu);

        given(mockDailyMenuRepository.findAll()).willReturn(mockDailyMenuList);
        given(mockDailyMenuRepository.findById(6)).willReturn(mockDailyMenu);
        given(mockOrderItemRepository.findByFoodIdAndDailyOrderIn(6L, mockDailyMenu.getDailyOrders())).willReturn(mockOrderItemsList);
        given(mockSettingsRepository.findOne(1)).willReturn(mockSettings);

        given(mockFoodRepository.findAll()).willReturn(mockFoodList);
        given(mockFoodRepository.findById(1)).willReturn(mockFood1);
        given(mockFoodRepository.findById(2)).willReturn(mockFood2);
        
        LocalTime deadline = new LocalTime(0, 0);
        Settings sets = new Settings(1, deadline, null, "€", "notes", "tos", "policy", 0, 0);
        given(mockSettingsRepository.findOne(1)).willReturn(sets);

        mockMvc.perform(put("/api/dailyMenus/{id}", "6")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"foods\": [\n"
                        + "    {\n"
                        + "      \"foodId\": 1\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-28T14:00:00.000+03:00\",\n"
                        + "    \"version\": 1\n"
                        + "  }\n"
                        + "}")
        ).andExpect(status().isOk());

        // we verify that we called findAll method once only on the repo.
        verify(mockDailyMenuRepository, times(1)).findById(6);
        verify(mockFoodRepository, times(1)).findById(1);

        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockDailyMenuRepository);
        verifyNoMoreInteractions(mockFoodRepository);

    }

    @Test
    public void testDailyMenusIdPut_400_DailyMenuEntity_BadRequest() throws Exception
    {
        mockFoodList.add(mockFood2);
        mockDailyMenu.setFoods(mockFoodList);
        mockDailyMenuList.add(mockDailyMenu);

        LocalTime deadline = new LocalTime(0, 0);
        Settings sets = new Settings(1, deadline, null, "€", "notes", "tos", "policy", 0, 0);
        given(mockSettingsRepository.findOne(1)).willReturn(sets);
        
        given(mockDailyMenuRepository.findById(6)).willReturn(mockDailyMenu);

        mockMvc.perform(put("/api/dailyMenus/{id}", "6")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{}")
        ).andExpect(status().isBadRequest())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));

    }

    @Test
    public void testDailyMenusIdPut_404_DailyMenuEntity_NotFound() throws Exception
    {
        mockFoodList.add(mockFood2);
        mockDailyMenu.setFoods(mockFoodList);
        mockDailyMenuList.add(mockDailyMenu);

        given(mockDailyMenuRepository.findById(7)).willReturn(null);

        mockMvc.perform(put("/api/dailyMenus/{id}", "7")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"foods\": [\n"
                        + "    {\n"
                        + "      \"foodId\": 1\n"
                        + "    }\n"
                        + "  ],\n"
                        + "  \"lastEdit\": {\n"
                        + "    \"timeStamp\": \"2017-04-28T14:00:00.000+03:00\",\n"
                        + "    \"version\": \"0\"\n"
                        + "  }\n"
                        + "}")
        ).andExpect(status().isNotFound())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));

        // we verify that we called findAll method once only on the repo.
        verify(mockDailyMenuRepository, times(1)).findById(7);
        verify(mockFoodRepository, times(0)).findById(1);
    }

}
