import { Component, OnInit, Input, SimpleChanges, OnChanges  } from '@angular/core';
import { MatProgressBar  } from '@angular/material';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { getISOWeek, getYear } from 'date-fns';
import { Observable } from 'rxjs/Rx';

import * as remote from '../../../remote';

@Component({
  selector: 'app-daily-order-history',
  templateUrl: './daily-order-history.component.html',
  styleUrls: ['./daily-order-history.component.scss']
})

export class DailyOrderHistoryComponent implements OnInit, OnChanges  {

  private  total: number = 0;

  @Input() public dailyMenu: remote.DailyMenu;
  @Input() day;
  @Input() public currency: Observable<string>;

  constructor(private router: Router, private datePipe: DatePipe) { }

  ngOnChanges(changes: SimpleChanges) {
     //console.log("Changes:", changes);
     if(changes.total!==undefined){
         // console.log('Changed:', changes.total.currentValue, changes.total.previousValue);
     }
  }

  ngOnInit() {
     if (this.dailyMenu ) {
       if(this.dailyMenu.foods){
        this.setTotal();
       }
     }
  }

  setTotal() {
      for (let i = 0; i < this.dailyMenu.foods.length; i++) {
        this.total += this.dailyMenu.foods[i].quantity * this.dailyMenu.foods[i].food.price;
      }
       // console.log('Init total:', this.total);

  }


  getTotal() {
      this.total = 0;
      if(this.dailyMenu.foods){
        for (let i = 0; i < this.dailyMenu.foods.length; i++) {
          this.total += this.dailyMenu.foods[i].quantity * this.dailyMenu.foods[i].food.price;
        }
      }
      return this.total;
  }

  viewDailyMenu() {
      let dt = new Date(this.dailyMenu.date);
      console.log(getISOWeek(dt));
      this.router.navigate(['/hungry/', getYear(dt),  getISOWeek(dt)]);
  }

  public str(obj: any): string{
    return JSON.stringify(obj);
  }
}
