import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges  } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import {setHours, subDays, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid,  isSaturday, isSunday } from 'date-fns';


@Component({
  selector: 'app-month-nav',
  templateUrl: './month-nav.component.html',
  styleUrls: ['./month-nav.component.scss']
})
export class MonthNavComponent implements OnInit, OnChanges {

  @Input() viewDate: Date;
  @Output() viewDateChange = new EventEmitter<Date>();

  oldViewDate: Date;
  @Output() monthViewDate = new EventEmitter<Date>();

  constructor(
    private datePipe: DatePipe
  ) { this.viewDate = new Date();}

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    //Catch changes from outside component
     if(changes.viewDate!==undefined){
       if (!changes.viewDate.isFirstChange()) {
         console.log("MonthNavComponent Changes:");
         console.log('Outside changed month nav date:', changes.viewDate);
       }
     }
  }

  ngDoCheck() {
     //Catch changes from inside component
    if (this.viewDate !== this.oldViewDate) {
      this.oldViewDate = this.viewDate ;
      //this.emitDate();
      console.log('changed month nav date:', this.viewDate);
    }
  }

  public getMonthStr(): string {
      return  this.datePipe.transform(this.viewDate, 'MMMM y');
  }

  monthBefore(){
    let dt = startOfMonth(subDays(startOfMonth(this.viewDate),1));
    this.viewDate = this.nextMondayOfWeekend(dt);
    this.emitDate();
  }
  monthThis(){
    this.viewDate = new Date();
    this.emitDate();
  }
  monthNext(){

    let dt = addDays(endOfMonth(this.viewDate),1);
    this.viewDate = this.nextMondayOfWeekend(dt);

    this.emitDate();
  }
//
  private emitDate(){
    this.viewDate = setHours(this.viewDate, 12);

    this.monthViewDate.emit(this.viewDate);
    this.viewDateChange.emit(this.viewDate);

  }

  private nextMondayOfWeekend(dt): Date{
    if(isSaturday(dt )){
      dt = addDays(dt,2);
    }
    else if(isSunday(dt )){
      dt = addDays(dt,1);
    }
    return dt;
  }

}
