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

import java.util.ArrayList;
import java.util.List;
import org.bootcamp.ApplicationProperties;
import org.bootcamp.test.MockAuthRule;
import org.bootcamp.test.annotation.WithMockAuth;
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.UserRepository;
import org.bootcamp.yum.service.UsersService;
import static org.hamcrest.Matchers.*;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.junit.AfterClass;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.BDDMockito.given;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@RunWith(MockitoJUnitRunner.class)
public class UsersApiControllerTest {
    
    public UsersApiControllerTest() {
    }
    
    @Rule
    public final MockAuthRule mockAuth = new MockAuthRule();

    @InjectMocks
    private final UsersService usersService = new UsersService();

    @Mock
    private UserRepository mockUserRepository;
    @Mock
    private ApplicationProperties applicationProperties;
        
    private MockMvc mockMvc;
    
    private User mockIoannisUser;
    private User mockKostasUser;
    private User mockSofiannaUser;
    private User mockNewUser;
    private User mockUser;
    private User mockModifiedUser;
    private List<User> mockUserList;
    
    @Before
    public void setUpClass() {
        //List of users.
        mockUserList = new ArrayList<>();
        //First user.
        mockIoannisUser = new User(10);
            mockIoannisUser.setFirstName("Ioannis");
            mockIoannisUser.setLastName("Nikas");
            mockIoannisUser.setPassword("123456789");
            mockIoannisUser.setEmail("ioannis@gmail.com");
            mockIoannisUser.setUserRole(UserRole.HUNGRY);
            mockIoannisUser.setRegistrationDate(LocalDate.now());
            mockIoannisUser.setLastEdit(DateTime.now());
            mockIoannisUser.setVersion(1);
            mockIoannisUser.setApproved(false);
        mockUserList.add(mockIoannisUser); 
        //Second user.
        mockKostasUser = new User(1);
            mockKostasUser.setFirstName("Kostas");
            mockKostasUser.setLastName("Pallas");
            mockKostasUser.setPassword("123456789");
            mockKostasUser.setEmail("kostas@gmail.com");
            mockKostasUser.setUserRole(UserRole.CHEF);
            mockKostasUser.setRegistrationDate(LocalDate.now());
            mockKostasUser.setLastEdit(DateTime.now());
            mockKostasUser.setVersion(1);
        mockUserList.add(mockKostasUser);
        //Third user.
        mockSofiannaUser = new User(2);
            mockSofiannaUser.setFirstName("Sofianna");
            mockSofiannaUser.setLastName("papadopoulou");
            mockSofiannaUser.setPassword("123456789");
            mockSofiannaUser.setEmail("sofianna@gmail.com");
            mockSofiannaUser.setUserRole(UserRole.CHEF);
            mockSofiannaUser.setRegistrationDate(LocalDate.now());
            mockSofiannaUser.setLastEdit(DateTime.now());
            mockSofiannaUser.setVersion(1);
        mockUserList.add(mockSofiannaUser); 
        mockNewUser = new User();
        
        mockUser = new User(1);
        mockUser.setApproved(true);
        mockUser.setEmail("hungry@yum.com");
        mockUser.setDailyOrders(new ArrayList<DailyOrder>());
        mockUser.setFirstName("firstName");
        mockUser.setLastName("lastName");
        mockUser.setPassword("1234");
        mockUser.setRegistrationDate(new LocalDate(2017, 4, 22));
        mockUser.setUserRole(UserRole.HUNGRY);

        mockModifiedUser = new User(1);
        mockModifiedUser.setApproved(true);
        mockModifiedUser.setEmail("hungry@yum.com");
        mockModifiedUser.setDailyOrders(new ArrayList<>());
        mockModifiedUser.setFirstName("firstName");
        mockModifiedUser.setLastName("lastName");
        mockModifiedUser.setPassword("1234");
        mockModifiedUser.setRegistrationDate(new LocalDate(2017, 4, 22));
        mockModifiedUser.setUserRole(UserRole.HUNGRY);
    }
    @AfterClass
    public static void tearDownClass()
    {
    }

