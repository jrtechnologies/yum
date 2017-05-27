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

package org.bootcamp;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.transaction.Transactional;
import org.apache.log4j.LogManager;
import org.bootcamp.yum.data.converter.FoodTypeConverter;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Transactional
@Component
public class CmdLineApp implements CommandLineRunner{
    
    private static final Logger LOGGER = Logger.getLogger( CmdLineApp.class.getName() );
    FoodTypeConverter foodTypeConverter = new FoodTypeConverter();
    
    @Override
    public void run(String... args) throws Exception {
        
        
        LogManager.getLogger(CmdLineApp.class).info("Application started");       
        
        LOGGER.log( Level.WARNING, "Application started","");
    }
    
}
    

