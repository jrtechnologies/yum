import { Component, OnInit, ViewChild } from '@angular/core';
import { addYears, subYears, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';
import { CalendarDateFormatter } from 'angular-calendar';
import {CustomDateFormatter} from './custom-date-formatter.provider';
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
  ]
})
export class HolidaysComponent implements OnInit {

  public showLoadSpinner = false;
  @ViewChild('picker')
  public picker1: any;

  // calendar properties  https://mattlewis92.github.io/angular-calendar/
  public view: string = 'month';
  public viewYear:  BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date()); 
  public locale: string = 'en';
  public yearMonths: Date[] = [];
  constructor() { }

  ngOnInit() {      
    this.viewYear.subscribe(date => {
      this.buildMonths( date.getFullYear());
  })
 
    
  }

  ngAfterViewInit() {  }

  buildMonths(year: number){
    this.yearMonths= [];
    for(let i =0; i<12; i++){
        this.yearMonths.push(new Date(year,i));
      } 
      console.log("build");
  }

  prevYear(){
    this.viewYear.next(subYears(this.viewYear.getValue(), 1));
  }

  nextYear(){
    this.viewYear.next(addYears(this.viewYear.getValue(), 1));
  }

}
