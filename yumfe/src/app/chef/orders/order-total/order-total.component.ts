import { Component, OnInit, Input } from '@angular/core';
import * as remote from '../../../remote';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { getISOWeek, getYear } from 'date-fns';
import { Router } from '@angular/router';
import { FoodsService } from '../../services/foods.service';
import { Observable } from 'rxjs/Rx';
import { GlobalSettingsService } from './../../../shared/services/global-settings-service.service';


@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss']
})
export class OrderTotalComponent implements OnInit {

  public total = 0;

  @Input() public foods: Array<remote.Food>;
  @Input() public dailyMenuOrderChef: remote.DailyMenuOrder;
  @Input() day;
  public currency: Observable<string>;

  constructor(
    public router: Router,
    public foodsService: FoodsService,
    public globalSettingsService: GlobalSettingsService
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    //this.calcTotal();
  }

  calcTotal() {
    this.total = 0;
    if (this.dailyMenuOrderChef !== undefined) {

      for (let orderItem of this.dailyMenuOrderChef.orderItems) {
        let food  = this.foodsService.getFoodById(orderItem.foodId);
        orderItem.foodType = food.foodType;
        this.total += food.price * orderItem.quantity;
      }
      this.dailyMenuOrderChef.orderItems = this.foodsService.sortArrayOfFoods(this.dailyMenuOrderChef.orderItems);
    }
  return this.total;

  }

  public getFood(foodId) {
    return this.foodsService.getFoodById(foodId);
  }

}
