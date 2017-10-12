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

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.jrtechnologies.yum.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;


@Component
public class JwtFilter extends GenericFilterBean  {

    final private String allow, reject;
    
    private static UserRepository userRep;
    
    @Autowired
    public JwtFilter(UserRepository userRep) {
        JwtFilter.userRep = userRep;
        allow="";
        reject="";
    }

    public JwtFilter(String allow, String reject) {
        this.allow = allow;
        this.reject = reject;
    }

    @Override
    public void doFilter(final ServletRequest req, final ServletResponse res,
                         final FilterChain chain) throws IOException, ServletException
    {
        final HttpServletRequest request = (HttpServletRequest) req;
        final HttpServletResponse response = (HttpServletResponse) res;

        if (request.getRequestURI().startsWith(allow) && !request.getRequestURI().startsWith(reject)
                && !request.getRequestURI().startsWith("/api/swagger-ui") && !request.getRequestURI().equals("/api") 
                && !request.getRequestURI().startsWith("/api/settings/picture/token")
                && !request.getRequestURI().matches("\\/api\\/users\\/\\d+\\/picture\\/token(.)*") 
                ) {

            
            final String authHeader = request.getHeader("Authorization");
            try {
                if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                    throw new BadCredentialsException("Missing or invalid Authorization header");
                }
                final String token = authHeader.substring(7); // The part after "Bearer "
                try {
                    //final Claims claims = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody();
                    final Claims claims = JwtCodec.decode(token);
                            
                    // Create our Authentication and let Spring know about it
                    List<String> roles = (List<String>)claims.get("roles");
                    // retrieve role from db based on the id from the token 
                    String role = userRep.findRole(Long.parseLong(claims.getSubject()));
                  
                    // compare highest role form token to role from db and response 401 if different
                    if (roles.contains("admin")){
                        if (!role.equals("admin")){
                            throw new BadCredentialsException("Invalid role");
                        }
                    } else if (roles.contains("chef")){
                        if (!role.equals("chef")){
                            throw new BadCredentialsException("Invalid role");
                        }
                    } else {
                        if (!role.equals("hungry")){
                            throw new BadCredentialsException("Invalid role");
                        }
                    }
                    
                    List<SimpleGrantedAuthority> newList = new ArrayList<>() ;
                    for (String myRole : roles) { 
                      newList.add(new SimpleGrantedAuthority(myRole)); 
                    }
                    Authentication auth = new AuthenticationToken(Long.parseLong(claims.getSubject()),roles,newList);
                    SecurityContextHolder.getContext().setAuthentication(auth); 
                }
                catch (final JwtException e){
                    throw new BadCredentialsException("Invalid token");
                }
            }
            catch(BadCredentialsException e) {
                SecurityContextHolder.clearContext();
                response.setHeader("Access-Control-Allow-Origin", "*");
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
              
                return;
            }
        }
        chain.doFilter(req, res);
    }
}