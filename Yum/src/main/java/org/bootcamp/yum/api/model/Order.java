package org.bootcamp.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.bootcamp.yum.api.model.OrderItem;
import org.joda.time.LocalDate;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * An order DTO
 */
@ApiModel(description = "An order DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-05T12:37:13.367+03:00")

public class Order   {
  @NotNull
  @JsonProperty("dailyMenuId")
  private Long dailyMenuId = null;
  @NotNull
  @JsonProperty("dailyMenuDate")
  private LocalDate dailyMenuDate = null;
  @NotNull
  @JsonProperty("menuVersion")
  private Integer menuVersion = null;
  @NotNull
  @JsonProperty("emailRequest")
  private Boolean emailRequest = null;
  @NotNull
  @JsonProperty("OrderItems")
  private List<OrderItem> orderItems = null;

  @JsonProperty("comment")
  private String comment = null;

  public Order dailyMenuId(Long dailyMenuId) {
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

  public Order dailyMenuDate(LocalDate dailyMenuDate) {
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

  public Order menuVersion(Integer menuVersion) {
    this.menuVersion = menuVersion;
    return this;
  }

   /**
   * Get menuVersion
   * @return menuVersion
  **/
  @ApiModelProperty(value = "")


  public Integer getMenuVersion() {
    return menuVersion;
  }

  public void setMenuVersion(Integer menuVersion) {
    this.menuVersion = menuVersion;
  }

  public Order emailRequest(Boolean emailRequest) {
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

  public Order orderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
    return this;
  }

  public Order addOrderItemsItem(OrderItem orderItemsItem) {
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

  public Order comment(String comment) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Order order = (Order) o;
    return Objects.equals(this.dailyMenuId, order.dailyMenuId) &&
        Objects.equals(this.dailyMenuDate, order.dailyMenuDate) &&
        Objects.equals(this.menuVersion, order.menuVersion) &&
        Objects.equals(this.emailRequest, order.emailRequest) &&
        Objects.equals(this.orderItems, order.orderItems) &&
        Objects.equals(this.comment, order.comment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dailyMenuId, dailyMenuDate, menuVersion, emailRequest, orderItems, comment);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Order {\n");
    
    sb.append("    dailyMenuId: ").append(toIndentedString(dailyMenuId)).append("\n");
    sb.append("    dailyMenuDate: ").append(toIndentedString(dailyMenuDate)).append("\n");
    sb.append("    menuVersion: ").append(toIndentedString(menuVersion)).append("\n");
    sb.append("    emailRequest: ").append(toIndentedString(emailRequest)).append("\n");
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
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

