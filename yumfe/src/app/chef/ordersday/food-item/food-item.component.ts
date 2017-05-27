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
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {

  @Input() orderItems: Array<remote.OrderItem>;

  public mainFoodOrders = new Array<customOrderItem>();
  public saladFoodOrders = new Array<customOrderItem>();
  public drinkFoodOrders = new Array<customOrderItem>();
  public total = 0.00;
  public currency: Observable<string>;

  constructor(
    public foodsService: FoodsService,
    public globalSettingsService: GlobalSettingsService,
    public decpipe: DecimalPipe
  ) { }

  ngOnInit() {

    let id: number;
    let food: remote.Food;
    this.currency = this.globalSettingsService.getCurrency();

    for (let i = 0; i < this.orderItems.length; i++) {
      id = this.orderItems[i].foodId;
      food = this.foodsService.getFoodById(id);

      if (food.foodType === 'Main') {
        this.mainFoodOrders.push({
          food: food,
          quantity: this.orderItems[i].quantity
        });
        this.total += food.price * this.orderItems[i].quantity;
      } else if (food.foodType === 'Salad') {
        this.saladFoodOrders.push({
          food: food,
          quantity: this.orderItems[i].quantity
        });
        this.total += food.price * this.orderItems[i].quantity;
      } else if (food.foodType === 'Drink') {
        this.drinkFoodOrders.push({
          food: food,
          quantity: this.orderItems[i].quantity
        });
        this.total += food.price * this.orderItems[i].quantity;
      }
    }
    this.total = Number(this.decpipe.transform(this.total, '1.2-2'));

  } // ngOnInit

}
