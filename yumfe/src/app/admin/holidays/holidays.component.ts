import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { addYears, subYears, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';
import { CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

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

  public showLoadSpinner = false;
  @ViewChild('picker')
  public picker1: any;

  // calendar properties  https://mattlewis92.github.io/angular-calendar/
  public view: string = 'month';
  public viewYear: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  public locale: string = 'en';
  public yearMonths: Date[] = [];


  //public holidays: CalendarMonthViewDay[] = [];
  public holidays: Map<Date, CalendarMonthViewDay> = new Map<Date, CalendarMonthViewDay>();
  constructor() { }

  ngOnInit() {
    this.viewYear.subscribe(date => {
      this.buildMonths(date.getFullYear());
    })
 
  }

  ngAfterViewInit() { }

  buildMonths(year: number) {

    for (let i = 0; i < 12; i++) {
      this.yearMonths[i] = new Date(year, i);
    }
    console.log("build");
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

    let holiday: CalendarMonthViewDay = this.holidays.get(day.date);

    if (!holiday) {
      day.cssClass = 'cal-day-selected';
      this.holidays.set(day.date, day);
    } else {
      delete day.cssClass;
      this.holidays.delete(day.date);
    }

    console.log(this.holidays);
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {

      let holiday: CalendarMonthViewDay = this.holidays.get(day.date);

      if (holiday) {
        day.cssClass = 'cal-day-selected';

      }


    });
  }

}
 
