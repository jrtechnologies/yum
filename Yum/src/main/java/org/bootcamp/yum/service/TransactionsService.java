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

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.bootcamp.yum.api.ApiException;
import org.bootcamp.yum.api.model.Transaction;
import org.bootcamp.yum.data.entity.DailyOrder;
import org.bootcamp.yum.data.entity.User;
import org.bootcamp.yum.data.entity.DailyMenu;
import org.bootcamp.yum.data.repository.DailyOrderRepository;
import org.bootcamp.yum.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class TransactionsService {
    
    @Autowired
    private UserRepository userRep;
    @Autowired
    private DailyOrderRepository dailyOrderRep;
    
    public List<Transaction> transactionsIdGet(Long id) throws ApiException {
        
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        //Retrieve user roles
        ArrayList<String> roles = (ArrayList) authentication.getCredentials();
        
        //If user is not admin AND token id is different than id in path  
        if (!roles.contains("admin") && ((Long) authentication.getPrincipal()) !=id){
            throw new ApiException(400, "Bad request");
        }
        
        User user=userRep.findById(id);
        if (user==null) {
            throw new ApiException(404, "User not found");
        }
        List<Transaction> transactions = new ArrayList<>();
        for (org.bootcamp.yum.data.entity.Transaction transactionEntity: user.getTransactions()){
            Transaction transaction =new Transaction();
            transaction.setAmount(transactionEntity.getAmount());
            transaction.setBalance(transactionEntity.getBalance());
            transaction.setDatetime(transactionEntity.getDateTime());
            User sourceUser = transactionEntity.getSourceUser();
            transaction.setFirstName(sourceUser.getFirstName());
            transaction.setLastName(sourceUser.getLastName());
            
            DailyMenu dailyMenu = transactionEntity.getDailyMenu();
            if (dailyMenu !=null) {
                transaction.setMenuDate(dailyMenu.getDate());
            }
            
            Integer orderType = transactionEntity.getOrderType();
            if (orderType!=null) {
                switch (transactionEntity.getOrderType()){
                    case 1:
                        transaction.setOrderType("New");
                        break;
                    case 2:
                        transaction.setOrderType("Modify");
                        break;    
                    case 3:
                        transaction.setOrderType("Cancel");
                        break;   
                    default:    
                        transaction.setOrderType(null);

                }
            }
            transactions.add(transaction);
        }        
        return transactions;
    }
}
