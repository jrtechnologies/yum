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


package com.jrtechnologies.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import com.jrtechnologies.yum.api.model.LastEdit;
import org.joda.time.LocalDate;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * User DTO
 */
@ApiModel(description = "User DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-23T10:05:36.363+03:00")

public class User   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("lastName")
  private String lastName = null;

  @JsonProperty("firstName")
  private String firstName = null;

  @JsonProperty("email")
  private String email = null;

  @JsonProperty("userName")
  private String userName = null;

  @JsonProperty("role")
  private String role = null;

  @JsonProperty("registrationDate")
  private LocalDate registrationDate = null;

  @JsonProperty("approved")
  private Boolean approved = null;

  @JsonProperty("hasPicture")
  private Boolean hasPicture = null;

  @JsonProperty("balance")
  private BigDecimal balance = null;

  @JsonProperty("orderNtf")
  private Boolean orderNtf = null;

  @JsonProperty("orderModifyNtf")
  private Boolean orderModifyNtf = null;

  @JsonProperty("adminOrderNtf")
  private Boolean adminOrderNtf = null;

  @JsonProperty("adminOrderModifyNtf")
  private Boolean adminOrderModifyNtf = null;

  @JsonProperty("balanceNtf")
  private Boolean balanceNtf = null;

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public User id(Long id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public User lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @ApiModelProperty(value = "")


  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public User firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @ApiModelProperty(value = "")


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public User email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(value = "")


  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public User userName(String userName) {
    this.userName = userName;
    return this;
  }

   /**
   * Get userName
   * @return userName
  **/
  @ApiModelProperty(value = "")


  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public User role(String role) {
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @ApiModelProperty(value = "")


  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public User registrationDate(LocalDate registrationDate) {
    this.registrationDate = registrationDate;
    return this;
  }

   /**
   * Get registrationDate
   * @return registrationDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getRegistrationDate() {
    return registrationDate;
  }

  public void setRegistrationDate(LocalDate registrationDate) {
    this.registrationDate = registrationDate;
  }

  public User approved(Boolean approved) {
    this.approved = approved;
    return this;
  }

   /**
   * Get approved
   * @return approved
  **/
  @ApiModelProperty(value = "")


  public Boolean getApproved() {
    return approved;
  }

  public void setApproved(Boolean approved) {
    this.approved = approved;
  }

  public User hasPicture(Boolean hasPicture) {
    this.hasPicture = hasPicture;
    return this;
  }

   /**
   * Get hasPicture
   * @return hasPicture
  **/
  @ApiModelProperty(value = "")


  public Boolean getHasPicture() {
    return hasPicture;
  }

  public void setHasPicture(Boolean hasPicture) {
    this.hasPicture = hasPicture;
  }

  public User balance(BigDecimal balance) {
    this.balance = balance;
    return this;
  }

   /**
   * Get balance
   * @return balance
  **/
  @ApiModelProperty(value = "")

  @Valid

  public BigDecimal getBalance() {
    return balance;
  }

  public void setBalance(BigDecimal balance) {
    this.balance = balance;
  }

  public User orderNtf(Boolean orderNtf) {
    this.orderNtf = orderNtf;
    return this;
  }

   /**
   * Get orderNtf
   * @return orderNtf
  **/
  @ApiModelProperty(value = "")


  public Boolean getOrderNtf() {
    return orderNtf;
  }

  public void setOrderNtf(Boolean orderNtf) {
    this.orderNtf = orderNtf;
  }

  public User orderModifyNtf(Boolean orderModifyNtf) {
    this.orderModifyNtf = orderModifyNtf;
    return this;
  }

   /**
   * Get orderModifyNtf
   * @return orderModifyNtf
  **/
  @ApiModelProperty(value = "")


  public Boolean getOrderModifyNtf() {
    return orderModifyNtf;
  }

  public void setOrderModifyNtf(Boolean orderModifyNtf) {
    this.orderModifyNtf = orderModifyNtf;
  }

  public User adminOrderNtf(Boolean adminOrderNtf) {
    this.adminOrderNtf = adminOrderNtf;
    return this;
  }

   /**
   * Get adminOrderNtf
   * @return adminOrderNtf
  **/
  @ApiModelProperty(value = "")


  public Boolean getAdminOrderNtf() {
    return adminOrderNtf;
  }

  public void setAdminOrderNtf(Boolean adminOrderNtf) {
    this.adminOrderNtf = adminOrderNtf;
  }

  public User adminOrderModifyNtf(Boolean adminOrderModifyNtf) {
    this.adminOrderModifyNtf = adminOrderModifyNtf;
    return this;
  }

   /**
   * Get adminOrderModifyNtf
   * @return adminOrderModifyNtf
  **/
  @ApiModelProperty(value = "")


  public Boolean getAdminOrderModifyNtf() {
    return adminOrderModifyNtf;
  }

  public void setAdminOrderModifyNtf(Boolean adminOrderModifyNtf) {
    this.adminOrderModifyNtf = adminOrderModifyNtf;
  }

  public User balanceNtf(Boolean balanceNtf) {
    this.balanceNtf = balanceNtf;
    return this;
  }

   /**
   * Get balanceNtf
   * @return balanceNtf
  **/
  @ApiModelProperty(value = "")


  public Boolean getBalanceNtf() {
    return balanceNtf;
  }

  public void setBalanceNtf(Boolean balanceNtf) {
    this.balanceNtf = balanceNtf;
  }

  public User lastEdit(LastEdit lastEdit) {
    this.lastEdit = lastEdit;
    return this;
  }

   /**
   * Get lastEdit
   * @return lastEdit
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LastEdit getLastEdit() {
    return lastEdit;
  }

  public void setLastEdit(LastEdit lastEdit) {
    this.lastEdit = lastEdit;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return Objects.equals(this.id, user.id) &&
        Objects.equals(this.lastName, user.lastName) &&
        Objects.equals(this.firstName, user.firstName) &&
        Objects.equals(this.email, user.email) &&
        Objects.equals(this.userName, user.userName) &&
        Objects.equals(this.role, user.role) &&
        Objects.equals(this.registrationDate, user.registrationDate) &&
        Objects.equals(this.approved, user.approved) &&
        Objects.equals(this.hasPicture, user.hasPicture) &&
        Objects.equals(this.balance, user.balance) &&
        Objects.equals(this.orderNtf, user.orderNtf) &&
        Objects.equals(this.orderModifyNtf, user.orderModifyNtf) &&
        Objects.equals(this.adminOrderNtf, user.adminOrderNtf) &&
        Objects.equals(this.adminOrderModifyNtf, user.adminOrderModifyNtf) &&
        Objects.equals(this.balanceNtf, user.balanceNtf) &&
        Objects.equals(this.lastEdit, user.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, lastName, firstName, email, userName, role, registrationDate, approved, hasPicture, balance, orderNtf, orderModifyNtf, adminOrderNtf, adminOrderModifyNtf, balanceNtf, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class User {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    userName: ").append(toIndentedString(userName)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    registrationDate: ").append(toIndentedString(registrationDate)).append("\n");
    sb.append("    approved: ").append(toIndentedString(approved)).append("\n");
    sb.append("    hasPicture: ").append(toIndentedString(hasPicture)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    orderNtf: ").append(toIndentedString(orderNtf)).append("\n");
    sb.append("    orderModifyNtf: ").append(toIndentedString(orderModifyNtf)).append("\n");
    sb.append("    adminOrderNtf: ").append(toIndentedString(adminOrderNtf)).append("\n");
    sb.append("    adminOrderModifyNtf: ").append(toIndentedString(adminOrderModifyNtf)).append("\n");
    sb.append("    balanceNtf: ").append(toIndentedString(balanceNtf)).append("\n");
    sb.append("    lastEdit: ").append(toIndentedString(lastEdit)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

