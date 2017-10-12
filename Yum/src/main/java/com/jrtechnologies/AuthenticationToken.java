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

package com.jrtechnologies;

import java.util.List;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class AuthenticationToken extends AbstractAuthenticationToken {

    private Long uid;
    List<String> roles;
    public AuthenticationToken(Long uid, List<String> roles,List<SimpleGrantedAuthority> authorities){

        super(authorities);
        this.uid = uid;
        this.roles = roles;

    }
    @Override
    public Object getCredentials() {
        return roles;
    }
    @Override
    public Object getPrincipal() {
        return uid;
    }
}