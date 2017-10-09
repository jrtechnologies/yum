package org.bootcamp.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.bootcamp.yum.api.model.FoodWithQuantity;
import org.bootcamp.yum.api.model.LastEdit;
import org.joda.time.LocalDate;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * A daily Menu,  has order checked DTO
 */
@ApiModel(description = "A daily Menu,  has order checked DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-06T15:19:56.604+03:00")

public class DailyMenu   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("date")
  private LocalDate date = null;

  @JsonProperty("orderId")
  private Long orderId = null;

  @JsonProperty("isFinal")
  private Boolean isFinal = null;

  @JsonProperty("comment")
  private String comment = null;

  @JsonProperty("foods")
  private List<FoodWithQuantity> foods = null;

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  @JsonProperty("balance")
  private BigDecimal balance = null;

  public DailyMenu id(Long id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public DailyMenu date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Get date
   * @return date
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public DailyMenu orderId(Long orderId) {
    this.orderId = orderId;
    return this;
  }

   /**
   * Get orderId
   * @return orderId
  **/
  @ApiModelProperty(value = "")


  public Long getOrderId() {
    return orderId;
  }

  public void setOrderId(Long orderId) {
    this.orderId = orderId;
  }

  public DailyMenu isFinal(Boolean isFinal) {
    this.isFinal = isFinal;
    return this;
  }

   /**
   * Get isFinal
   * @return isFinal
  **/
  @ApiModelProperty(value = "")


  public Boolean getIsFinal() {
    return isFinal;
  }

  public void setIsFinal(Boolean isFinal) {
    this.isFinal = isFinal;
  }

  public DailyMenu comment(String comment) {
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

  public DailyMenu foods(List<FoodWithQuantity> foods) {
    this.foods = foods;
    return this;
  }

  public DailyMenu addFoodsItem(FoodWithQuantity foodsItem) {
    if (this.foods == null) {
      this.foods = new ArrayList<FoodWithQuantity>();
    }
    this.foods.add(foodsItem);
    return this;
  }

   /**
   * Get foods
   * @return foods
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<FoodWithQuantity> getFoods() {
    return foods;
  }

  public void setFoods(List<FoodWithQuantity> foods) {
    this.foods = foods;
  }

  public DailyMenu lastEdit(LastEdit lastEdit) {
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

  public DailyMenu balance(BigDecimal balance) {
    this.balance = balance;
    return this;
  }

   /**
   * Get balance
   * @return balance
  **/
  @ApiModelProperty(value = "")

  @Valid

  public BigDecimal getBalance() {
    return balance;
  }

  public void setBalance(BigDecimal balance) {
    this.balance = balance;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DailyMenu dailyMenu = (DailyMenu) o;
    return Objects.equals(this.id, dailyMenu.id) &&
        Objects.equals(this.date, dailyMenu.date) &&
        Objects.equals(this.orderId, dailyMenu.orderId) &&
        Objects.equals(this.isFinal, dailyMenu.isFinal) &&
        Objects.equals(this.comment, dailyMenu.comment) &&
        Objects.equals(this.foods, dailyMenu.foods) &&
        Objects.equals(this.lastEdit, dailyMenu.lastEdit) &&
        Objects.equals(this.balance, dailyMenu.balance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, date, orderId, isFinal, comment, foods, lastEdit, balance); 
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyMenu {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    isFinal: ").append(toIndentedString(isFinal)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
    sb.append("    foods: ").append(toIndentedString(foods)).append("\n");
    sb.append("    lastEdit: ").append(toIndentedString(lastEdit)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
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

