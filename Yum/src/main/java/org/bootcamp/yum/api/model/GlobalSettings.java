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

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.validation.Valid;

/**
 * Global Settings DTO
 */
@ApiModel(description = "Global Settings DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-07T13:23:35.925+03:00")

public class GlobalSettings   {
  @JsonProperty("deadline")
  private String deadline = null;

  @JsonProperty("deadlineDays")
  private Integer deadlineDays = null;

  @JsonProperty("currency")
  private String currency = null;

  @JsonProperty("notes")
  private String notes = null;

  @JsonProperty("tos")
  private String tos = null;

  @JsonProperty("policy")
  private String policy = null;

  @JsonProperty("reportEmail")
  private String reportEmail = null;

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public GlobalSettings deadline(String deadline) {
    this.deadline = deadline;
    return this;
  }

   /**
   * Get deadline
   * @return deadline
  **/
  @ApiModelProperty(value = "")


  public String getDeadline() {
    return deadline;
  }

  public void setDeadline(String deadline) {
    this.deadline = deadline;
  }

  public GlobalSettings deadlineDays(Integer deadlineDays) {
    this.deadlineDays = deadlineDays;
    return this;
  }

   /**
   * Get deadlineDays
   * @return deadlineDays
  **/
  @ApiModelProperty(value = "")


  public Integer getDeadlineDays() {
    return deadlineDays;
  }

  public void setDeadlineDays(Integer deadlineDays) {
    this.deadlineDays = deadlineDays;
  }

  public GlobalSettings currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Get currency
   * @return currency
  **/
  @ApiModelProperty(value = "")


  public String getCurrency() {
    return currency;
  }

  public void setCurrency(String currency) {
    this.currency = currency;
  }

  public GlobalSettings notes(String notes) {
    this.notes = notes;
    return this;
  }

   /**
   * Get notes
   * @return notes
  **/
  @ApiModelProperty(value = "")


  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  public GlobalSettings tos(String tos) {
    this.tos = tos;
    return this;
  }

   /**
   * Get tos
   * @return tos
  **/
  @ApiModelProperty(value = "")


  public String getTos() {
    return tos;
  }

  public void setTos(String tos) {
    this.tos = tos;
  }

  public GlobalSettings policy(String policy) {
    this.policy = policy;
    return this;
  }

   /**
   * Get policy
   * @return policy
  **/
  @ApiModelProperty(value = "")


  public String getPolicy() {
    return policy;
  }

  public void setPolicy(String policy) {
    this.policy = policy;
  }

  public GlobalSettings reportEmail(String reportEmail) {
    this.reportEmail = reportEmail;
    return this;
  }

   /**
   * Get reportEmail
   * @return reportEmail
  **/
  @ApiModelProperty(value = "")


  public String getReportEmail() {
    return reportEmail;
  }

  public void setReportEmail(String reportEmail) {
    this.reportEmail = reportEmail;
  }

  public GlobalSettings lastEdit(LastEdit lastEdit) {
    this.lastEdit = lastEdit;
    return this;
  }

   /**
   * Get lastEdit
   * @return lastEdit
  **/
  @ApiModelProperty(value = "")

  @Valid

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
    GlobalSettings globalSettings = (GlobalSettings) o;
    return Objects.equals(this.deadline, globalSettings.deadline) &&
        Objects.equals(this.deadlineDays, globalSettings.deadlineDays) &&
        Objects.equals(this.currency, globalSettings.currency) &&
        Objects.equals(this.notes, globalSettings.notes) &&
        Objects.equals(this.tos, globalSettings.tos) &&
        Objects.equals(this.policy, globalSettings.policy) &&
        Objects.equals(this.reportEmail, globalSettings.reportEmail) &&
        Objects.equals(this.lastEdit, globalSettings.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(deadline, deadlineDays, currency, notes, tos, policy, reportEmail, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GlobalSettings {\n");
    
    sb.append("    deadline: ").append(toIndentedString(deadline)).append("\n");
    sb.append("    deadlineDays: ").append(toIndentedString(deadlineDays)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    tos: ").append(toIndentedString(tos)).append("\n");
    sb.append("    policy: ").append(toIndentedString(policy)).append("\n");
    sb.append("    reportEmail: ").append(toIndentedString(reportEmail)).append("\n");
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

