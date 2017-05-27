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
/**
 * DailyMenusFoods
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

public class DailyMenusFoods   {
  @JsonProperty("foodId")
  private Integer foodId = null;

  public DailyMenusFoods foodId(Integer foodId) {
    this.foodId = foodId;
    return this;
  }

   /**
   * Get foodId
   * @return foodId
  **/
  @ApiModelProperty(value = "")
  public Integer getFoodId() {
    return foodId;
  }

  public void setFoodId(Integer foodId) {
    this.foodId = foodId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DailyMenusFoods dailyMenusFoods = (DailyMenusFoods) o;
    return Objects.equals(this.foodId, dailyMenusFoods.foodId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foodId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyMenusFoods {\n");
    
    sb.append("    foodId: ").append(toIndentedString(foodId)).append("\n");
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

