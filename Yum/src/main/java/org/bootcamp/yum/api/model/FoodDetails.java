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
import java.util.Objects;
import javax.validation.constraints.*;
/**
 * FoodDetails
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

public class FoodDetails   {
  @NotNull
  @JsonProperty("foodName")
  private String foodName = null;
  
  @NotNull
  @JsonProperty("foodType")
  private String foodType = null;

  @JsonProperty("description")
  private String description = null;

  @NotNull
  @JsonProperty("price")
  private Double price = null;

  public FoodDetails foodName(String foodName) {
    this.foodName = foodName;
    return this;
  }

   /**
   * Get foodName
   * @return foodName
  **/
  @ApiModelProperty(value = "")
  public String getFoodName() {
    return foodName;
  }

  public void setFoodName(String foodName) {
    this.foodName = foodName;
  }

  public FoodDetails foodType(String foodType) {
    this.foodType = foodType;
    return this;
  }

   /**
   * Get foodType
   * @return foodType
  **/
  @ApiModelProperty(value = "")
  public String getFoodType() {
    return foodType;
  }

  public void setFoodType(String foodType) {
    this.foodType = foodType;
  }

  public FoodDetails description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(value = "")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public FoodDetails price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Get price
   * @return price
  **/
  @ApiModelProperty(value = "")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FoodDetails foodDetails = (FoodDetails) o;
    return Objects.equals(this.foodName, foodDetails.foodName) &&
        Objects.equals(this.foodType, foodDetails.foodType) &&
        Objects.equals(this.description, foodDetails.description) &&
        Objects.equals(this.price, foodDetails.price);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foodName, foodType, description, price);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FoodDetails {\n");
    
    sb.append("    foodName: ").append(toIndentedString(foodName)).append("\n");
    sb.append("    foodType: ").append(toIndentedString(foodType)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
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

