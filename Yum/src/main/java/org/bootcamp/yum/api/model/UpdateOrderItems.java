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

package org.bootcamp.yum.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.validation.constraints.*;
import org.joda.time.LocalDate;
/**
 * UpdateOrderItems
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-05-15T10:36:20.575+03:00")

public class UpdateOrderItems   {
  @NotNull  
  @JsonProperty("dailyMenuId")
  private Long dailyMenuId = null;
  @NotNull
  @JsonProperty("dailyMenuVersion")
  private Integer dailyMenuVersion = null;
  @NotNull
  @JsonProperty("dailyMenuDate")
  private LocalDate dailyMenuDate = null;

  @JsonProperty("orderItems")
  private List<OrderItem> orderItems = new ArrayList<OrderItem>();

  @JsonProperty("emailRequest")
  private Boolean emailRequest = null;

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public UpdateOrderItems dailyMenuId(Long dailyMenuId) {
    this.dailyMenuId = dailyMenuId;
    return this;
  }

   /**
   * Get dailyMenuId
   * @return dailyMenuId
  **/
  @ApiModelProperty(value = "")
  public Long getDailyMenuId() {
    return dailyMenuId;
  }

  public void setDailyMenuId(Long dailyMenuId) {
    this.dailyMenuId = dailyMenuId;
  }

  public UpdateOrderItems dailyMenuVersion(Integer dailyMenuVersion) {
    this.dailyMenuVersion = dailyMenuVersion;
    return this;
  }

   /**
   * Get dailyMenuVersion
   * @return dailyMenuVersion
  **/
  @ApiModelProperty(value = "")
  public Integer getDailyMenuVersion() {
    return dailyMenuVersion;
  }

  public void setDailyMenuVersion(Integer dailyMenuVersion) {
    this.dailyMenuVersion = dailyMenuVersion;
  }

  public UpdateOrderItems dailyMenuDate(LocalDate dailyMenuDate) {
    this.dailyMenuDate = dailyMenuDate;
    return this;
  }

   /**
   * Get dailyMenuDate
   * @return dailyMenuDate
  **/
  @ApiModelProperty(value = "")
  public LocalDate getDailyMenuDate() {
    return dailyMenuDate;
  }

  public void setDailyMenuDate(LocalDate dailyMenuDate) {
    this.dailyMenuDate = dailyMenuDate;
  }

  public UpdateOrderItems orderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
    return this;
  }

  public UpdateOrderItems addOrderItemsItem(OrderItem orderItemsItem) {
    this.orderItems.add(orderItemsItem);
    return this;
  }

   /**
   * Get orderItems
   * @return orderItems
  **/
  @ApiModelProperty(value = "")
  public List<OrderItem> getOrderItems() {
    return orderItems;
  }

  public void setOrderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
  }

  public UpdateOrderItems emailRequest(Boolean emailRequest) {
    this.emailRequest = emailRequest;
    return this;
  }

   /**
   * Get emailRequest
   * @return emailRequest
  **/
  @ApiModelProperty(value = "")
  public Boolean getEmailRequest() {
    return emailRequest;
  }

  public void setEmailRequest(Boolean emailRequest) {
    this.emailRequest = emailRequest;
  }

  public UpdateOrderItems lastEdit(LastEdit lastEdit) {
    this.lastEdit = lastEdit;
    return this;
  }

   /**
   * Get lastEdit
   * @return lastEdit
  **/
  @ApiModelProperty(value = "")
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
    UpdateOrderItems updateOrderItems = (UpdateOrderItems) o;
    return Objects.equals(this.dailyMenuId, updateOrderItems.dailyMenuId) &&
        Objects.equals(this.dailyMenuVersion, updateOrderItems.dailyMenuVersion) &&
        Objects.equals(this.dailyMenuDate, updateOrderItems.dailyMenuDate) &&
        Objects.equals(this.orderItems, updateOrderItems.orderItems) &&
        Objects.equals(this.emailRequest, updateOrderItems.emailRequest) &&
        Objects.equals(this.lastEdit, updateOrderItems.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dailyMenuId, dailyMenuVersion, dailyMenuDate, orderItems, emailRequest, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateOrderItems {\n");
    
    sb.append("    dailyMenuId: ").append(toIndentedString(dailyMenuId)).append("\n");
    sb.append("    dailyMenuVersion: ").append(toIndentedString(dailyMenuVersion)).append("\n");
    sb.append("    dailyMenuDate: ").append(toIndentedString(dailyMenuDate)).append("\n");
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("    emailRequest: ").append(toIndentedString(emailRequest)).append("\n");
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

