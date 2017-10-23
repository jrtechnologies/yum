import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar, MatProgressBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { subDays, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';



import * as models from './../../shared/models';
import * as remote from '../../remote';
import { DailyMenuComponent } from './daily-menu/daily-menu.component';
import { FoodsService } from '../../shared/services/foods.service';
import { MonthNavComponent } from '../../shared/header/month-nav/month-nav.component';
import { ChefNavComponent } from '../shared/chef-nav/chef-nav.component';
import { GlobalSettingsService } from '../../shared/services/global-settings-service.service';
import { AdminApi } from '../../remote';
import { AuthenticationService } from '../../shared/authentication.service';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  /////////////////////
  //calendar properties  https://mattlewis92.github.io/angular-calendar/
  view: string = 'month';
  public viewdate: Date = new Date();
  locale: string = 'en';

  // exclude weekends
  excludeDays: number[] = [0, 6];
  alldays: number[] = [0, 1, 2, 3, 4, 5, 6];
  /////////////////////

  foods: Array<remote.Food> = [];

  menus: Array<remote.DailyMenuChef>;
  menusMap: Map<String, remote.DailyMenuChef> = new Map<String, remote.DailyMenu>();

  private sub: any;
  private remote: any;
  public showSpinner: boolean = true;
  public holidays: string[];
  public userRole: string;

  constructor(private foodsService: FoodsService,
    private chefService: remote.ChefApi,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public snackBar: MatSnackBar,
    public globalSettingsService: GlobalSettingsService,
    private adminService: AdminApi,
    private authService: AuthenticationService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.viewdate = new Date();
    this.userRole = this.authService.getLoggedInRole();

    this.globalSettingsService.getWorkingDays().subscribe(days => {
      this.excludeDays = this.alldays.filter(function (el) {
        return !days.includes(el);
      });

    });

    this.foodsService.getFoods().subscribe(foods => {
      this.foods = foods;
    });


    this.sub = this.route.params.subscribe(params => {
      //this.foods = this.foodsService.getFoods();

      let dt = new Date(+params['year'], +params['month'] - 1, 1, 0, 0, 0); // (+) converts string 'year' and 'month' to a number

      if (isValid(dt)) {
        console.log("router date:" + dt);
        this.viewdate = dt;
        this.getRemoteMenus(this.buildMonthYear(this.viewdate));
        this.getHolidays();
      }

    });

    this.getThisMonthMenus();
    this.getHolidays();
  }

  private getHolidays() {
    let year = this.viewdate.getFullYear();

    if (this.holidays && this.holidays[0] == year.toString()) {
      return;
    }

    console.log("getHolidays");
    this.adminService.globalsettingsHolidaysYearGet(year).subscribe(holidays => {
      this.holidays = [year.toString()];
      for (let holiday of holidays) {
        let dtStr = this.datePipe.transform(holiday, 'yyyy-MM-dd');
        this.holidays.push(dtStr);
      }
    });


  }


  private getThisMonthMenus() {
    if (isToday(this.viewdate)) {
      this.remote = this.chefService.dailyMenusMonthlyGet()
        .finally(() => {
          this.showSpinner = false;
        })
        .subscribe(menus => {
          console.log("subscribed menus of current month");
          this.setMenus(menus);
        }, error => console.log(error));
    }
  }

  private getRemoteMenus(monthYear: string) {

    this.remote = this.chefService.dailyMenusMonthlyMonthyearGet(monthYear)
      .finally(() => {
        this.showSpinner = false;
      })
      .subscribe(menus => {
        this.showSpinner = false;
        this.setMenus(menus);
      }, error => {
        this.showSpinner = false;
        console.log(error);
      });

  }

  public onMonthNavChange(dt: Date) {
    if (dt.getMonth() === new Date().getMonth() && dt.getFullYear() === new Date().getFullYear()) {
      this.router.navigate(['/chef/menus/']);
    }
    else {
      this.router.navigate(['/chef/menus/', getYear(dt), this.pad(getMonth(dt) + 1, 2)]);
    }


  }

  private buildMonthYear(dt: Date) {
    return this.pad(getMonth(dt) + 1, 2) + '-' + getYear(dt);
  }

  private setMenus(menus) {
    this.menus = menus;

    for (let i = 0; i < this.menus.length; i++) {
      let dt = new Date(this.menus[i].date);
      dt.setHours(0, 0, 0, 0);
      let dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');

      this.menusMap.set(dtStr, this.menus[i]);
    }
    console.log("menus map:", this.menusMap);
  }

  private pad(num: number, size: number): string {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  // status -> 1:success , 2:warning, 3:error
  private openSnackBar(message: string, action: string, status: number) {
    if (action === undefined) { action = "ok" };
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

  public dailyMenuError(msg: models.SnackMessage) {
    this.openSnackBar(msg.message, msg.action, msg.status);
  }

  public setSpinner(set: boolean) {

  }

  public deleteMenuAndOrders(menu) {
    if(!menu){ return; }

    let dialogRef = this.dialog.open(DialogDeleteMenuWithOrders, {
      width: '300px',
      data: menu
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result == 'Yes') {
        this.showSpinner = true;

        this.adminService.dailyMenusIdDelete(menu.id)
          .finally(() => {
            this.showSpinner = false;
          })
          .subscribe(() => {
            //toggle
            if(this.menusMap.get(menu.date)===null){
                this.menusMap.delete(menu.date);
            }
            else{
              this.menusMap.set(menu.date, null);
            }
            let responseOk: models.SnackMessage = {};   
            responseOk.message="Menu deleted successfully";
            responseOk.status = 1; //ok
            this.dailyMenuError(responseOk);
          }, error => {
            console.log(error);
            let responseError: models.SnackMessage = {};
            switch (error.status) {
              case 400:
                responseError.message = "Menu delete bad request data";
                break;
              case 412:
                responseError.message = "Menu deadline passed";
                break;
              case 500:
                responseError.message = "An unexpected error occured.";
                break;

            }
            responseError.status = 3; //error
            this.dailyMenuError(responseError);

          });

      }
    });
  }

}



@Component({
  selector: 'dialog-delete-menu-with-orders',
  templateUrl: 'dialog-delete-menu-with-orders.html',
})
export class DialogDeleteMenuWithOrders {

  public menuDate: string;

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteMenuWithOrders>, private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public menu: remote.DailyMenuChef) { }

  ngOnInit() {
    this.menuDate = this.datePipe.transform(this.menu.date, 'dd/MM/yyyy');
  }


}