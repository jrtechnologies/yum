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
/**
 * FoodsPage
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-05-08T13:31:38.721+03:00")

public class FoodsPage   {
  @JsonProperty("totalElements")
  private Long totalElements = null;

  @JsonProperty("totalPages")
  private Long totalPages = null;

  @JsonProperty("foods")
  private List<FoodWithStats> foods = new ArrayList<FoodWithStats>();

  @JsonProperty("foods_version")
  private int foods_version = 0;
  
  public FoodsPage totalElements(Long totalElements) {
    this.totalElements = totalElements;
    return this;
  }

   /**
   * Get totalElements
   * @return totalElements
  **/
  @ApiModelProperty(value = "")
  public Long getTotalElements() {
    return totalElements;
  }

  public void setTotalElements(Long totalElements) {
    this.totalElements = totalElements;
  }

  public FoodsPage totalPages(Long totalPages) {
    this.totalPages = totalPages;
    return this;
  }

   /**
   * Get totalPages
   * @return totalPages
  **/
  @ApiModelProperty(value = "")
  public Long getTotalPages() {
    return totalPages;
  }

  public void setTotalPages(Long totalPages) {
    this.totalPages = totalPages;
  }

  public FoodsPage foods(List<FoodWithStats> foods) {
    this.foods = foods;
    return this;
  }

  public FoodsPage addFoodsItem(FoodWithStats foodsItem) {
    this.foods.add(foodsItem);
    return this;
  }

   /**
   * Get foods
   * @return foods
  **/
  @ApiModelProperty(value = "")
  public List<FoodWithStats> getFoods() {
    return foods;
  }

  public void setFoods(List<FoodWithStats> foods) {
    this.foods = foods;
  }

    public int getFoods_version() {
        return foods_version;
    }

    public void setFoods_version(int foods_version) {
        this.foods_version = foods_version;
    }

  

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FoodsPage foodsPage = (FoodsPage) o;
    return Objects.equals(this.totalElements, foodsPage.totalElements) &&
        Objects.equals(this.totalPages, foodsPage.totalPages) &&
        Objects.equals(this.foods, foodsPage.foods);
  }

  @Override
  public int hashCode() {
    return Objects.hash(totalElements, totalPages, foods);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FoodsPage {\n");
    
    sb.append("    totalElements: ").append(toIndentedString(totalElements)).append("\n");
    sb.append("    totalPages: ").append(toIndentedString(totalPages)).append("\n");
    sb.append("    foods version: ").append(toIndentedString(foods_version)).append("\n");
    sb.append("    foods: ").append(toIndentedString(foods)).append("\n");
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

