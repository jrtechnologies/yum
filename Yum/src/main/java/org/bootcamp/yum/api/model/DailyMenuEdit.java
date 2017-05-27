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
import org.joda.time.LocalDate;
/**
 * DailyMenuEdit
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T10:12:43.892+03:00")

public class DailyMenuEdit   {
  @JsonProperty("foods")
  private List<DailyMenusFoods> foods = new ArrayList<DailyMenusFoods>();
  
  @JsonProperty("date")
  private LocalDate date = null;

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public DailyMenuEdit foods(List<DailyMenusFoods> foods) {
    this.foods = foods;
    return this;
  }

  public DailyMenuEdit addFoodsItem(DailyMenusFoods foodsItem) {
    this.foods.add(foodsItem);
    return this;
  }

   /**
   * Get foods
   * @return foods
  **/
  @ApiModelProperty(value = "")
  public List<DailyMenusFoods> getFoods() {
    return foods;
  }

  public void setFoods(List<DailyMenusFoods> foods) {
    this.foods = foods;
  }

  public DailyMenuEdit lastEdit(LastEdit lastEdit) {
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DailyMenuEdit dailyMenuEdit = (DailyMenuEdit) o;
    return Objects.equals(this.foods, dailyMenuEdit.foods) &&
        Objects.equals(this.lastEdit, dailyMenuEdit.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foods, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyMenuEdit {\n");
    
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

