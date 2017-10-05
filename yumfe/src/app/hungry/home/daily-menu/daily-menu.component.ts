import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import {  isToday, isAfter  } from 'date-fns';
import { GlobalSettingsService } from './../../../shared/services/global-settings-service.service';
import { AuthenticationService } from './../../../shared/authentication.service';
import * as remote from '../../../remote';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.scss']
})
export class DailyMenuComponent implements OnInit {
  @Input() dailyMenu: remote.DailyMenu;
  @Input() controlledUser: remote.User;
  @Output() dailyTotalPrice = new EventEmitter<number>();

  private lastEditDailyOrder: remote.LastEdit = {};
  private foodsMapNoModify: Map<number, remote.FoodWithQuantity> = new Map<number, remote.FoodWithQuantity>();
  protected foodsMap: Map<number, remote.FoodWithQuantity> = new Map<number, remote.FoodWithQuantity>();
  public foodsList: Array<remote.FoodWithQuantity> = [];
  protected totalPrice = 0;
  protected modifyChecked = false;
  public isOrderBoolean = false;
  public currency: Observable<string>;
  // create spinner
  public showSpinner = false;
  public disableBtn = false;

  constructor(
    private hungryService: remote.HungryApi,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    public globalSettingsService: GlobalSettingsService
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    this.setup();
  }

