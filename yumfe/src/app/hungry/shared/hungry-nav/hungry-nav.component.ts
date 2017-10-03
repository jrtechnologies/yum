import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hungry-nav',
  templateUrl: './hungry-nav.component.html',
  styleUrls: ['./hungry-nav.component.scss']
})
export class HungryNavComponent implements OnInit {

  @Input() userid: number;

  constructor() { }

  ngOnInit() {
  }

  public getQueryParams(): any{ 
      return this.userid? {userid: this.userid} : {};     
  }
}
