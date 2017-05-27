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
 * A daily Menu,  has order checked DTO
 */
@ApiModel(description = "A daily Menu,  has order checked DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

public class DailyMenuChef   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("date")
  private LocalDate date = null;

  @JsonProperty("foods")
  private List<OrderItem> foods = new ArrayList<OrderItem>();

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = new LastEdit();

  public DailyMenuChef id(Long id) {
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

  public DailyMenuChef date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Get date
   * @return date
  **/
  @ApiModelProperty(value = "")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public DailyMenuChef foods(List<OrderItem> foods) {
    this.foods = foods;
    return this;
  }

  public DailyMenuChef addFoodsItem(OrderItem foodsItem) {
    this.foods.add(foodsItem);
    return this;
  }

   /**
   * Get foods
   * @return foods
  **/
  @ApiModelProperty(value = "")
  public List<OrderItem> getFoods() {
    return foods;
  }

  public void setFoods(List<OrderItem> foods) {
    this.foods = foods;
  }

  public DailyMenuChef lastEdit(LastEdit lastEdit) {
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
    DailyMenuChef dailyMenuChef = (DailyMenuChef) o;
    return Objects.equals(this.id, dailyMenuChef.id) &&
        Objects.equals(this.date, dailyMenuChef.date) &&
        Objects.equals(this.foods, dailyMenuChef.foods) &&
        Objects.equals(this.lastEdit, dailyMenuChef.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, date, foods, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyMenuChef {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    foods: ").append(toIndentedString(foods)).append("\n");
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