  setup() {    
    this.createFoodMap();
    
    if (this.dailyMenu.orderId != null) {
      this.isOrderBoolean = true;
      this.dailyTotalPrice.emit(this.getTotalPrice());
      if (!this.dailyMenu.isFinal) {
        this.getOrderLastEdit(); // Set order lastEdit.
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("Changes:", changes);
    if (changes.dailyMenu && !changes.dailyMenu.isFirstChange()) {
      this.setup();
      // console.log('Changed:', changes.total.currentValue, changes.total.previousValue);
    }
  }

  private createFoodMap() {
    this.foodsMap.clear();
    for (const food of this.dailyMenu.foods) {
      this.foodsMap.set(food.food.id, food);
    }
    this.fillFoodList();
  }
  // Set quantity = 0 for all foods.
  private removeFoodMapQuantity() {
    this.foodsMap.forEach(food => {
      food.quantity = 0;
      this.foodsMap.set(food.food.id, food);
    });
  }
  // Update food map with new order items.
  private updateFoodMapWithOrderedFoods(foods: Array<remote.FoodWithQuantity>) {
    this.removeFoodMapQuantity();
    for (const food of foods) {
      this.foodsMap.set(food.food.id, food);
    }
    this.fillFoodList();
  }
  private fillFoodList() {
    this.foodsList = [];
    this.foodsMap.forEach(food => {
      this.foodsList.push(food);
    });
  }
  public isFinalised() {
   // if(this.controlledUser && isToday(this.dailyMenu.date)) { 
    if(this.controlledUser && (isToday(this.dailyMenu.date) || isAfter(this.dailyMenu.date, new Date()))) { 
      return false;
    }
    return this.dailyMenu.isFinal;
  }
  public orderNoFinal() {
    if (this.isOrderBoolean) {
      if (!this.isFinalised()) {
        return true;
      }
    }
    return false;
  }
  public statusButton() {
    if (this.isFinalised()) {
      return true;
    } else if (this.isOrderBoolean && !this.isFinalised()) {
      if (this.modifyChecked) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  public getFoodName(id: number) {
    return this.foodsMap.get(id).food.foodName;
  }
  public getFoodPrice(id: number) {
    return this.foodsMap.get(id).food.price;
  }
  public getFoodQuantity(id: number) {
    return this.foodsMap.get(id).quantity;
  }
  public getFoodDescription(id: number) {
    return this.foodsMap.get(id).food.description;
  }
  private getfood(id: number) {
    return this.foodsMap.get(id);
  }
  public addFoodQuantity(id: number) {
    if (this.getfood(id) != null) {
      this.getfood(id).quantity += 1;
      this.fillFoodList(); // Fill food list.
    }
  }
  public removeFoodQuantity(id: number) {
    if (this.getfood(id) != null && this.getfood(id).quantity > 0) {
      this.getfood(id).quantity -= 1;
      this.fillFoodList(); // Fill food list.
    }
  }
  public getTotalPrice() {
    this.totalPrice = 0;
    this.foodsMap.forEach(food => {
      if (food.quantity > 0) {
        this.totalPrice += (food.food.price * food.quantity);
      }
    });
    return this.totalPrice;
  }
  // Deep copy on the food map.
  private cloneFoodsMap(foodsMapOriginal: Map<number, remote.FoodWithQuantity>) {
    const foodsMapClone: Map<number, remote.FoodWithQuantity> = new Map<number, remote.FoodWithQuantity>();
    foodsMapOriginal.forEach(foodOriginal => {
      foodsMapClone.set(foodOriginal.food.id, this.cloneFoodQuantity(foodOriginal));
    });
    return foodsMapClone;
  }
  // Deep copy on the food with quantity.
  private cloneFoodQuantity(foodQOriginal: remote.FoodWithQuantity) {
    const foodQClone: remote.FoodWithQuantity = {};
    foodQClone.food = foodQOriginal.food;
    foodQClone.quantity = foodQOriginal.quantity;
    return foodQClone;
  }
  // Update order last edit, Call get order with id Api.
  private getOrderLastEdit() {
    this.hungryService.ordersIdGet(this.dailyMenu.orderId, this.dailyMenu.id, this.dailyMenu.lastEdit.version, this.dailyMenu.date, this.controlledUser ? this.controlledUser.id : 0)
      .subscribe(orderedMenu => {
        this.lastEditDailyOrder = orderedMenu.lastEdit;
      }, error => console.log(error));
  }
  // Modify the Order.
  public modify() {
    this.foodsMapNoModify = this.cloneFoodsMap(this.foodsMap);
    this.modifyChecked = true;
  }
  // Cancel Modify.
  public cancelModify() {
    this.foodsMap = this.cloneFoodsMap(this.foodsMapNoModify);
    this.modifyChecked = false;
  }
  // Call Order Dialog.
  public order() {
    const dialogRef = this.dialog.open(DailyMenuOrderDialog);
    const instance = dialogRef.componentInstance; // This instance pass data to dialog.
    const orderFoods: Array<remote.FoodWithQuantity> = [];
    instance.total = this.totalPrice;
    instance.orderedFoods = [];
    instance.date = this.dailyMenu.date;
    instance.currency = this.currency;
    instance.controlledUserFullName = this.controlledUser ? this.controlledUser.firstName + " " + this.controlledUser.lastName : null;

    for (const food of this.foodsList) {
      if (food.quantity > 0) {
        instance.orderedFoods.push(food);
        orderFoods.push(food);
      }
      instance.items += food.quantity;
    }

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes' || result === 'YesWithEmail') {
        this.showSpinner = true;
        this.disableBtn = true;
        // Is Modify.
        if (this.modifyChecked) {
          const updateOrderItem: remote.UpdateOrderItems = {};
          //const updateOrderItems: Array<remote.UpdateOrderItems> = [];
          // kostas
          const updateOrderItems: Array<remote.OrderItem> = [];

          updateOrderItem.dailyMenuId = this.dailyMenu.id;
          updateOrderItem.dailyMenuDate = this.dailyMenu.date;
          updateOrderItem.dailyMenuVersion = this.dailyMenu.lastEdit.version;
          if (result === 'YesWithEmail') {
            updateOrderItem.emailRequest = true;
          } else {
            updateOrderItem.emailRequest = false;
          }
          updateOrderItem.lastEdit = this.lastEditDailyOrder;
          for (const orderedFood of orderFoods) {
            const foodItem: remote.OrderItem = {};
            foodItem.foodId = orderedFood.food.id;
            foodItem.quantity = orderedFood.quantity;
            updateOrderItems.push(foodItem);
          }
          updateOrderItem.orderItems = updateOrderItems;
          // Call, order with id put API.
          this.hungryService.ordersIdPut(this.dailyMenu.orderId, this.controlledUser ? this.controlledUser.id : 0, updateOrderItem)
            .subscribe(lastEdit => {
              this.lastEditDailyOrder = lastEdit;
              this.isOrderBoolean = true;
              this.modifyChecked = false;
              this.showSpinner = false;
              this.disableBtn = false;
              this.dailyTotalPrice.emit(this.getTotalPrice());
              console.log('Order changed');
              this.openSnackBar('Order modified successfully!', 'ok', 1); // Success SnackBar
            },
            error => {
              switch (error.status) {
                case 304:
                  this.openSnackBar('Unmodified data', 'ok', 2);
                  break;
                case 400:
                  this.openSnackBar('Order couldnot be modified.', 'ok', 3);
                  break;
                case 404:
                  this.openSnackBar('Order not found', 'ok', 3);
                  break;
                case 409:
                  const dailyOrder: remote.DailyOrder = JSON.parse(error._body);
                  this.updateFoodMapWithOrderedFoods(dailyOrder.foods);
                  this.lastEditDailyOrder = dailyOrder.lastEdit;
                  this.openSnackBar('Order not modified! It has been modified in the past and now is displayed in your page!', 'ok', 3);
                  break;
                case 410: // Concurrent Order Deletion error. Return an error message and the new daily Menu.
                  const errorDeletion: remote.ConcurrentOrderDeletion = JSON.parse(error._body);
                  this.openSnackBar(errorDeletion.error.message, 'ok', 3);
                  this.dailyMenu = errorDeletion.dailyMenu;
                  this.isOrderBoolean = false;
                  this.modifyChecked = false;
                  this.createFoodMap();
                  break;
                case 412:
                  this.openSnackBar('Deadline for orders passed', 'ok', 3);
                  break;
                default:
                  this.modifyChecked = false;
                  this.foodsMap = this.cloneFoodsMap(this.foodsMapNoModify);
                  this.openSnackBar('Server Error', 'ok', 3);
                  break;
              }
              this.showSpinner = false;
              this.disableBtn = false;
            });
        } else { // Is Order.
          const order: remote.Order = {};
          const newOrderItems: Array<remote.OrderItem> = [];
          order.dailyMenuId = this.dailyMenu.id;
          order.dailyMenuDate = this.dailyMenu.date;
          order.menuVersion = this.dailyMenu.lastEdit.version;
          if (result === 'YesWithEmail') {
            order.emailRequest = true;
          } else {
            order.emailRequest = false;
          }
          for (const orderedFood of orderFoods) {
            const foodItem: remote.OrderItem = {};
            foodItem.foodId = orderedFood.food.id;
            foodItem.quantity = orderedFood.quantity;
            newOrderItems.push(foodItem);
          }
          order.OrderItems = newOrderItems;
          // Call, order post API.
          this.hungryService.ordersPost(order, this.controlledUser ? this.controlledUser.id : 0)
            .subscribe(orderedDailyMenu => {
              this.dailyMenu = orderedDailyMenu;
              this.getOrderLastEdit(); // Update order last edit.
              this.isOrderBoolean = true;
              this.showSpinner = false;
              this.disableBtn = false;
              this.dailyTotalPrice.emit(this.getTotalPrice());
              console.log('Order placed');
              this.openSnackBar('Order placed successfully!', 'ok', 1);
            },
            error => {
              switch (error.status) {
                case 400:
                  this.openSnackBar('Order couldnot be placed.', 'ok', 3);
                  break;
                case 409:
                  this.dailyMenu = JSON.parse(error._body);
                  this.isOrderBoolean = true;
                  this.getOrderLastEdit();
                  this.createFoodMap();
                  this.openSnackBar('Order has already been placed and now is displayed in page', 'ok', 2);
                  break;
                case 410: // Concurrent Order Deletion error. Return an error message and the new daily Menu.
                  const errorDeletion: remote.ConcurrentOrderDeletion = JSON.parse(error._body);
                  this.openSnackBar(errorDeletion.error.message, 'ok', 3);
                  this.dailyMenu = errorDeletion.dailyMenu;
                  if (this.dailyMenu.orderId != null) {
                    this.getOrderLastEdit();
                  }
                  this.createFoodMap();
                  break;
                case 412:
                  this.openSnackBar('Deadline for orders passed, Your order is canceled.', 'ok', 3);
                  break;
                default:
                  this.isOrderBoolean = false;
                  this.openSnackBar('Server Error', 'ok', 3);
                  break;
              }
              this.showSpinner = false;
              this.disableBtn = false;
            }
            );
        }
      }
    });
  }
  // Cancel the Order.
  public cancelOrder() {
    const dialogRef = this.dialog.open(DailyOrderCancelDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.showSpinner = true;
        this.disableBtn = true;
        const dailyMenuDetails: remote.DailyMenuDetails = {};
        dailyMenuDetails.dailyMenuId = this.dailyMenu.id;
        dailyMenuDetails.dailyMenuDate = this.dailyMenu.date;
        dailyMenuDetails.dailyMenuVersion = this.dailyMenu.lastEdit.version;
        // Call delete api.
        this.hungryService.ordersIdDelete(this.dailyMenu.orderId, this.controlledUser ? this.controlledUser.id : 0, dailyMenuDetails)
          .subscribe(() => {
            this.isOrderBoolean = false;
            this.removeFoodMapQuantity();
            this.dailyTotalPrice.emit(this.getTotalPrice());
            this.openSnackBar('Order deleted successfully!', 'ok', 1);
            console.log('Order Deleted');
            this.showSpinner = false;
            this.disableBtn = false;
          },
          error => {
            switch (error.status) {
              case 400:
                this.openSnackBar('Order couldnot be deleted.', 'ok', 3);
                break;
              case 404:
                this.openSnackBar('Order not found', 'ok', 3);
                break;
              case 410: // Concurrent Order Deletion error. Return an error message and the new daily Menu.
                const errorDeletion: remote.ConcurrentOrderDeletion = JSON.parse(error._body);
                this.openSnackBar(errorDeletion.error.message, 'ok', 3);
                this.dailyMenu = errorDeletion.dailyMenu;
                this.createFoodMap();
                this.isOrderBoolean = false;
                break;
              case 412:
                this.openSnackBar('Deadline for orders passed', 'ok', 3);
                break;
              default:
                this.isOrderBoolean = true;
                this.openSnackBar('Server Error', 'ok', 3);
                break;
            }
            this.showSpinner = false;
            this.disableBtn = false;
          });
      }
    });
  }
  // status -> 1:success , 2:warning, 3:error
  private openSnackBar(message: string, action: string, status: number) {
    switch (status) {
      case 1:
        this.snackBar.open(message, action, {
          duration: 5000,
          extraClasses: ['success-snack-bar']
        });
        break;
      case 2:
        this.snackBar.open(message, action, {
          extraClasses: ['warning-snack-bar']
        });
        break;
      case 3:
        this.snackBar.open(message, action, {
          extraClasses: ['error-snack-bar']
        });
        break;
    }
  }
}
// Daily Order Cancel Dialog to confirm delete.
@Component({
  selector: 'app-daily-order-cancel-dialog',
  templateUrl: './daily-order-cancel-dialog.html',
})
export class DailyOrderCancelDialog {
  constructor(public dialogRef: MdDialogRef<DailyOrderCancelDialog>) { }
}
// Daily Menu Order Details Dialog.
@Component({
  selector: 'app-dailymenu-order-dialog',
  templateUrl: './daily-menu-order-dialog.html',
  styleUrls: ['./daily-menu-order-dialog.scss']
})
export class DailyMenuOrderDialog implements OnInit {
  public lastEditDailyOrderVersion: remote.LastEdit = {};
  public orderedFoods: Array<remote.FoodWithQuantity> = [];
  public date: Date;
  public items = 0;
  public total = 0;
  public isChecked = false;
  public currency: Observable<string>;
  public fullName = '';
  public controlledUserFullName = null;
  constructor(public dialogRef: MdDialogRef<DailyMenuOrderDialog>, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // Get user details.
    const user = this.authenticationService.getLoggedInUser();
    this.fullName = user.firstName + ' ' + user.lastName;
  }
  // check email check box.
  public toggle() {
    this.isChecked = !this.isChecked;
  }
  // Dialog return value with email or not.
  public getEmailCheck() {
    if (this.isChecked) {
      return 'YesWithEmail';
    } else {
      return 'Yes';
    }
  }
}
