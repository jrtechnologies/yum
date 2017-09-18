package org.bootcamp.yum.api;

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
 
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.bootcamp.test.MockAuthRule;
import org.bootcamp.test.annotation.WithMockAuth;
import org.bootcamp.yum.data.converter.FoodTypeConverter;
import org.bootcamp.yum.data.entity.Food;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.FoodType;
import org.bootcamp.yum.data.repository.FoodRepository;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.bootcamp.yum.service.FoodsService;
import static org.hamcrest.Matchers.*;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.LocalTime;
import org.joda.time.format.DateTimeFormat;
import static org.junit.Assert.*;
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
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@RunWith(MockitoJUnitRunner.class)
public class FoodsApiControllerTest {

    @Rule
    public final MockAuthRule mockAuth = new MockAuthRule();

    @InjectMocks
    private final FoodsService foodService = new FoodsService();

    @Mock
    private FoodRepository mockFoodRepository;
    
    @Mock
    private UserRepository mockUserRepository;
    
    @Mock
    private SettingsRepository settingsRepo;
   

    private MockMvc mockMvc;

    
    private FoodTypeConverter foodType = new FoodTypeConverter();

    private DateTime newLastEdit(String dateTimeStr){            
  
            DateTimeZone zoneGreece = DateTimeZone.forID( "Europe/Athens" ); // might use it
            DateTimeZone zoneUTC = DateTimeZone.UTC;                         //  
            DateTime lastEdit = DateTime.parse(dateTimeStr , DateTimeFormat.forPattern("dd/MM/yyyy HH:mm:ss").withZone(zoneUTC) );
            return lastEdit;
    }

    @Before
    public void init() {         
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup( new FoodsApiController(foodService) )
                .setControllerAdvice(new ExceptionControllerAdvice())
                .build();          
    }

