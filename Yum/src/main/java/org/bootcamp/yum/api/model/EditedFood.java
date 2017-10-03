package org.bootcamp.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.bootcamp.yum.api.model.LastEdit;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * EditedFood
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-03T11:34:42.640+03:00")

public class EditedFood   {
  @JsonProperty("foodName")
  private String foodName = null;

  @JsonProperty("foodType")
  private String foodType = null;

  @JsonProperty("description")
  private String description = null;

  @JsonProperty("price")
  private Double price = null;

  @JsonProperty("standard")
  private Boolean standard = null;

  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public EditedFood foodName(String foodName) {
    this.foodName = foodName;
    return this;
  }

   /**
   * Get foodName
   * @return foodName
  **/
  @ApiModelProperty(value = "")


  public String getFoodName() {
    return foodName;
  }

  public void setFoodName(String foodName) {
    this.foodName = foodName;
  }

  public EditedFood foodType(String foodType) {
    this.foodType = foodType;
    return this;
  }

   /**
   * Get foodType
   * @return foodType
  **/
  @ApiModelProperty(value = "")


  public String getFoodType() {
    return foodType;
  }

  public void setFoodType(String foodType) {
    this.foodType = foodType;
  }

  public EditedFood description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(value = "")


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public EditedFood price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Get price
   * @return price
  **/
  @ApiModelProperty(value = "")


  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public EditedFood standard(Boolean standard) {
    this.standard = standard;
    return this;
  }

   /**
   * Get standard
   * @return standard
  **/
  @ApiModelProperty(value = "")


  public Boolean getStandard() {
    return standard;
  }

  public void setStandard(Boolean standard) {
    this.standard = standard;
  }

  public EditedFood lastEdit(LastEdit lastEdit) {
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
    EditedFood editedFood = (EditedFood) o;
    return Objects.equals(this.foodName, editedFood.foodName) &&
        Objects.equals(this.foodType, editedFood.foodType) &&
        Objects.equals(this.description, editedFood.description) &&
        Objects.equals(this.price, editedFood.price) &&
        Objects.equals(this.standard, editedFood.standard) &&
        Objects.equals(this.lastEdit, editedFood.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foodName, foodType, description, price, standard, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditedFood {\n");
    
    sb.append("    foodName: ").append(toIndentedString(foodName)).append("\n");
    sb.append("    foodType: ").append(toIndentedString(foodType)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    standard: ").append(toIndentedString(standard)).append("\n");
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

