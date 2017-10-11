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
/**
 * Concurrent Deletion returns error and dto
 */
@ApiModel(description = "Concurrent Deletion returns error and dto")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-05-15T14:56:48.794+03:00")

public class ConcurrentOrderDeletion   {
  @JsonProperty("error")
  private Error error = null;

  @JsonProperty("dailyMenu")
  private DailyMenu dailyMenu = null;

  public ConcurrentOrderDeletion error(Error error) {
    this.error = error;
    return this;
  }

   /**
   * Get error
   * @return error
  **/
  @ApiModelProperty(value = "")
  public Error getError() {
    return error;
  }

  public void setError(Error error) {
    this.error = error;
  }

  public ConcurrentOrderDeletion dailyMenu(DailyMenu dailyMenu) {
    this.dailyMenu = dailyMenu;
    return this;
  }

   /**
   * Get dailyMenu
   * @return dailyMenu
  **/
  @ApiModelProperty(value = "")
  public DailyMenu getDailyMenu() {
    return dailyMenu;
  }

  public void setDailyMenu(DailyMenu dailyMenu) {
    this.dailyMenu = dailyMenu;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ConcurrentOrderDeletion concurrentOrderDeletion = (ConcurrentOrderDeletion) o;
    return Objects.equals(this.error, concurrentOrderDeletion.error) &&
        Objects.equals(this.dailyMenu, concurrentOrderDeletion.dailyMenu);
  }

  @Override
  public int hashCode() {
    return Objects.hash(error, dailyMenu);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ConcurrentOrderDeletion {\n");
    
    sb.append("    error: ").append(toIndentedString(error)).append("\n");
    sb.append("    dailyMenu: ").append(toIndentedString(dailyMenu)).append("\n");
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

