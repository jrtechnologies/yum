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

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.joda.time.LocalDate;
/**
 * Daily order summary DTO
 */
@ApiModel(description = "Daily order summary DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

public class DailyOrderSummary   {
    
  @JsonProperty("date")
  private LocalDate date = null;
    
  @JsonProperty("orderItems")
  private List<OrderItem> orderItems = new ArrayList<OrderItem>();

  @JsonProperty("userOrders")
  private List<UserOrder> userOrders = new ArrayList<UserOrder>();

  public DailyOrderSummary orderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
    return this;
  }

  public DailyOrderSummary addOrderItemsItem(OrderItem orderItemsItem) {
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

  public DailyOrderSummary userOrders(List<UserOrder> userOrders) {
    this.userOrders = userOrders;
    return this;
  }

  public DailyOrderSummary addUserOrdersItem(UserOrder userOrdersItem) {
    this.userOrders.add(userOrdersItem);
    return this;
  }

   /**
   * Get userOrders
   * @return userOrders
  **/
  @ApiModelProperty(value = "")
    public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public List<UserOrder> getUserOrders() {
    return userOrders;
  }

  public void setUserOrders(List<UserOrder> userOrders) {
    this.userOrders = userOrders;
  }

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DailyOrderSummary dailyOrderSummary = (DailyOrderSummary) o;
    return Objects.equals(this.date, dailyOrderSummary.date) &&
        Objects.equals(this.orderItems, dailyOrderSummary.orderItems) &&
        Objects.equals(this.userOrders, dailyOrderSummary.userOrders);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderItems, userOrders);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyOrderSummary {\n");
    
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("    userOrders: ").append(toIndentedString(userOrders)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
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

