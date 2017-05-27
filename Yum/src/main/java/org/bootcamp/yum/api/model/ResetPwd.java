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
 * Token and password
 */
@ApiModel(description = "Token and password")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-05-16T12:07:04.898+03:00")

public class ResetPwd   {
    
  @NotNull
  @JsonProperty("token")
  private String token = null;
  
  @NotNull
  @Pattern(regexp="^(?=.*[A-Za-z\\d$@!%*#?&\\^\\-\\_\\=\\+\\<\\>\\(\\)\\{\\}\\[\\]\\\\\\/\\.\\,~`|])[A-Za-z\\d$@!%*#?&\\^\\-\\_\\=\\+\\<\\>\\(\\)\\{\\}\\[\\]\\\\\\/\\.\\,~`|]{6,}$")
  @JsonProperty("password")
  private String password = null;

  public ResetPwd token(String token) {
    this.token = token;
    return this;
  }

   /**
   * Get token
   * @return token
  **/
  @ApiModelProperty(value = "")
  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public ResetPwd password(String password) {
    this.password = password;
    return this;
  }

   /**
   * Get password
   * @return password
  **/
  @ApiModelProperty(value = "")
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResetPwd resetPwd = (ResetPwd) o;
    return Objects.equals(this.token, resetPwd.token) &&
        Objects.equals(this.password, resetPwd.password);
  }

  @Override
  public int hashCode() {
    return Objects.hash(token, password);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResetPwd {\n");
    
    sb.append("    token: ").append(toIndentedString(token)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
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

