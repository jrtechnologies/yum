package com.jrtechnologies.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import com.jrtechnologies.yum.api.model.FoodWithQuantity;
import com.jrtechnologies.yum.api.model.LastEdit;
import org.joda.time.LocalDate;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * A single order DTO
 */
@ApiModel(description = "A single order DTO")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-05T12:37:13.367+03:00")

public class DailyOrder   {
  @JsonProperty("foods")
  private List<FoodWithQuantity> foods = null;

  @JsonProperty("dailyMenuDate")
  private LocalDate dailyMenuDate = null;

  @JsonProperty("comment")
  private String comment = null;

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public DailyOrder foods(List<FoodWithQuantity> foods) {
    this.foods = foods;
    return this;
  }

  public DailyOrder addFoodsItem(FoodWithQuantity foodsItem) {
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

  public DailyOrder dailyMenuDate(LocalDate dailyMenuDate) {
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

  public DailyOrder comment(String comment) {
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

  public DailyOrder lastEdit(LastEdit lastEdit) {
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
    DailyOrder dailyOrder = (DailyOrder) o;
    return Objects.equals(this.foods, dailyOrder.foods) &&
        Objects.equals(this.dailyMenuDate, dailyOrder.dailyMenuDate) &&
        Objects.equals(this.comment, dailyOrder.comment) &&
        Objects.equals(this.lastEdit, dailyOrder.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foods, dailyMenuDate, comment, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DailyOrder {\n");
    
    sb.append("    foods: ").append(toIndentedString(foods)).append("\n");
    sb.append("    dailyMenuDate: ").append(toIndentedString(dailyMenuDate)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
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

