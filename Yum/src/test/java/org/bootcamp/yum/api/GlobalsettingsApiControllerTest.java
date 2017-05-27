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

import org.bootcamp.test.MockAuthRule;
import org.bootcamp.test.annotation.WithMockAuth;
import org.bootcamp.yum.data.entity.Settings;
import org.bootcamp.yum.data.repository.SettingsRepository;
import org.bootcamp.yum.service.GlobalsettingsService;
import static org.hamcrest.Matchers.is;
import org.joda.time.DateTime;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

/**
 *
 * @author user
 */
@RunWith(MockitoJUnitRunner.class)
public class GlobalsettingsApiControllerTest
{
    @Rule
    public final MockAuthRule mockAuth = new MockAuthRule();

    @InjectMocks
    private final GlobalsettingsService globalsettingsService = new GlobalsettingsService();

    @Mock
    private SettingsRepository mockSettingsRepository;

    private MockMvc mockMvc;
    
    public GlobalsettingsApiControllerTest()
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
        mockMvc = MockMvcBuilders.standaloneSetup(new GlobalsettingsApiController(globalsettingsService)).setControllerAdvice(new ExceptionControllerAdvice()).build();
    }
    
    private static Settings mockSettings;
    
    
    @BeforeClass
    public static void initMock()
    {
        mockSettings = new Settings(1);
        
        mockSettings.setCurrency("Euro");
        mockSettings.setDeadline(new LocalTime(12, 59, 59));
        mockSettings.setLastEdit(new DateTime(2017, 5, 26, 18, 0));
        mockSettings.setNotes("Some notes");
        mockSettings.setPolicy("Some policy");
        mockSettings.setTos("Some terms of service");
        mockSettings.setVersion(0);
    }
    
    @After
    public void tearDown()
    {
    }

    /**
     * Test of globalsettingsGet method, of class GlobalsettingsApiController.
     */
    @Test
    @WithMockAuth(id="1")
    public void testGlobalsettingsGet() throws Exception
    {
        
        given(mockSettingsRepository.findById(1)).willReturn(mockSettings);
        
        mockMvc.perform(get("/api/globalsettings"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.deadline", is("12:59:59.000")))
                .andExpect(jsonPath("$.currency", is("Euro")))
                .andExpect(jsonPath("$.notes", is("Some notes")))
                .andExpect(jsonPath("$.tos", is("Some terms of service")))
                .andExpect(jsonPath("$.policy", is("Some policy")))
                .andExpect(jsonPath("$.lastEdit.timeStamp", is(mockSettings.getLastEdit().getMillis())))
                .andExpect(jsonPath("$.lastEdit.version", is(0)));
        
        // we verify that we called findAll method once only on the repo.
        verify(mockSettingsRepository, times(1)).findById(1);
        
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockSettingsRepository);
    }

    /**
     * Test of globalsettingsPut method, of class GlobalsettingsApiController.
     */
    @Test
    @WithMockAuth(id="1")
    public void testGlobalsettingsPut() throws Exception
    {
        given(mockSettingsRepository.findById(1)).willReturn(mockSettings);
        
        mockMvc.perform(put("/api/globalsettings")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n" +
                    "  \"deadline\": \"13:00:00.000\",\n" +
                    "  \"currency\": \"string\",\n" +
                    "  \"notes\": \"string\",\n" +
                    "  \"tos\": \"string\",\n" +
                    "  \"policy\": \"string\",\n" +
                    "  \"lastEdit\": {\n" +
                    "    \"timeStamp\": \"2017-05-03T09:54:00.741Z\",\n" +
                    "    \"version\": 0\n" +
                    "  }\n" +
                    "}")
        ).andExpect(status().isNoContent());
        
        // we verify that we called findAll method once only on the repo.
        verify(mockSettingsRepository, times(1)).findById(1);
        
        // we verify that we didnt call anything else on the repo
        verifyNoMoreInteractions(mockSettingsRepository);
    }
    
    @Test
    public void testGlobalsettingsPut_400_BadRequest() throws Exception
    {
        given(mockSettingsRepository.findById(1)).willReturn(mockSettings);

        mockMvc.perform(put("/api/globalsettings")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{\n" +
                    "  \n" +
                    "  \"lastEdit\": {\n" +
                    "\n" +
                    "    \"version\": 0\n" +
                    "  }\n" +
                    "}")
        ).andExpect(status().isBadRequest())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8));

        // we verify that we called findAll method once only on the repo.
        verify(mockSettingsRepository, times(1)).findById(1);
    }
    
}
