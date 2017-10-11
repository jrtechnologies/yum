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
package com.jrtechnologies.yum.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import com.jrtechnologies.yum.api.ApiException;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    
    @Autowired
    private EmailService emailService;
    
    public void reportDayPost(String dayStr) throws ApiException {
        
        //Decode & Validate month request
        String patternString = "^(\\d{4})-(\\d{2})-(\\d{2})$";
        Pattern pattern =  Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(dayStr);
        
        if (!matcher.matches()) { 
            throw new ApiException(400, "Bad request of date format ex. 2017-03-01");
        }
        
        LocalDate day = new LocalDate();
        
        try{ 
           day = new LocalDate(dayStr);
        }
        catch(Exception e){
            throw new ApiException(400, "Bad request of date format ex. 2017-03-28");
        }
        
        emailService.sendOrderSummary(day);
    }
    
}
