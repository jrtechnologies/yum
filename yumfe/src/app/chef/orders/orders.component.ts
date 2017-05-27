import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChefNavComponent} from '../shared/chef-nav/chef-nav.component';
import * as remote from '../../remote';
import { MdButtonModule } from '@angular/material';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { subDays, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { OrderTotalComponent } from './order-total/order-total.component';
import { MonthNavComponent } from '../../shared/header/month-nav/month-nav.component';
import { FoodsService } from '../services/foods.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  public dailyMenuOrderChef: Array<remote.DailyMenuOrder>;
  public foods: Array<remote.Food>;

  public ordersMenusMap: Map<String, remote.DailyMenuOrder> = new Map<String, remote.DailyMenuOrder>();
  public showSpinner: boolean = true;

  /////////////////////
  // calendar properties
  public view = 'month';
  public viewdate: Date = new Date();
  public locale = 'en';

  // exclude weekends
  public excludeDays: number[] = [0, 6];
  /////////////////////

  public nextMonth: string;
  public nextYear: string;
  public sub: any;
  public remote: any;

  constructor(
    public chefService: remote.ChefApi,
    public foodsService: FoodsService,
    public datePipe: DatePipe,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router) { }

  ngOnInit() {
    console.log('----- on init HistoryComponent!! -----');
    this.foods = this.foodsService.getFoods();
    this.viewdate = new Date();

    this.sub = this.route.params.subscribe(params => {
      let dt = new Date(+params['year'], +params['month'] - 1, 1, 0, 0, 0); // (+) converts string 'year' na d 'month' to a number

      if (isValid(dt)) {
        console.log('router date:' + dt);
        this.viewdate = dt;
        this.getRemoteDailyMenus(this.buildMonthYear(this.viewdate));
      }

    });

    if (isToday(this.viewdate)) {
      this.remote = this.chefService.ordersMonthlyGet().subscribe(orders => {
        console.log('subscribed orders of current month');
        this.dailyMenuOrderChef = orders;
        this.setOrdersMenusMap();
        this.showSpinner = false;
      }, error => {
        this.showSpinner = false;
        console.log(error);
      } );
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.remote.unsubscribe();
  }

  public getRemoteDailyMenus(monthYear: string) {

    this.remote = this.chefService.ordersMonthlyMonthyearGet(monthYear)
     .subscribe(orders => {
      console.log('subscribed orders of:', monthYear);
      this.dailyMenuOrderChef = orders;
      this.setOrdersMenusMap();
      this.showSpinner = false;

    }, error => {
      this.showSpinner = false;
      console.log(error)});

  }

   public setOrdersMenusMap() {

    for (let i = 0; i < this.dailyMenuOrderChef.length; i++) {
      let dt = new Date(this.dailyMenuOrderChef[i].dailyMenuDate);
      dt.setHours(0, 0, 0, 0);
      let dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');

      this.ordersMenusMap.set(dtStr, this.dailyMenuOrderChef[i]);
    }
    console.log('order s map:', this.ordersMenusMap);
  }

  public orderExists(dateStr) {
    return this.ordersMenusMap.has(dateStr);
  }

  public buildMonthYear(dt: Date) {
    return this.pad(getMonth(dt) + 1, 2) + '-' + getYear(dt);
  }

  public pad(num: number, size: number): string {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }


  public onMonthNavChange(dt: Date) {
    this.router.navigate(['/chef/orders/', getYear(dt), this.pad(getMonth(dt) + 1, 2)]);
  }

}
