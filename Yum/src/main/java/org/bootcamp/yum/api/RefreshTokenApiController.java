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


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.bootcamp.yum.service.RefreshTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-08-24T12:11:06.533+03:00")

@Controller
public class RefreshTokenApiController implements RefreshTokenApi {

    @Autowired
    private RefreshTokenService refreshTokenService;

    @Override
    @PreAuthorize("hasAuthority('hungry')")
    public ResponseEntity<String> refreshTokenGet() {
        return new ResponseEntity<>(refreshTokenService.authRefreshTokenGet(), HttpStatus.OK);
    }

}
