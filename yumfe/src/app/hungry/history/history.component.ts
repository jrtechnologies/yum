import { Component, OnInit, OnDestroy } from '@angular/core';
import * as remote from '../../remote';
import { MatButtonModule } from '@angular/material';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';

import { subDays, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DailyOrderHistoryComponent } from './daily-order-history/daily-order-history.component';
import { MonthNavComponent } from '../../shared/header/month-nav/month-nav.component';
import { Observable } from 'rxjs/Rx';
import { GlobalSettingsService } from '../../shared/services/global-settings-service.service';
import { ControlUserService } from '../../shared/services/control-user.service';
import { trigger, animate, style, group, animateChild, query, stagger, transition, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-hungry-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger('flyInHistory', [
      transition('void => *', [
        query(':enter .animateShow', [
          style({}),
          animate('0.5s ease-in-out', keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1.0 })
          ]))], { optional: true }),
      ])])]
})

export class HistoryComponent implements OnInit, OnDestroy {

  private dailymenus: Array<remote.DailyMenu>;

  // dailymenusMap: Map<Date, remote.DailyMenu> = new Map<Date, remote.DailyMenu>();  not working
  dailymenusMap: Map<String, remote.DailyMenu> = new Map<String, remote.DailyMenu>();

  /////////////////////
  // calendar properties  https://mattlewis92.github.io/angular-calendar/
  view: string = 'month';
  public viewdate: Date = new Date();
  locale: string = 'en';

  // exclude weekends
  excludeDays: number[] = [0, 6];
  alldays: number[] = [0, 1, 2, 3, 4, 5, 6];
  /////////////////////

  nextMonth: string;
  nextYear: string;
  private sub: any;
  private remote: any;
  currency: Observable<string>;
  totalSum: number = 0;
  public showSpinner: boolean = true;

  //admin 
  public controlledUser: remote.User;

  constructor(
    private hungryService: remote.HungryApi,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public globalSettingsService: GlobalSettingsService,
    public decpipe: DecimalPipe,
    private controlUserService: ControlUserService
  ) { }

  ngOnInit() {

    //admin
    this.controlUserService.getUser().subscribe(user => {
      this.controlledUser = user;
    });

    this.globalSettingsService.getWorkingDays().subscribe(days => {
      this.excludeDays = this.alldays.filter(function (el) {
        return !days.includes(el);
      });
    });

    this.viewdate = new Date();

    this.currency = this.globalSettingsService.getCurrency();

    this.sub = this.route.params.subscribe(params => {
      let dt = new Date(+params['year'], +params['month'] - 1, 1, 0, 0, 0); // (+) converts string 'year' na d 'month' to a number

      if (isValid(dt)) {
        this.viewdate = dt;
        this.getRemoteDailyMenus(this.buildMonthYear(this.viewdate));
      }

    });

    if (isToday(this.viewdate)) {
      this.remote = this.hungryService.menusMonthlyGet(this.controlledUser ? this.controlledUser.id : null)
        .finally(() => { this.showSpinner = false; })
        .subscribe(dailymenus => {
          this.dailymenus = dailymenus;
          this.setDailyMenusMap();
        }, error => console.log(error));
    }

  } // ngOnInit

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.remote.unsubscribe();
  }

  private getRemoteDailyMenus(monthYear: string) {

    this.remote = this.hungryService.menusMonthlyMonthyearGet(monthYear, this.controlledUser ? this.controlledUser.id : null)
      .finally(() => { this.showSpinner = false; })
      .subscribe(dailymenus => {
        this.dailymenus = dailymenus;
        this.setDailyMenusMap();
      }, error => console.log(error));

  }

  private setDailyMenusMap() {

    this.dailymenusMap = new Map<String, remote.DailyMenu>();

    for (let i = 0; i < this.dailymenus.length; i++) {
      let dt = new Date(this.dailymenus[i].date);
      dt.setHours(0, 0, 0, 0);
      let dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');

      this.dailymenusMap.set(dtStr, this.dailymenus[i]);
    }
  }

  getDailyMenusMap() {
    return this.dailymenusMap;
  }

  getDailyMenus() {
    return this.dailymenus;
  }

  orderExists(dateStr) {
    return this.dailymenusMap.has(dateStr);
  }

  getTotal() {
    this.totalSum = 0;
    if (this.dailymenus) {
      for (let dm of this.dailymenus) {
        if (dm.foods) {
          for (let foodItem of dm.foods)
            //this.total += this.dailyMenu.foods[i].quantity * this.dailyMenu.foods[i].food.price;
            this.totalSum += foodItem.quantity * foodItem.food.price;
        }
      }
    }
    return this.totalSum;
  }

  private buildMonthYear(dt: Date) {
    return this.pad(getMonth(dt) + 1, 2) + '-' + getYear(dt);
  }

  private pad(num: number, size: number): string {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }


  public onMonthNavChange(dt: Date) {
    // console.log("MonthNavComponent child changed:",dt)
    if (dt.getMonth() === new Date().getMonth() && dt.getFullYear() === new Date().getFullYear()) {
      this.router.navigate(['/hungry/history/']);
    }
    else {
      this.router.navigate(['/hungry/history/', getYear(dt), this.pad(getMonth(dt) + 1, 2)]);
    }
    // this.getRemoteDailyMenus(this.buildMonthYear(this.viewdate));

  }


}