    @Before
    public void setUp() {
        ApplicationProperties.Ldap ldap = mock(ApplicationProperties.Ldap.class);
        ldap.setEnabled(false);
        
        given(applicationProperties.getLdap()).willReturn(ldap);
        mockMvc = MockMvcBuilders.standaloneSetup( new UsersApiController(usersService) )
                .setControllerAdvice(new ExceptionControllerAdvice())
                .build();
    }
    //Test of UsersGet method(Response-200), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersGet() throws Exception {
        //Telling Mockito to use this mock list every time the findAll method is called on the userRepo
        Pageable pr = new PageRequest(0, 2 , Sort.Direction.ASC, "registrationDate", "id" );
        Page<User> pageofUser = new PageImpl<>(mockUserList);
        
        given(mockUserRepository.findAll(pr)).willReturn(pageofUser);
        //Perform the AP call and check response status code.
        mockMvc.perform(get("/api/users?page=0&size=2")).andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                //.andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$.users[0].id", is(10)))//First user id is 10
                .andExpect(jsonPath("$.users[1].id", is(1))) //Second user id is 1.
                .andExpect(jsonPath("$.users[0].email", is("ioannis@gmail.com")))
                .andExpect(jsonPath("$.users[1].email", is("kostas@gmail.com"))); 
        
        //We verify that we called findAll method once only on the repository.
        verify(mockUserRepository, times(1)).findAll(pr);
        verify(mockUserRepository, times(1)).count();
        
