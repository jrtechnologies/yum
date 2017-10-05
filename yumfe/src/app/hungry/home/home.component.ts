import { Component, OnInit, OnDestroy } from '@angular/core';
import { startOfWeek, setISOWeek, getISOWeek, getISOYear, getYear, addWeeks, isToday, addDays, isValid, subWeeks, getMonth } from 'date-fns';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import * as remote from '../../remote';
import { DatePipe } from '@angular/common';
import { MonthNavComponent } from '../../shared/header/month-nav/month-nav.component';
import { GlobalSettingsService } from '../../shared/services/global-settings-service.service';
import { Observable, Subject } from 'rxjs/Rx';
import { ControlUserService } from '../../shared/services/control-user.service';

interface observables{
  wdays: any, controlledUser: any
}

@Component({
  selector: 'app-hungry-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  protected dailymenus: Array<remote.DailyMenu>;
  protected date: Date = new Date();
  public monthDate: Date = new Date();
  public weekDays: Array<string> = [];
  protected sub: any;
  protected dailymenusMap: Map<String, remote.DailyMenu> = new Map<String, remote.DailyMenu>();
  public currency: Observable<string>;
  public deadline: Observable<any>;
  public notes: Observable<string>;
  public showLoadSpinner = false;
  public weeklyTotalPrice = 0;
  public workingDays: number[];
  private observable: any
  //admin 
  public controlledUser: remote.User;

  constructor(
    private hungryService: remote.HungryApi,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public globalSettingsService: GlobalSettingsService,
    private adminApi: remote.AdminApi,
    private controlUserService: ControlUserService
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    this.deadline = this.globalSettingsService.getDeadLine();
    this.notes = this.globalSettingsService.getNotes();

    // this.observable = Observable
    // .zip(this.globalSettingsService.getWorkingDays(), this.controlUserService.getUser(), (wdays: any, controlledUser: any) => {
    //    return { wdays: wdays, controlledUser: controlledUser } })
    // .subscribe((r:observables) => {
    //   this.workingDays = r.wdays; 
    //   this.controlledUser = r.controlledUser;
    //   console.log("Controlled user:", r.controlledUser);
    //   this.setup();
    // });

    this.globalSettingsService.getWorkingDays().subscribe(wdays => {
      this.workingDays = wdays;      
        
        //admin
        this.observable = this.controlUserService.getUser().subscribe(user=>{       
          if(user){ console.log("Controlled user:", user); }
          this.controlledUser = user;
          this.setup();         
      });

    });

  }

  public setup() {
 
    this.sub = this.route.params.subscribe(params => {
      let dt = new Date(+params['year'], 1, 1); // (+) converts string 'year' na d 'month' to a number
      dt = setISOWeek(dt, +params['week']);
      if (isValid(dt)) {
        dt = addDays(dt, 1);

        //console.log('router dt:', dt);
        this.date = dt;
        //this.monthDate = this.date;

        this.weekDaysCal(startOfWeek(this.date, { weekStartsOn: 1 }));
        if (this.weekDays.length > 0) {
          this.monthDate = new Date(this.weekDays[this.weekDays.length - 1]);
        }
        else { this.monthDate = this.date; }

        this.getCurrentWeeklyMenu(this.buildweekYear(this.date));
      }  
    });

    if (isToday(this.date)) {
      this.showLoadSpinner = true;
      this.monthDate = this.date;
      this.weekDaysCal(startOfWeek(this.date, { weekStartsOn: 1 })); 
      this.hungryService.menusWeeklyGet(this.controlledUser ? this.controlledUser.id : null).subscribe(dailymenus => { 
        this.showLoadSpinner = false;
        this.dailymenus = dailymenus;
        this.weekMenuMap();
      }, error => this.showLoadSpinner = false);
    }

  }


  public handleUserUpdated(dailyTPrice, day) {
    const menu: remote.DailyMenu = this.dailymenusMap.get(day);
    menu.totalPrice = dailyTPrice;
    this.dailymenusMap.set(day, menu);
  }
  public getTotalPrice() {
    let weekTotal = 0;
    this.dailymenusMap.forEach(menu => {
      if (menu.totalPrice != null) {
        weekTotal += menu.totalPrice;
      }
    });
    return weekTotal;
  }
  ngOnDestroy() {
    if(this.sub) this.sub.unsubscribe();

    if(this.observable) this.observable.unsubscribe();
  }

  private getCurrentWeeklyMenu(weekYear: string) {
    this.showLoadSpinner = true;
    this.hungryService.menusWeeklyWeekGet(weekYear, this.controlledUser ? this.controlledUser.id : null).subscribe(dailymenus => {
      this.showLoadSpinner = false;
      this.dailymenus = dailymenus;
      this.weekMenuMap();
    }, error => this.showLoadSpinner = false);
  }

  private weekDaysCal(d: Date) {
    this.weekDays = [];

    for (let i = 0; i < 7; i++) {

      const dtStr = this.datePipe.transform(d, 'yyyy-MM-dd');

      if (this.workingDays.includes(d.getDay())) {
        this.weekDays.push(dtStr);
      }

      d = addDays(d, 1);
    }

    //console.log(this.weekDays);
  }

  private weekMenuMap() {
    this.dailymenusMap.clear();
    for (let i = 0; i < this.dailymenus.length; i++) {
      const dt = new Date(this.dailymenus[i].date);
      const dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');
      this.dailymenusMap.set(dtStr, this.dailymenus[i]);
    }
  }

  public getDailyMenusMap() {
    return this.dailymenusMap;
  }

  public getDailyMenu(d: any) {
    for (let dailymenu of this.dailymenus) {
      if (dailymenu.date === d) {
        return dailymenu;
      }
    }
  }

  public dailyMenuExists(dateStr: String) {
    return this.dailymenusMap.has(dateStr);
  }

  public previousWeek() {
    this.date = subWeeks(this.date, 1);
    if (getISOWeek(this.date) === getISOWeek(new Date()) && this.date.getFullYear() === new Date().getFullYear()) {
      this.router.navigate(['/hungry']);
    } else {
      this.navWeekYear(this.date);
    }
  }
  public currentWeek() {
    this.router.navigate(['/hungry']);
  }
  public nextWeek() {
    this.date = addWeeks(this.date, 1);
    if (getISOWeek(this.date) === getISOWeek(new Date()) && this.date.getFullYear() === new Date().getFullYear()) {
      this.router.navigate(['/hungry']);
    } else {
      this.navWeekYear(this.date);
    }
  }
  private navWeekYear(dt: Date) {
    this.router.navigate(['/hungry/', getYear(dt), this.pad(getISOWeek(dt), 2)]);
  }
  private buildweekYear(dt: Date) {
    return this.pad(getISOWeek(dt), 2) + '-' + getISOYear(dt);
  }
  private pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }
  public onMonthNavView(dt: Date) {
    //this.monthDate = dt;
    if (dt.getMonth() === new Date().getMonth() && dt.getFullYear() === new Date().getFullYear()) {
      this.router.navigate(['/hungry']);
    } else {
      this.router.navigate(['/hungry/', getISOYear(dt), this.pad(getISOWeek(dt), 2)]);
    }
  }

  public formattedDay(day: string): string {
    const date = new Date(day);
    return (this.datePipe.transform(date, 'EEEE / d MMM'));
  }

  public formattedDeadline(deadline: any): string {
    if (deadline != null) {
      const time: Date = deadline.dTime;
      return ('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2);
    } else {
      return '';
    }
  }

  public formattedDeadlineDays(deadline: any): string {
    if (deadline != null) {
      switch (deadline.dDays) {
        case 0:
          return 'the same day';
        case 1:
          return 'the previous day';
        default:
          return deadline.dDays + ' days before';
      }
    } else {
      return '';
    }

  }

}
