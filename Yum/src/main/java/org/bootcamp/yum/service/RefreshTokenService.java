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

package org.bootcamp.yum.service;

import java.util.ArrayList;
import org.bootcamp.JwtCodec;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class RefreshTokenService {
    
    @Autowired
    private UserRepository userRep;
    
    public String authRefreshTokenGet() throws ApiException {
        //Retrieve user id
        Long userId = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        
        //Retrieve user roles from db
        String role= userRep.findRole(userId);
        
        ArrayList<String> roles = new ArrayList<>();
        
        switch (role) {
            case "hungry":
                roles.add("hungry");
                break;
            case "chef":
                roles.add("hungry");
                roles.add("chef");
                break;
            case "admin":
                roles.add("hungry");
                roles.add("chef");
                roles.add("admin");
                break;
            default:
                throw new ApiException(404, "No valid role found");
        }        
       
        // the subject should be the ID of the user converted to string
        String subject = Long.toString(userId);
        // add subject and roles for the new token.
        String token = JwtCodec.encode(subject, roles);
        return token;
    }
}