        //We verify that we didnt call anything else on the repository
        verifyNoMoreInteractions(mockUserRepository);
        //We verify that user exist and didnt modify them from the repository
        assertEquals(mockIoannisUser, mockUserRepository.findAll(pr).iterator().next());
    }
    //Test of UsersIdDelete method(Response-404), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdDelete_404() throws Exception {
        //Check response status code 404.
        mockMvc.perform(delete("/api/users/{id}", "15"))
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isNotFound());
    }
    
    //Test of usersIdForgotpwdPost method(Response-201), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdForgotpwdPost201() throws Exception{
        given(mockUserRepository.findById(1)).willReturn(mockUser);

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(post("/api/users/{id}/forgotpwd",1L))
                .andExpect(status().isCreated());

        // we verify that we called findById method once only on the repo.
        verify(mockUserRepository, times(1)).findById(1);
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
        // we verify that we modified the user as expected
        assertEquals(mockModifiedUser, mockUserRepository.findById(1));
        
    }
    
    //Test of usersIdForgotpwdPost method(Response-400), of class UsersApiController
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdForgotpwdPost400() throws Exception{
        given(mockUserRepository.findById(1)).willReturn(mockUser);

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(post("/api/users/{id}/forgotpwd","a"))
                .andExpect(status().isBadRequest());
       
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
        // we verify that we didnt modify the user in the repository
        assertEquals(mockModifiedUser, mockUserRepository.findById(1));
        
    }
    
    //Test of usersIdForgotpwdPost method(Response-404), of class UsersApiController
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdForgotpwdPost404() throws Exception{
        given(mockUserRepository.findById(1)).willReturn(null);

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(post("/api/users/{id}/forgotpwd",1L))
                .andExpect(status().isNotFound());

        // we verify that we called findAll method once only on the repo.
        verify(mockUserRepository, times(1)).findById(1);
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
        
    }
    
    //Test of UsersIdGet method(Response-200), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdGet_200() throws Exception {
        //Telling Mockito to use this mock list every time the findById method is called on the userRepo
        given(mockUserRepository.findById(10L)).willReturn(mockIoannisUser);
        
        
        //Check response status code 200 (is OK).
        mockMvc.perform(get("/api/users/{id}", "10"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("id", is(10)))
                .andExpect(jsonPath("email", is("ioannis@gmail.com"))); 
        
        //We verify that we called findById method two times.
        verify(mockUserRepository, times(2)).findById(10L);
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
    //Test of UsersIdGet method(Response-404), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdGet_404() throws Exception {
        //Check response status code 404 (user not found).
        mockMvc.perform(get("/api/users/{id}", "0"))
                .andExpect(status().isNotFound());
    }
    //Test of UsersIdPut method(Response-204), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdPut_204() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findById and findByEmail method is called on the userRepo
        given(mockUserRepository.findById(10L)).willReturn(mockIoannisUser);
        given(mockUserRepository.findByEmail("ioannis@gmail.com")).willReturn(mockIoannisUser);
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/users/{id}", "10")
                .content( "{\n" +
                        "  \"lastName\": \"Papadopoulos\",\n" +
                        "  \"firstName\": \"Ioannis\",\n" +
                        "  \"email\": \"ioannis@gmail.com\",\n" +
                        "  \"role\": \"chef\",\n" +
                        "  \"lastEdit\": {\n" +
                        "    \"timeStamp\": \"2017-05-02T09:32:33.563Z\", \"version\": 1\n" +
                        "  }\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isNoContent());
        //We verify that we called findById and findByEmail methods two times.
        verify(mockUserRepository, times(2)).findById(10L);
        verify(mockUserRepository, times(2)).findByEmail("ioannis@gmail.com");
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
    //Test of UsersIdPut method(Response-400), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdPut_400() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findById and findByEmail method is called on the userRepo
        given(mockUserRepository.findById(1L)).willReturn(mockKostasUser);
        given(mockUserRepository.findByEmail("ioannis@gmail.com")).willReturn(mockIoannisUser);
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/users/{id}", "1")
                .content( "{\n" +
                        "  \"lastName\": \"Papadopoulos\",\n" +
                        "  \"firstName\": \"Ioannis\",\n" +
                        "  \"email\": \"ioannis@gmail.com\",\n" + //this email already exist to another user. 
                        "  \"role\": \"chef\",\n" +
                        "  \"lastEdit\": {\n" +
                        "    \"timeStamp\": \"2017-05-02T09:32:33.563Z\", \"version\": 2\n" +
                        "  }\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isBadRequest());
        //We verify that we called findById one time and findByEmail methods two times.
        verify(mockUserRepository, times(1)).findById(1L);
        verify(mockUserRepository, times(2)).findByEmail("ioannis@gmail.com");
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
    //Test of UsersIdPut method(Response-404), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdPut_404() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findById method is called on the userRepo
        given(mockUserRepository.findById(0)).willReturn(null);
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/users/{id}", "0")
                .content( "{\n" +
                        "  \"lastName\": \"Papadopoulos\",\n" +
                        "  \"firstName\": \"Ioannis\",\n" +
                        "  \"email\": \"ioannis@gmail.com\",\n" +
                        "  \"role\": \"chef\",\n" +
                        "  \"lastEdit\": {\n" +
                        "    \"timeStamp\": \"2017-05-02T09:32:33.563Z\", \"version\": 2\n" +
                        "  }\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isNotFound());
        //We verify that we called findById method one time.
        verify(mockUserRepository, times(1)).findById(0L);
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
    //Test of UsersIdPut method(Response-409), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdPut_409() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findById and findByEmail method is called on the userRepo
        given(mockUserRepository.findById(10L)).willReturn(mockIoannisUser);
        given(mockUserRepository.findByEmail("ioannis@gmail.com")).willReturn(mockIoannisUser);
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/users/{id}", "10")
                .content( "{\n" +
                        "  \"lastName\": \"Papadopoulos\",\n" +
                        "  \"firstName\": \"Ioannis\",\n" +
                        "  \"email\": \"ioannis@gmail.com\",\n" +
                        "  \"role\": \"chef\",\n" +
                        "  \"lastEdit\": {\n" +
                        "    \"timeStamp\": \"2017-05-02T09:32:33.563Z\", \"version\": 2\n" +
                        "  }\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isConflict());
        //We verify that we called findById and findByEmail methods two times.
        verify(mockUserRepository, times(2)).findById(10L);
        verify(mockUserRepository, times(2)).findByEmail("ioannis@gmail.com");
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
    //Test of UsersIdPut method(Response-500), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersIdPut_500() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findById and findByEmail method is called on the userRepo
        given(mockUserRepository.findById(10L)).willReturn(mockIoannisUser);
        given(mockUserRepository.findByEmail("ioannis@gmail.com")).willReturn(mockIoannisUser);
        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/users/{id}", "10")
                .content( "{\n" +
                        "  \"lastName\": \"Papadopoulos\",\n" +
                        "  \"firstName\": \"Ioannis\",\n" +
                        "  \"email\": \"ioannis@gmail.com\",\n" +
                        "  \"role\": \"error\",\n" +  // wrong user role..
                        "  \"lastEdit\": {\n" +
                        "    \"timeStamp\": \"2017-05-02T09:32:33.563Z\", \"version\": 2\n" +
                        "  }\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isInternalServerError());
        //We verify that we called findById and findByEmail methods two times.
        verify(mockUserRepository, times(2)).findById(10L);
        verify(mockUserRepository, times(2)).findByEmail("ioannis@gmail.com");
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
    //Test of UsersPost method(Response-201), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersPost_201() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findByEmail method is called on the userRepo
        given(mockUserRepository.findByEmail(mockNewUser.getEmail())).willReturn(null);
        //Check response status code 201 (user created).
        mockMvc.perform(post("/api/users")
                .content( "{\n" +
                        "  \"id\": \"0\",\n" +
                        "  \"lastName\": \"Pellas\",\n" +
                        "  \"firstName\": \"Christos\",\n" +
                        "  \"email\": \"christos@gmail.com\",\n" +
                        "  \"password\": \"0987654321\",\n" +
                        "  \"role\": \"hungry\"\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isCreated());
        //We verify that we called findByEmail method one time.
        verify(mockUserRepository, times(1)).findByEmail("christos@gmail.com");
    }
    //Test of UsersPost method(Response-400), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersPost_400() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findByEmail method is called on the userRepo
        given(mockUserRepository.findByEmail(mockNewUser.getEmail())).willReturn(null);
        //Check response status code 400 (unexpected error occured).
        mockMvc.perform(post("/api/users")
                .content( "{\n" +
                        "  \"id\": \"0\",\n" +
                        "  \"lastName\": \"   \",\n" + // no valid Last name
                        "  \"firstName\": \"Christos\",\n" +
                        "  \"email\": \"christos@gmail.com\",\n" +
                        "  \"password\": \"0987654321\",\n" +
                        "  \"role\": \"hungry\"\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isBadRequest());
        //We verify that we called findByEmail method one time.
        verify(mockUserRepository, times(1)).findByEmail("christos@gmail.com");
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
    //Test of UsersPost method(Response-412), of class UsersApiController.
    @Test
    @WithMockAuth(id="1")
    public void testUsersPost_412() throws ApiException, Exception {
        mockNewUser.setEmail("ioannis@gmail.com");
        //Telling Mockito to use this mock list every time the findByEmail method is called on the userRepo
        given(mockUserRepository.findByEmail(mockNewUser.getEmail())).willReturn(mockIoannisUser);
        //Check response status code 201 (user created).
        mockMvc.perform(post("/api/users")
                .content( "{\n" +
                        "  \"id\": \"0\",\n" +
                        "  \"lastName\": \"Papadopoulos\",\n" +
                        "  \"firstName\": \"Ioannis\",\n" +
                        "  \"email\": \"ioannis@gmail.com\",\n" +
                        "  \"password\": \"0987654321\",\n" +
                        "  \"role\": \"hungry\"\n" +
                        "}" )
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isPreconditionFailed());
        //We verify that we called findByEmail method one time.
        verify(mockUserRepository, times(1)).findByEmail("ioannis@gmail.com");
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
  
    @Test
    @WithMockAuth(id="1")
    public void usersIdApprovePut_204_approve() throws ApiException, Exception {
        //Telling Mockito to use this mock list every time the findByEmail method is called on the userRepo
        given(mockUserRepository.findById(10)).willReturn(mockIoannisUser);
        System.out.println("mockUserRepository.findById(10) " +mockUserRepository.findById(10));
        System.out.println("mockIoannisUser" + mockIoannisUser);
        mockMvc.perform(put("/api/users/{id}/approve?approve=true",10L))
                .andExpect(status().isNoContent());
        //We verify that we called findById method one time.
        verify(mockUserRepository, times(2)).findById(10);
        //We verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
    }
}