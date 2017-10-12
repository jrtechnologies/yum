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

import java.math.BigDecimal;
import java.util.ArrayList;
import com.jrtechnologies.JwtCodec;
import com.jrtechnologies.yum.api.model.Refresh;
import com.jrtechnologies.yum.data.entity.User;
import com.jrtechnologies.yum.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class RefreshTokenService {
    
    @Autowired
    private UserRepository userRep;
    
    public Refresh authRefreshTokenGet() {
        //Retrieve user id
        Long userId = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //Retrieve user roles
        ArrayList<String> roles = (ArrayList) SecurityContextHolder.getContext().getAuthentication().getCredentials();
       
        // the subject should be the ID of the user converted to string
        String subject = Long.toString(userId);
        // add subject and roles for the new token.
        String token = JwtCodec.encode(subject, roles);
        
        BigDecimal balance =null;
        
        User user=userRep.findById(userId);
        if (user!=null) {
            balance = user.getBalance();
        }
        if (balance==null){
            balance = new BigDecimal(0); 
        }
        System.out.println("token: " + token);
        System.out.println("balance: " + balance);
        Refresh refresh = new Refresh();
        refresh.setToken(token);
        refresh.setBalance(balance);
        System.out.println("refresh: " + refresh);
        return refresh; 
    }
}