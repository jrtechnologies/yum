package com.jrtechnologies.yum.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Transaction with balance
 */
@ApiModel(description = "Transaction with balance")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-29T10:29:17.815+03:00")

public class Transaction   {
  @JsonProperty("amount")
  private BigDecimal amount = null;

  @JsonProperty("balance")
  private BigDecimal balance = null;

  @JsonProperty("datetime")
  private DateTime datetime = null;

  @JsonProperty("firstName")
  private String firstName = null;

  @JsonProperty("lastName")
  private String lastName = null;

  @JsonProperty("menuDate")
  private LocalDate menuDate = null;

  @JsonProperty("orderType")
  private String orderType = null;

  public Transaction amount(BigDecimal amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * @return amount
  **/
  @ApiModelProperty(value = "")

  @Valid

  public BigDecimal getAmount() {
    return amount;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  public Transaction balance(BigDecimal balance) {
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

  public Transaction datetime(DateTime datetime) {
    this.datetime = datetime;
    return this;
  }

   /**
   * Get datetime
   * @return datetime
  **/
  @ApiModelProperty(value = "")

  @Valid

  public DateTime getDatetime() {
    return datetime;
  }

  public void setDatetime(DateTime datetime) {
    this.datetime = datetime;
  }

  public Transaction firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @ApiModelProperty(value = "")


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public Transaction lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @ApiModelProperty(value = "")


  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Transaction menuDate(LocalDate menuDate) {
    this.menuDate = menuDate;
    return this;
  }

   /**
   * Get menuDate
   * @return menuDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getMenuDate() {
    return menuDate;
  }

  public void setMenuDate(LocalDate menuDate) {
    this.menuDate = menuDate;
  }

  public Transaction orderType(String orderType) {
    this.orderType = orderType;
    return this;
  }

   /**
   * Get orderType
   * @return orderType
  **/
  @ApiModelProperty(value = "")


  public String getOrderType() {
    return orderType;
  }

  public void setOrderType(String orderType) {
    this.orderType = orderType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Transaction transaction = (Transaction) o;
    return Objects.equals(this.amount, transaction.amount) &&
        Objects.equals(this.balance, transaction.balance) &&
        Objects.equals(this.datetime, transaction.datetime) &&
        Objects.equals(this.firstName, transaction.firstName) &&
        Objects.equals(this.lastName, transaction.lastName) &&
        Objects.equals(this.menuDate, transaction.menuDate) &&
        Objects.equals(this.orderType, transaction.orderType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, balance, datetime, firstName, lastName, menuDate, orderType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Transaction {\n");
    
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    datetime: ").append(toIndentedString(datetime)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    menuDate: ").append(toIndentedString(menuDate)).append("\n");
    sb.append("    orderType: ").append(toIndentedString(orderType)).append("\n");
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

