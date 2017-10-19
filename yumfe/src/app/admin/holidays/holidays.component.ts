import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { addYears, subYears, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';
import { CalendarDateFormatter, CalendarMonthViewDay, CalendarEvent } from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { AdminApi } from '../../remote';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class HolidaysComponent implements OnInit {

  public showLoadSpinner = true;
  @ViewChild('picker')
  public picker1: any;

  // calendar properties  https://mattlewis92.github.io/angular-calendar/
  public view: string = 'month';
  public viewYear: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  public viewYearNumber: number;
  public locale: string = 'en';
  public yearMonths: Date[] = [];
  public refresh: Subject<any> = new Subject();
  public holidaysSaveDisabled: boolean = false;
  private sub: any;

  //public holidays: CalendarMonthViewDay[] = [];
  public holidays: Map<String, CalendarMonthViewDay> = new Map<String, CalendarMonthViewDay>();
  
  constructor(private adminService: AdminApi, private datePipe: DatePipe,
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MatSnackBar
    //private router: Router
  ) { }

  ngOnInit() { 

    this.viewYear.subscribe(date => {
      this.showLoadSpinner = true;
      this.viewYearNumber = date.getFullYear();
      this.getHolidays(this.viewYearNumber);
    })

    this.sub = this.route.params.subscribe(params => {
      let yearDate = new Date(+params['year'], 0, 1, 0, 0, 0); // (+) converts string 'year' to a number

      if (isValid(yearDate)) { 
        this.viewYear.next(yearDate);
      }

    });
  }

  public getHolidays(year) { 
    this.location.replaceState("admin/globalSettings/holidays/"+year);

    this.adminService.globalsettingsHolidaysYearGet(year).subscribe(holidays => {
      // console.log(holidays);
      this.holidays = new Map<String, CalendarMonthViewDay>();

      for (let holiday of holidays) {
        let dtStr = this.datePipe.transform(holiday, 'yyyy-MM-dd');
        let calDay: CalendarMonthViewDayImp = new CalendarMonthViewDayImp();
        calDay.date = holiday;
        this.holidays.set(dtStr, calDay);

      }
      this.buildMonths(year);
      this.refresh.next();
      this.showLoadSpinner = false;
    });


  }

  public setHolidays() {
    this.holidaysSaveDisabled = true;
    this.showLoadSpinner = true;
    let holidays: string[] = Array.from(this.holidays, x => this.datePipe.transform(x[1].date, 'yyyy-MM-dd'));
    this.adminService.globalsettingsHolidaysYearPost(this.viewYearNumber, holidays).subscribe(response => {

      //console.log(response);
      this.holidaysSaveDisabled = false;
      this.showLoadSpinner = false;
      this.openSnackBar('Holidays saved!', 'ok', true);
         
      },
      error => {
        this.openSnackBar('Holidays could not be saved!', 'ok', false);
      });
  }

  ngAfterViewInit() { }

  buildMonths(year: number) {
    
    for (let i = 0; i < 12; i++) {
      this.yearMonths[i] = new Date(year, i);
    }
    //console.log("build");
  }

  prevYear() {
    this.viewYear.next(subYears(this.viewYear.getValue(), 1));
  }

  nextYear() {
    this.viewYear.next(addYears(this.viewYear.getValue(), 1));
  }

  clickedDate(day: CalendarMonthViewDay, monthDate: Date) {

    if (monthDate.getMonth() !== day.date.getMonth()) {
      return;
    }

    let dtStr = this.datePipe.transform(day.date, 'yyyy-MM-dd');
    let holiday: CalendarMonthViewDay = this.holidays.get(dtStr);


    if (!holiday) {
      day.cssClass = 'cal-day-selected';
      this.holidays.set(dtStr, day);
    } else {
      delete day.cssClass;
      this.holidays.delete(dtStr);
    }

    //console.log(this.holidays);
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      let dtStr = this.datePipe.transform(day.date, 'yyyy-MM-dd');
      let holiday: CalendarMonthViewDay = this.holidays.get(dtStr);

      if (holiday) {
        day.cssClass = 'cal-day-selected';

      }
    });

    
  }

  // success and error snackBars
  private openSnackBar(message: string, action: string, timeOut: boolean) {
    if (timeOut) {
      this.snackBar.open(message, action, {
        duration: 5000,
        extraClasses: ['success-snack-bar']
      });
    } else {
      this.snackBar.open(message, action, {
        extraClasses: ['error-snack-bar']
      });
    }
  }
}

class CalendarMonthViewDayImp implements CalendarMonthViewDay {
  inMonth: boolean;
  events: CalendarEvent[];
  backgroundColor?: string;
  badgeTotal: number;
  meta?: any;
  date: Date;
  isPast: any;
  isToday;
  isFuture;
  isWeekend;
}