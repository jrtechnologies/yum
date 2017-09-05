import { Component, OnInit } from '@angular/core';
import { ChefNavComponent } from '../shared/chef-nav/chef-nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as remote from '../../remote';
import { FoodsService } from '../services/foods.service';
import { subDays, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-ordersday',
  templateUrl: './ordersday.component.html',
  styleUrls: ['./ordersday.component.scss']
})
export class OrdersdayComponent implements OnInit {

  public orderItems: Array<remote.OrderItem>;
  public userOrders: Array<remote.UserOrder>;
  public foods: Array<remote.Food>;
  public date: string;

  public sub: any;
  public remote: any;

  constructor(
    public chefService: remote.ChefApi,
    public foodsService: FoodsService,
    public route: ActivatedRoute,
    public decpipe: DecimalPipe
  ) { }

  ngOnInit() {
    
    this.foodsService.getFoods().subscribe( foods=>{
        this.foods = foods;
     });

    this.sub = this.route.params.subscribe(params => {
      this.date = params['day'];
    }, error => console.log(error));

    this.chefService.ordersDailyDayGet(this.date).subscribe(dailyOrderSummary => {
      this.orderItems = dailyOrderSummary.orderItems;
      this.userOrders = dailyOrderSummary.userOrders;
    }, error => console.log(error));

  } // ngOnInit

  public print = (): void => {
    let printContents, popupWin;
    printContents = document.getElementById('container-to-print').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=800px,width=950px');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Daily Order Summary</title>
          <style>

          .no-print {
            display: none;
          }
          app-food-item, app-user-order {
            display: block;
          }
          .print-row-border{
            border-bottom: solid 1px;
          }
          .print-row-border-total {
            border-bottom: solid 2px;
          }

          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
