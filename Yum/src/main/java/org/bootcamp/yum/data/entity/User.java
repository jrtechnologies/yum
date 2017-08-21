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
package org.bootcamp.yum.data.entity;

import java.util.List;
import java.util.Objects;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import static javax.persistence.FetchType.LAZY;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;
import org.bootcamp.yum.data.converter.LocalDateAttributeConverter;
import org.bootcamp.yum.data.converter.LocalDateTimeAttributeConverter;
import org.bootcamp.yum.data.converter.UserRoleConverter;
import org.bootcamp.yum.data.enums.UserRole;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.LocalTime;
@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToMany(mappedBy = "user")
    private List<DailyOrder> dailyOrders;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "email")
    private String email;

    @Column(name = "role")
    @Convert(converter = UserRoleConverter.class)
    private UserRole userRole;

    @Column(name = "password")
    private String password;

    @Column(name = "registration_date")
    @Convert(converter = LocalDateAttributeConverter.class)
    private LocalDate registrationDate;

    @Column(name = "approved")
    private boolean approved;

    @Column(name = "last_edit", updatable = false)
    @Convert(converter = LocalDateTimeAttributeConverter.class)
    private DateTime lastEdit;

    @Version
    @Column(name = "version")
    private int version;

    @Column(name = "secret")
    private String secret;

    @Column(name = "secret_creation")
    @Convert(converter = LocalDateTimeAttributeConverter.class)
    private DateTime secretCreation;

    @Basic(fetch=LAZY)
    @Lob @Column(name="picture")
    private byte[] picture;
    
    @Column(name = "ldap_id")
    private byte[] ldapId;
    
    public User() {
    }

    //Use for mockups
    public User(long id, List<DailyOrder> dailyOrders, String lastName, String firstName, String email, UserRole userRole, String password, LocalDate registrationDate, boolean approved, DateTime lastEdit, int version) {
        this.id = id;
        this.dailyOrders = dailyOrders;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.userRole = userRole;
        this.password = password;
        this.registrationDate = registrationDate;
        this.approved = approved;
        this.lastEdit = lastEdit;
        this.version = version;
    }
 
    public boolean hasPicture(){
        return this.picture!=null;        
    }
    
    public User(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
    }
    
    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    public List<DailyOrder> getDailyOrders() {
        return dailyOrders;
    }

    public void setDailyOrders(List<DailyOrder> dailyOrders) {
        this.dailyOrders = dailyOrders;
    }

    public DateTime getLastEdit() {
        return lastEdit;
    }

    public void setLastEdit(DateTime lastEdit) {
        this.lastEdit = lastEdit;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public DateTime getSecretCreation() {
        return secretCreation;
    }

    public void setSecretCreation(DateTime secretCreation) {
        this.secretCreation = secretCreation;
    }

    public boolean hasNonFinalOrders(LocalTime deadlineTime) {
        if (dailyOrders == null) {
            return false;
        } else {
            for (DailyOrder dailyOrder : dailyOrders) {
                if (!dailyOrder.isFinalised(deadlineTime)) {
                    return true;
                }
            }
            return false;
        }
    }
    public boolean hasFinalOrders(LocalTime deadlineTime) {
        if (dailyOrders == null) {
            return false;
        } else {
            for (DailyOrder dailyOrder : dailyOrders) {
                if (dailyOrder.isFinalised(deadlineTime)) {
                    return true;
                }
            }
            return false;
        }
    }
    //Return user order status Orders =>(past = 1 | mix = 2 | future = 3) 
    public int getUsersOrdersStatus(){
        //Check if user haven't orders.
        if (this.getDailyOrders().isEmpty()) {return 0;} 
        //Check if user orders is Final or not.
        if (this.hasFinalOrders(LocalTime.now()) && this.hasNonFinalOrders(LocalTime.now())) {
            return 2;
        } else if (this.hasFinalOrders(LocalTime.now())) {
            return 1;
        } else {
            return 3;
        }
    }
    public boolean isSuperAdmin() {
        if (id==1){
            return true;
        } else {
            return false;
        }    
        
    }

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }
    
    public int getPictureLength(){
        return this.picture.length;
    }

    public byte[] getLdapId() {
        return ldapId;
    }

    public void setLdapId(byte[] ldapId) {
        this.ldapId = ldapId;
    }
    
    
    @Override
    public int hashCode() {
        int hash = 5;
        hash = 11 * hash + (int) (this.id ^ (this.id >>> 32));
        hash = 11 * hash + Objects.hashCode(this.dailyOrders);
        hash = 11 * hash + Objects.hashCode(this.lastName);
        hash = 11 * hash + Objects.hashCode(this.firstName);
        hash = 11 * hash + Objects.hashCode(this.email);
        hash = 11 * hash + Objects.hashCode(this.userRole);
        hash = 11 * hash + Objects.hashCode(this.password);
        hash = 11 * hash + Objects.hashCode(this.registrationDate);
        hash = 11 * hash + (this.approved ? 1 : 0);
        hash = 11 * hash + Objects.hashCode(this.lastEdit);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        return obj.hashCode() == hashCode();
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", dailyOrders=" + dailyOrders + ", lastName=" + lastName + ", firstName=" + firstName + ", email=" + email + ", userRole=" + userRole + ", password=" + password + ", registrationDate=" + registrationDate + ", approved=" + approved + '}';
    }
}
