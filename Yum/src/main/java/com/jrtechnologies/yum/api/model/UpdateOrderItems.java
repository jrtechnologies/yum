package com.jrtechnologies.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import com.jrtechnologies.yum.api.model.LastEdit;
import com.jrtechnologies.yum.api.model.OrderItem;
import org.joda.time.LocalDate;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * UpdateOrderItems
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-05T13:07:06.362+03:00")

public class UpdateOrderItems   {
  @NotNull 
  @JsonProperty("dailyMenuId")
  private Long dailyMenuId = null;

  @NotNull 
  @JsonProperty("dailyMenuVersion")
  private Integer dailyMenuVersion = null;

  @NotNull 
  @JsonProperty("dailyMenuDate")
  private LocalDate dailyMenuDate = null;

  @JsonProperty("comment")
  private String comment = null;
 
  @JsonProperty("orderItems")
  private List<OrderItem> orderItems = null;

  @JsonProperty("emailRequest")
  private Boolean emailRequest = null;

  @NotNull 
  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public UpdateOrderItems dailyMenuId(Long dailyMenuId) {
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

  public UpdateOrderItems dailyMenuVersion(Integer dailyMenuVersion) {
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

  public UpdateOrderItems dailyMenuDate(LocalDate dailyMenuDate) {
    this.dailyMenuDate = dailyMenuDate;
    return this;
  }

   /**
   * Get dailyMenuDate
   * @return dailyMenuDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getDailyMenuDate() {
    return dailyMenuDate;
  }

  public void setDailyMenuDate(LocalDate dailyMenuDate) {
    this.dailyMenuDate = dailyMenuDate;
  }

  public UpdateOrderItems comment(String comment) {
    this.comment = comment;
    return this;
  }

   /**
   * Get comment
   * @return comment
  **/
  @ApiModelProperty(value = "")

 @Size(max=150)
  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  public UpdateOrderItems orderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
    return this;
  }

  public UpdateOrderItems addOrderItemsItem(OrderItem orderItemsItem) {
    if (this.orderItems == null) {
      this.orderItems = new ArrayList<OrderItem>();
    }
    this.orderItems.add(orderItemsItem);
    return this;
  }

   /**
   * Get orderItems
   * @return orderItems
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<OrderItem> getOrderItems() {
    return orderItems;
  }

  public void setOrderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
  }

  public UpdateOrderItems emailRequest(Boolean emailRequest) {
    this.emailRequest = emailRequest;
    return this;
  }

   /**
   * Get emailRequest
   * @return emailRequest
  **/
  @ApiModelProperty(value = "")


  public Boolean getEmailRequest() {
    return emailRequest;
  }

  public void setEmailRequest(Boolean emailRequest) {
    this.emailRequest = emailRequest;
  }

  public UpdateOrderItems lastEdit(LastEdit lastEdit) {
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
    UpdateOrderItems updateOrderItems = (UpdateOrderItems) o;
    return Objects.equals(this.dailyMenuId, updateOrderItems.dailyMenuId) &&
        Objects.equals(this.dailyMenuVersion, updateOrderItems.dailyMenuVersion) &&
        Objects.equals(this.dailyMenuDate, updateOrderItems.dailyMenuDate) &&
        Objects.equals(this.comment, updateOrderItems.comment) &&
        Objects.equals(this.orderItems, updateOrderItems.orderItems) &&
        Objects.equals(this.emailRequest, updateOrderItems.emailRequest) &&
        Objects.equals(this.lastEdit, updateOrderItems.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dailyMenuId, dailyMenuVersion, dailyMenuDate, comment, orderItems, emailRequest, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateOrderItems {\n");
    
    sb.append("    dailyMenuId: ").append(toIndentedString(dailyMenuId)).append("\n");
    sb.append("    dailyMenuVersion: ").append(toIndentedString(dailyMenuVersion)).append("\n");
    sb.append("    dailyMenuDate: ").append(toIndentedString(dailyMenuDate)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("    emailRequest: ").append(toIndentedString(emailRequest)).append("\n");
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

