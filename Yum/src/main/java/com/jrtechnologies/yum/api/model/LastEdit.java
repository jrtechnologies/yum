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
import org.joda.time.DateTime;
/**
 * Last edit DTO
 */
@ApiModel(description = "Last edit DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-20T16:14:13.905+03:00")

public class LastEdit   {
  @JsonProperty("timeStamp")
  private DateTime timeStamp = null;
  private int version = 0;

    public LastEdit(DateTime lastEdit, int version) {
        this.timeStamp = lastEdit;
        this.version = version;
    }
    public LastEdit(){ }
  
    public LastEdit timeStamp(DateTime timeStamp) {
      this.timeStamp = timeStamp;
      return this;
    }
  
    @ApiModelProperty(value = "")
    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

   /**
   * Get timeStamp
   * @return timeStamp
  **/
  @ApiModelProperty(value = "")
  public DateTime getTimeStamp() {
    return timeStamp;
  }

  public void setTimeStamp(DateTime timeStamp) {
    this.timeStamp = timeStamp;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LastEdit lastEdit = (LastEdit) o;
    return Objects.equals(this.timeStamp, lastEdit.timeStamp);
  }

  @Override
  public int hashCode() {
    return Objects.hash(timeStamp);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LastEdit {\n");
    
    sb.append("    timeStamp: ").append(toIndentedString(timeStamp)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
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

