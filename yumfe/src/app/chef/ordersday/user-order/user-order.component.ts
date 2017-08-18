import { Component, OnInit, Input } from '@angular/core';
import * as remote from '../../../remote';
import { FoodsService } from '../../services/foods.service';
import { Observable } from 'rxjs/Rx';
import { GlobalSettingsService } from './../../../shared/services/global-settings-service.service';
import { DecimalPipe } from '@angular/common';

interface customOrderItem {
  food: remote.Food;
  quantity: number;
}

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {

  @Input() userOrders: Array<remote.UserOrder>;

  public mainFoodOrders = new Array<customOrderItem>();
  public saladFoodOrders = new Array<customOrderItem>();
  public drinkFoodOrders = new Array<customOrderItem>();
  public total: number= 0;
  public currency: Observable<string>;

  constructor(
    public foodsService: FoodsService,
    public globalSettingsService: GlobalSettingsService,
    public decpipe: DecimalPipe
  ) { }

  ngOnInit() {

    let orderItems: Array<remote.OrderItem>;
    let food: remote.Food;
    this.currency = this.globalSettingsService.getCurrency();

    for (let i = 0; i < this.userOrders.length; i++) {
      orderItems = this.userOrders[i].orderItems;

      for (let j = 0; j < orderItems.length; j++) {
        food = this.foodsService.getFoodById(orderItems[j].foodId);

        if (food.foodType === 'Main') {
          this.mainFoodOrders.push({
            food: food,
            quantity: orderItems[j].quantity
          });
          this.total += food.price * orderItems[j].quantity;
          this.userOrders[i].total += food.price * orderItems[j].quantity;
        } else if (food.foodType === 'Salad') {
          this.saladFoodOrders.push({
            food: food,
            quantity: orderItems[j].quantity
          });
          this.total += food.price * orderItems[j].quantity;
          this.userOrders[i].total += food.price * orderItems[j].quantity;
        } else if (food.foodType === 'Drink') {
          this.drinkFoodOrders.push({
            food: food,
            quantity: orderItems[j].quantity
          });
          this.total += food.price * orderItems[j].quantity;
          this.userOrders[i].total += food.price * orderItems[j].quantity;
        }
      }

      //this.total = Number(this.decpipe.transform(this.total, '1.2-2'));
      //this.userOrders[i].total = Number(this.decpipe.transform(this.userOrders[i].total, '1.2-2'));
        
    }

  } // ngOnInit

}
