import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator } from '@angular/material';

import { GlobalSettingsService } from '../../shared/services/global-settings-service.service';

import * as remote from '../../remote';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() userId: number;
  public currency: Observable<string>;
  public transactions: Array<remote.Transaction>;

  public displayedColumns = ['datetime', 'transactionType', 'menuDate', 'amount', 'balance', 'name'];
  public dataSource;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(
    private globalSettingsService: GlobalSettingsService,
    private hungryService: remote.HungryApi,
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    this.hungryService.transactionsIdGet(this.userId).subscribe(transactions => {
      this.transactions = transactions;
      this.dataSource = new TransactionsDataSource(transactions, this.paginator);
    }, error => {
    });

  }

}

export class TransactionsDataSource extends DataSource<any> {

//  private transactions;

  // constructor (private transactions: Array<remote.Transaction>, private paginator: MdPaginator) {
    constructor (private transactions: any, private paginator: MdPaginator) {
    super();
    this.paginator.length = transactions.length;
  //  this.transactions = transactions;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    //return Observable.of( this.transactions);
    const displayTransactions = [
      this.transactions,
      this.paginator.page
    ];

    return Observable.merge(...displayTransactions).map(() => {
      const data = this.transactions.slice();

      // Grab the page's slice of data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    });

  }

  disconnect() {}
}
