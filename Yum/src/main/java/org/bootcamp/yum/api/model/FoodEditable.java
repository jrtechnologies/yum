package org.bootcamp.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.bootcamp.yum.api.model.Food;
import org.bootcamp.yum.api.model.LastEdit;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Food,  checked if editable
 */
@ApiModel(description = "Food,  checked if editable")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-10-03T11:34:42.640+03:00")

public class FoodEditable   {
  @NotNull
  @JsonProperty("foodItem")
  private Food foodItem = null;

  @JsonProperty("editable")
  private Boolean editable = null;

  @NotNull
  @JsonProperty("lastEdit")
  private LastEdit lastEdit = null;

  public FoodEditable foodItem(Food foodItem) {
    this.foodItem = foodItem;
    return this;
  }

   /**
   * Get foodItem
   * @return foodItem
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Food getFoodItem() {
    return foodItem;
  }

  public void setFoodItem(Food foodItem) {
    this.foodItem = foodItem;
  }

  public FoodEditable editable(Boolean editable) {
    this.editable = editable;
    return this;
  }

   /**
   * Get editable
   * @return editable
  **/
  @ApiModelProperty(value = "")


  public Boolean getEditable() {
    return editable;
  }

  public void setEditable(Boolean editable) {
    this.editable = editable;
  }

  public FoodEditable lastEdit(LastEdit lastEdit) {
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
    FoodEditable foodEditable = (FoodEditable) o;
    return Objects.equals(this.foodItem, foodEditable.foodItem) &&
        Objects.equals(this.editable, foodEditable.editable) &&
        Objects.equals(this.lastEdit, foodEditable.lastEdit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(foodItem, editable, lastEdit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FoodEditable {\n");
    
    sb.append("    foodItem: ").append(toIndentedString(foodItem)).append("\n");
    sb.append("    editable: ").append(toIndentedString(editable)).append("\n");
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

