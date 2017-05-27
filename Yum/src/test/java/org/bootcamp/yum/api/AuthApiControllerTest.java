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
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.enums.UserRole;
import org.bootcamp.yum.data.repository.UserRepository;
import org.bootcamp.yum.service.AuthService;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.junit.After;
import org.junit.AfterClass;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;
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
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

/**
 *
 * @author user
 */
@RunWith(MockitoJUnitRunner.class)
public class AuthApiControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private final AuthService authService = new AuthService();

    @Mock
    private UserRepository mockUserRepository;

    private static User mockUser;
    private static User mockModifiedUser;

    private static User mockUserReset;
    private static User mockModifiedUserReset;

    public AuthApiControllerTest() {
    }

    @BeforeClass
    public static void initMock() {
        mockUser = new User(1);
        mockUser.setApproved(true);
        mockUser.setEmail("lazos.chr@gmail.com");
        mockUser.setDailyOrders(new ArrayList<DailyOrder>());
        mockUser.setFirstName("firstName");
        mockUser.setLastName("lastName");
        mockUser.setPassword("1234");
        mockUser.setRegistrationDate(new LocalDate(2017, 4, 22));
        mockUser.setUserRole(UserRole.HUNGRY);

        mockModifiedUser = new User(1);
        mockModifiedUser.setApproved(true);
        mockModifiedUser.setEmail("lazos.chr@gmail.com");
        mockModifiedUser.setDailyOrders(new ArrayList<>());
        mockModifiedUser.setFirstName("firstName");
        mockModifiedUser.setLastName("lastName");
        mockModifiedUser.setPassword("1234");
        mockModifiedUser.setRegistrationDate(new LocalDate(2017, 4, 22));
        mockModifiedUser.setUserRole(UserRole.HUNGRY);

        mockUserReset = new User(1);
        mockUserReset.setApproved(true);
        mockUserReset.setEmail("lazos.chr@gmail.com");
        mockUserReset.setDailyOrders(new ArrayList<DailyOrder>());
        mockUserReset.setFirstName("firstName");
        mockUserReset.setLastName("lastName");
        mockUserReset.setPassword("1234");
        mockUserReset.setSecret("b136e1d2-0e74-45d4-bf52-c01685623ac9");
        mockUserReset.setSecretCreation(DateTime.now());
        mockUserReset.setRegistrationDate(new LocalDate(2017, 4, 22));
        mockUserReset.setUserRole(UserRole.HUNGRY);

        mockModifiedUserReset = new User(1);
        mockModifiedUserReset.setApproved(true);
        mockModifiedUserReset.setEmail("lazos.chr@gmail.com");
        mockModifiedUserReset.setDailyOrders(new ArrayList<>());
        mockModifiedUserReset.setFirstName("firstName");
        mockModifiedUserReset.setLastName("lastName");
        mockModifiedUserReset.setPassword("lazos1234");
        mockModifiedUserReset.setRegistrationDate(new LocalDate(2017, 4, 22));
        mockModifiedUserReset.setUserRole(UserRole.HUNGRY);
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(new AuthApiController(authService)).setControllerAdvice(new ExceptionControllerAdvice()).build();
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of authForgotpwdPost method, of class AuthApiController.
     */
    @Test
    public void testAuthForgotpwdPost204() throws Exception {

        given(mockUserRepository.findByEmail("lazos.chr@gmail.com")).willReturn(mockUser);

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(post("/api/auth/forgotpwd")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("lazos.chr@gmail.com"))
                .andExpect(status().isNoContent());

        // we verify that we called findAll method once only on the repo.
        verify(mockUserRepository, times(1)).findByEmail("lazos.chr@gmail.com");
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
        // we verify that we modifies the user as expected
        assertEquals(mockModifiedUser, mockUserRepository.findByEmail("lazos.chr@gmail.com"));

    }

    @Test
    public void testAuthForgotpwdPost400() throws Exception {

        given(mockUserRepository.findByEmail("giotis.chr@gmail.com")).willReturn(null);
        given(mockUserRepository.findByEmail("lazos.chr@gmail.com")).willReturn(mockUser);

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(post("/api/auth/forgotpwd")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("giotis.chr@gmail.com"))
                .andExpect(status().isBadRequest());

        // we verify that we called findAll method once only on the repo.
        verify(mockUserRepository, times(1)).findByEmail("giotis.chr@gmail.com");
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
        // we verify that we didnt modify the user in the repository
        assertEquals(mockModifiedUser, mockUserRepository.findByEmail("lazos.chr@gmail.com"));

    }

    @Test
    public void testAuthChangepwdPut204() throws Exception {

        given(mockUserRepository.findBySecret("b136e1d2-0e74-45d4-bf52-c01685623ac9")).willReturn(mockUserReset);

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/auth/changepwd")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"token\": \"b136e1d2-0e74-45d4-bf52-c01685623ac9\",\n"
                        + "  \"password\": \"lazos1234\"\n"
                        + "}"))
                .andExpect(status().isNoContent());

        // we verify that we called findAll method once only on the repo.
        verify(mockUserRepository, times(1)).findBySecret("b136e1d2-0e74-45d4-bf52-c01685623ac9");
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);
        
        // we verify that the password changed as expected     
        assertTrue(BCrypt.checkpw(mockModifiedUserReset.getPassword(), mockUserRepository.findBySecret("b136e1d2-0e74-45d4-bf52-c01685623ac9").getPassword()));

    }
    
    @Test
    public void testAuthChangepwdPut400() throws Exception {

        // We perform the API call, and check that the response status code, and the JSON response are corrects
        mockMvc.perform(put("/api/auth/changepwd")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n"
                        + "  \"token\": \"b136e1d2-0e74-45d4-bf52-c01685623ac7\",\n"
                        + "  \"password\": \"lazos1234\"\n"
                        + "}"))
                .andExpect(status().isBadRequest());

        // we verify that we called findAll method once only on the repo.
        verify(mockUserRepository, times(1)).findBySecret("b136e1d2-0e74-45d4-bf52-c01685623ac7");
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockUserRepository);

    }


}
