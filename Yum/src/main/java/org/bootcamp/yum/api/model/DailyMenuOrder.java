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

public class DailyMenuOrder   {
  @JsonProperty("orderItems")
  private List<OrderItem> orderItems = new ArrayList<OrderItem>();

  @JsonProperty("dailyMenuDate")
  private LocalDate dailyMenuDate = null;

  @JsonProperty("dailyMenuId")
  private Long dailyMenuId = null;

  public DailyMenuOrder orderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
    return this;
  }

  public DailyMenuOrder addOrderItemsItem(OrderItem orderItemsItem) {
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

  public DailyMenuOrder dailyMenuDate(LocalDate dailyMenuDate) {
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

  public DailyMenuOrder dailyMenuId(Long dailyMenuId) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DailyMenuOrder dailyMenuOrder = (DailyMenuOrder) o;
    return Objects.equals(this.orderItems, dailyMenuOrder.orderItems) &&
        Objects.equals(this.dailyMenuDate, dailyMenuOrder.dailyMenuDate) &&
        Objects.equals(this.dailyMenuId, dailyMenuOrder.dailyMenuId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderItems, dailyMenuDate, dailyMenuId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyMenuOrder {\n");
    
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("    dailyMenuDate: ").append(toIndentedString(dailyMenuDate)).append("\n");
    sb.append("    dailyMenuId: ").append(toIndentedString(dailyMenuId)).append("\n");
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

