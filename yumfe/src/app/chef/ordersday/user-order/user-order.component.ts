import { Component, OnInit, Input } from '@angular/core';
import * as remote from '../../../remote';
import { FoodsService } from '../../../shared/services/foods.service';
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

  public userFinalOrders: Array<any>;
  public total: number = 0;
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
    this.userFinalOrders = new Array<any>();

    for (let i = 0; i < this.userOrders.length; i++) {
      orderItems = this.userOrders[i].orderItems;

      const mainFoodOrders = new Array<customOrderItem>();
      const saladFoodOrders = new Array<customOrderItem>();
      const drinkFoodOrders = new Array<customOrderItem>();

      for (let j = 0; j < orderItems.length; j++) {
        // food = this.foodsService.getFoodById(orderItems[j].foodId);
        this.foodsService.getFoodById(orderItems[j].foodId).subscribe(food => {
          if (food.foodType === 'Main') {
              mainFoodOrders.push({
              food: food,
              quantity: orderItems[j].quantity
            });
            this.total += food.price * orderItems[j].quantity;
            this.userOrders[i].total += food.price * orderItems[j].quantity;
          } else if (food.foodType === 'Salad') {
              saladFoodOrders.push({
              food: food,
              quantity: orderItems[j].quantity
            });
            this.total += food.price * orderItems[j].quantity;
            this.userOrders[i].total += food.price * orderItems[j].quantity;
          } else if (food.foodType === 'Drink') {
              drinkFoodOrders.push({
              food: food,
              quantity: orderItems[j].quantity
            });
            this.total += food.price * orderItems[j].quantity;
            this.userOrders[i].total += food.price * orderItems[j].quantity;
          }
        });


      }

      this.userFinalOrders[i] = ({userOrder: this.userOrders[i], mainFoodOrders: mainFoodOrders, saladFoodOrders:saladFoodOrders, drinkFoodOrders:drinkFoodOrders });
      
      //this.total = Number(this.decpipe.transform(this.total, '1.2-2'));
      //this.userOrders[i].total = Number(this.decpipe.transform(this.userOrders[i].total, '1.2-2'));

    }

  } // ngOnInit

}
