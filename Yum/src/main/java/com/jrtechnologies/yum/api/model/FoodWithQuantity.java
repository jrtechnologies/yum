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
import java.util.Objects;
import javax.validation.constraints.*;
/**
 * Food with quantity
 */
@ApiModel(description = "Food with quantity")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

public class FoodWithQuantity   {
  @NotNull
  @JsonProperty("food")
  private Food food = null;

  @NotNull
  @JsonProperty("quantity")
  private Integer quantity = null;

  public FoodWithQuantity food(Food food) {
    this.food = food;
    return this;
  }

   /**
   * Get food
   * @return food
  **/
  @ApiModelProperty(value = "")
  public Food getFood() {
    return food;
  }

  public void setFood(Food food) {
    this.food = food;
  }

  public FoodWithQuantity quantity(Integer quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Get quantity
   * @return quantity
  **/
  @ApiModelProperty(value = "")
  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FoodWithQuantity foodWithQuantity = (FoodWithQuantity) o;
    return Objects.equals(this.food, foodWithQuantity.food) &&
        Objects.equals(this.quantity, foodWithQuantity.quantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(food, quantity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FoodWithQuantity {\n");
    
    sb.append("    food: ").append(toIndentedString(food)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
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

