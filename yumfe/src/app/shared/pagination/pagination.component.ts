import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() private totalItems: number = 0;
  @Input() public currentPage: number = 1;
  @Input() private pageSize: number = 10;
  public totalPages: number = 0;

  @Output() changePage = new EventEmitter();
  public pages: Array<number>;

  constructor() { }

  ngOnInit() {
    this.pager();
  }

  pager() {
    // calculate total pages
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    let startPage: number, endPage: number;

    if (isNaN(this.totalPages)) {
      // if no items yet
      startPage = 1;
      endPage = 1;
    } else if (this.totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = this.totalPages;
    } else {
      // more than 5 total pages so calculate start and end pages
      if (this.currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (this.currentPage + 2 >= this.totalPages) {
        startPage = this.totalPages - 4;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - 2;
        endPage = this.currentPage + 2;
      }
    }

    // calculate start and end item indexes
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = Math.min(startIndex + this.pageSize - 1, this.totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    this.pages = _.range(startPage, endPage + 1);

  }

  // reload the pager method on inputs changes
  ngOnChanges(changes: SimpleChanges) {
    this.pager();
  }

  // callback function on page buttons
  pageChanger(page) {
    this.changePage.emit(page);
  }
}
