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

import io.swagger.annotations.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.OptimisticLockException;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import org.bootcamp.yum.api.model.GlobalSettings;
import org.bootcamp.yum.api.model.Holidays;
import org.bootcamp.yum.service.GlobalsettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

@Controller
public class GlobalsettingsApiController implements GlobalsettingsApi {

    private GlobalsettingsService globalsettingsService;

    @Autowired
    public GlobalsettingsApiController(GlobalsettingsService globalsettingsService) {
        this.globalsettingsService = globalsettingsService;
    }

    @Override
    //@PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> globalsettingsGet() throws ApiException{
       
        return new ResponseEntity<Object>(globalsettingsService.globalsettingsGet() , HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    @Transactional
    public ResponseEntity<Object> globalsettingsPut(@ApiParam(value = "The global settings to be updated" ,required=true ) @RequestBody GlobalSettings settings) throws ApiException{
        
        try {
            globalsettingsService.globalsettingsPut(settings);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (OptimisticLockException ex) {
            try {
                GlobalSettings globalSettings = globalsettingsService.globalsettingsGet();
                throw new ConcurrentModificationException(409, "Concurrent modification error.", globalSettings);
            } catch (ApiException ex1) {
                Logger.getLogger(SettingsApiController.class.getName()).log(Level.SEVERE, null, ex1);
                throw new ApiException(500, "Concurrent modification exception: internal error");
            }
        }

    }
    
    @Override
    public ResponseEntity<Holidays> globalsettingsHolidaysYearGet( @Min(2000) @Max(2100)@ApiParam(value = "",required=true ) @PathVariable("year") Integer year) throws ApiException {        
        return new ResponseEntity<Holidays>(globalsettingsService.getHolidays(year), HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<Object> globalsettingsHolidaysYearPost( @Min(2000) @Max(2100)@ApiParam(value = "",required=true ) @PathVariable("year") Integer year,
        @ApiParam(value = "The holidays to set" ,required=true )  @Valid @RequestBody Holidays holidays)  throws ApiException {
        try {
             
        globalsettingsService.setHolidays(year, holidays);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        
        } catch (OptimisticLockException ex) {
            try {
                Holidays lastHolidays = globalsettingsService.getHolidays(year);
                throw new ConcurrentModificationException(409, "Concurrent modification error.", lastHolidays);
            } catch (ApiException ex1) {
                Logger.getLogger(SettingsApiController.class.getName()).log(Level.SEVERE, null, ex1);
                throw new ApiException(500, "Concurrent modification exception: internal error");
            }
        }    
        
    }
}
