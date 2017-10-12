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
package com.jrtechnologies.tasks;

import java.text.SimpleDateFormat;
import java.util.concurrent.ScheduledFuture;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.Trigger;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

 

//https://stackoverflow.com/questions/37335351/schedule-a-task-with-cron-which-allows-dynamic-update

//@Component 
@Configuration
public class ScheduledTasks implements SchedulingConfigurer{
      
   
    public String cron;
    
    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    
    private static ScheduledTaskRegistrar taskRegistrar; 
    
    private static ScheduledFuture scheduleFuture;  
    
    
    public void setScheduledTask(Runnable task, Trigger trigger ){
        
        if(this.scheduleFuture!=null){
            this.scheduleFuture.cancel(true);
        }
        
        TaskScheduler taskScheduler = this.taskRegistrar.getScheduler(); 
        this.scheduleFuture = taskScheduler.schedule(task, trigger);
    }
    
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {        
        this.taskRegistrar = taskRegistrar;        
        //taskRegistrar.setTaskScheduler(poolScheduler()); 
          
    }

    
//Enable thread pool
    
//    @Bean
//    public TaskScheduler poolScheduler() { 
//        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
//        scheduler.setThreadNamePrefix("poolScheduler");
//        scheduler.setPoolSize(10);
//        return scheduler; 
//    }
    
   
}
