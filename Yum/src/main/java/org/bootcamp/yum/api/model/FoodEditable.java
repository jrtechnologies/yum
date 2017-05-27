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
import java.util.Objects;
import javax.validation.constraints.*;
/**
 * Food,  checked if editable
 */
@ApiModel(description = "Food,  checked if editable")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T16:58:58.888+03:00")

public class FoodEditable   {
    
  @NotNull
  @JsonProperty("foodItem")
  private Food foodItem = null;

  @JsonProperty("editable")
  private Boolean editable = null;

  @NotNull
  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public FoodEditable foodItem(Food foodItem) {
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

  public FoodEditable editable(Boolean editable) {
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

  public FoodEditable lastEdit(LastEdit lastEdit) {
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
    FoodEditable foodEditable = (FoodEditable) o;
    return Objects.equals(this.foodItem, foodEditable.foodItem) &&
        Objects.equals(this.editable, foodEditable.editable) &&
        Objects.equals(this.lastEdit, foodEditable.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foodItem, editable, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FoodEditable {\n");
    
    sb.append("    foodItem: ").append(toIndentedString(foodItem)).append("\n");
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

