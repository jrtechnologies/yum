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
import io.swagger.annotations.ApiModelProperty;
import java.util.Objects;
import javax.validation.constraints.*;
import org.joda.time.LocalDate;
/**
 * DailyMenuDetails
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-05-15T10:36:20.575+03:00")

public class DailyMenuDetails   {
  @NotNull
  @JsonProperty("dailyMenuId")
  private Long dailyMenuId = null;
  @NotNull
  @JsonProperty("dailyMenuVersion")
  private Integer dailyMenuVersion = null;
  @NotNull
  @JsonProperty("dailyMenuDate")
  private LocalDate dailyMenuDate = null;

  public DailyMenuDetails dailyMenuId(Long dailyMenuId) {
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

  public DailyMenuDetails dailyMenuVersion(Integer dailyMenuVersion) {
    this.dailyMenuVersion = dailyMenuVersion;
    return this;
  }

   /**
   * Get dailyMenuVersion
   * @return dailyMenuVersion
  **/
  @ApiModelProperty(value = "")
  public Integer getDailyMenuVersion() {
    return dailyMenuVersion;
  }

  public void setDailyMenuVersion(Integer dailyMenuVersion) {
    this.dailyMenuVersion = dailyMenuVersion;
  }

  public DailyMenuDetails dailyMenuDate(LocalDate dailyMenuDate) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DailyMenuDetails dailyMenuDetails = (DailyMenuDetails) o;
    return Objects.equals(this.dailyMenuId, dailyMenuDetails.dailyMenuId) &&
        Objects.equals(this.dailyMenuVersion, dailyMenuDetails.dailyMenuVersion) &&
        Objects.equals(this.dailyMenuDate, dailyMenuDetails.dailyMenuDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dailyMenuId, dailyMenuVersion, dailyMenuDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyMenuDetails {\n");
    
    sb.append("    dailyMenuId: ").append(toIndentedString(dailyMenuId)).append("\n");
    sb.append("    dailyMenuVersion: ").append(toIndentedString(dailyMenuVersion)).append("\n");
    sb.append("    dailyMenuDate: ").append(toIndentedString(dailyMenuDate)).append("\n");
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

