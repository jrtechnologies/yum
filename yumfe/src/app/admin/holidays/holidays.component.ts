import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  public showLoadSpinner = false;
  @ViewChild('picker')
  public picker1: any;

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    //this.picker1.__proto__.open();
  }
}
