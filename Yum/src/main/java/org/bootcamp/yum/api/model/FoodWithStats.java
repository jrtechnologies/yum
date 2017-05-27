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
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import javax.validation.constraints.*;
/**
 * Food, statistics  included DTO
 */
@ApiModel(description = "Food, statistics  included DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T16:17:45.711+03:00")

public class FoodWithStats   {
    
  @NotNull  
  @JsonProperty("foodItem")
  private Food foodItem = null;

  @JsonProperty("stats")
  private Map<String, Statistic> stats = new HashMap<String, Statistic>();

  @JsonProperty("editable")
  private Boolean editable = null;

  @NotNull
  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public FoodWithStats foodItem(Food foodItem) {
    this.foodItem = foodItem;
    return this;
  }

   /**
   * Get foodItem
   * @return foodItem
  **/
  @ApiModelProperty(value = "")
  public Food getFoodItem() {
    return foodItem;
  }

  public void setFoodItem(Food foodItem) {
    this.foodItem = foodItem;
  }

  public FoodWithStats stats(Map<String, Statistic> stats) {
    this.stats = stats;
    return this;
  }

  public FoodWithStats putStatsItem(String key, Statistic statsItem) {
    this.stats.put(key, statsItem);
    return this;
  }

   /**
   * Get stats
   * @return stats
  **/
  @ApiModelProperty(value = "")
  public Map<String, Statistic> getStats() {
    return stats;
  }

  public void setStats(Map<String, Statistic> stats) {
    this.stats = stats;
  }

  public FoodWithStats editable(Boolean editable) {
    this.editable = editable;
    return this;
  }

   /**
   * Get editable
   * @return editable
  **/
  @ApiModelProperty(value = "")
  public Boolean getEditable() {
    return editable;
  }

  public void setEditable(Boolean editable) {
    this.editable = editable;
  }

  public FoodWithStats lastEdit(LastEdit lastEdit) {
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
    FoodWithStats foodWithStats = (FoodWithStats) o;
    return Objects.equals(this.foodItem, foodWithStats.foodItem) &&
        Objects.equals(this.stats, foodWithStats.stats) &&
        Objects.equals(this.editable, foodWithStats.editable) &&
        Objects.equals(this.lastEdit, foodWithStats.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foodItem, stats, editable, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FoodWithStats {\n");
    
    sb.append("    foodItem: ").append(toIndentedString(foodItem)).append("\n");
    sb.append("    stats: ").append(toIndentedString(stats)).append("\n");
    sb.append("    editable: ").append(toIndentedString(editable)).append("\n");
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