    // The WothMockAuth annotation is needed only if in the controller, you need to access the User that has the token
    @Test
    @WithMockAuth(id="1")
    public void testFoodsGetOk() throws Exception {
        
        Food mockFoodOk = new Food(10, "Pastitsio", new ArrayList<>(), FoodType.MAIN, "test Pastitsio", new BigDecimal("5.65"), false, null);
        Food mockFoodOk2 = new Food(11, "Pastitsio2", new ArrayList<>(), FoodType.MAIN, "test Pastitsio2", new BigDecimal("5.65"), false, null);
        // Mock List of Foods
        List<Food> mockFoodList = new ArrayList<>();
        // Adding an ok mock Food instance
        mockFoodList.add(mockFoodOk);
        mockFoodList.add(mockFoodOk2);
        
        Settings global_settings = new Settings(1, LocalTime.MIDNIGHT,  DateTime.now(), "", "", "", "", 0, 1, "", "");
        given(settingsRepo.findOne(1)).willReturn(global_settings);
        
        // telling Mockito to use this mock list every time the findAll method is called on the foodRepo
        given(mockFoodRepository.findAll()).willReturn(mockFoodList);
        given(mockFoodRepository.count()).willReturn(2L);
        
        Pageable pr = new PageRequest(1, 2 , Sort.Direction.DESC, "id" );
        Page<Food> pageofFood = new PageImpl<>(mockFoodList);
        
        given(mockFoodRepository.findAll(pr)).willReturn(pageofFood);
            
        // telling mockito there is one user in the database, with id 1
        // this step is specially needed if you use the User of the token in your controller.
        // in this case, use the annotation @WithMockAuth(id="1")
        given(mockUserRepository.findById(1L)).willReturn(new User());

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(get("/api/foods?stats=&size=2&page=1")).andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)) 
                .andExpect(jsonPath("$.totalElements", is(2)))
                .andExpect(jsonPath("$.foods[0].foodItem.id", is(10)))
                .andExpect(jsonPath("$.foods[0].foodItem.foodName", is("Pastitsio"))) 
                .andExpect(jsonPath("$.foods[1].foodItem.id", is(11)))
                .andExpect(jsonPath("$.foods[1].foodItem.foodName", is("Pastitsio2")));
        
        // we verify that we called findAll method once only on the repo.
        verify(mockFoodRepository, times(1)).findAll(pr);
        verify(mockFoodRepository, times(1)).count();
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockFoodRepository);
        // we verify that we didnt modify the first food item in the repository
        assertEquals(mockFoodOk, mockFoodRepository.findAll().iterator().next());
    }
    
    @Test
    @WithMockAuth(id="1")
    public void testFoodsPutOk() throws Exception {
        Food mockFoodOk = new Food(10, "Pastitsio", new ArrayList<>(), FoodType.MAIN, "test Pastitsio", new BigDecimal("5.65"), false, newLastEdit("01/01/2017 00:00:00"));
   
        Settings global_settings = new Settings(1, LocalTime.MIDNIGHT,  DateTime.now(), "", "", "", "", 0, 1);
        
        given(mockFoodRepository.findById(10)).willReturn(mockFoodOk);
        given(settingsRepo.findOne(1)).willReturn(global_settings);
        
        mockMvc.perform(put("/api/foods/{id}",10).content(
        "{\n" +
        "  \"foodName\": \"string\",\n" +
        "  \"foodType\": \"Drink\",\n" +
        "  \"description\": \"string\",\n" +
        "  \"price\": 10,\n" +
        "  \"lastEdit\": {\n" +
        "    \"timeStamp\": \"2017-01-01T00:00:00.000Z\"\n" +
        "  }\n" +
        "}"
        ).contentType(MediaType.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));
        
        
        verify(mockFoodRepository, times(1)).findById(10);
        assertEquals(mockFoodOk, mockFoodRepository.findById(10) );
    }
    
    @Test
    @WithMockAuth(id="1")
    public void testFoodsPostOk() throws Exception {
        
        Food mockFoodOk = new Food(0, "Pastitsio", new ArrayList<>(), FoodType.MAIN, "test Pastitsio", new BigDecimal("5.65"), false, null);         
        Settings global_settings = new Settings(1, LocalTime.MIDNIGHT,  DateTime.now(), "", "", "", "", 0, 1);
        
        
        given(settingsRepo.findOne(1)).willReturn(global_settings); 
        given(mockFoodRepository.findByNameAndArchived(mockFoodOk.getName(), false)).willReturn(null);
        
        mockMvc.perform(post("/api/foods").content(
        "{\n" +
        "  \"foodName\": \""+mockFoodOk.getName()+"\",\n" +
        "  \"foodType\": \""+foodType.convertToDatabaseColumn(mockFoodOk.getFoodType())+"\",\n" +
        "  \"description\": \""+mockFoodOk.getDescription()+"\",\n" +
        "  \"price\": "+mockFoodOk.getPrice()+"\n" +
       
        "}"
        ).contentType(MediaType.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());
        
        
        verify(mockFoodRepository, times(1)).findByNameAndArchived(mockFoodOk.getName(), false);
        verify(mockFoodRepository, times(1)).save(mockFoodOk);
        verifyNoMoreInteractions(mockFoodRepository);
 
    }
    
    @Test
    @WithMockAuth(id="1")
    public void testFoodsPostSameName() throws Exception {
        
        Food mockFoodOk = new Food(0, "Pastitsio", new ArrayList<>(), FoodType.MAIN, "test Pastitsio", new BigDecimal("5.65"), false, null);   
        List<Food> mockFoodList = new ArrayList<>();
        mockFoodList.add(mockFoodOk);
        
        given(mockFoodRepository.findByNameAndArchived(mockFoodOk.getName(), false)).willReturn(mockFoodList);
         
        
        mockMvc.perform(post("/api/foods").content(
        "{\n" +
        "  \"foodName\": \""+mockFoodOk.getName()+"\",\n" +
        "  \"foodType\": \""+foodType.convertToDatabaseColumn(mockFoodOk.getFoodType())+"\",\n" +
        "  \"description\": \""+mockFoodOk.getDescription()+"\",\n" +
        "  \"price\": "+mockFoodOk.getPrice()+"\n" +
       
        "}"
        ).contentType(MediaType.APPLICATION_JSON_UTF8))
            .andExpect(status().isPreconditionFailed());        
        
        verify(mockFoodRepository, times(1)).findByNameAndArchived(mockFoodOk.getName(), false);
        verify(mockFoodRepository, times(0)).save(mockFoodOk);
        verifyNoMoreInteractions(mockFoodRepository);
 
    }
    
    @Test
    @WithMockAuth(id="1")
    public void testFoodsPutArchived() throws Exception {
        Food mockFoodOk = new Food(1, "Pastitsio", new ArrayList<>(), FoodType.MAIN, "test Pastitsio", new BigDecimal("5.65"), true, newLastEdit("01/01/2017 00:00:00"));
   
        given(mockFoodRepository.findById(10)).willReturn(mockFoodOk);
        
        mockMvc.perform(put("/api/foods/{id}",10).content(
        "{\n" +
        "  \"foodName\": \"string\",\n" +
        "  \"foodType\": \"Drink\",\n" +
        "  \"description\": \"string\",\n" +
        "  \"price\": 10,\n" +
        "  \"lastEdit\": {\n" +
        "    \"timeStamp\": \"2017-01-01T00:00:00.000Z\"\n" +
        "  }\n" +
        "}"
        ).contentType(MediaType.APPLICATION_JSON_UTF8))
            .andExpect(status().isBadRequest());
        
        
        verify(mockFoodRepository, times(1)).findById(10);
        assertEquals(mockFoodOk, mockFoodRepository.findById(10) );
    }
    
}
 