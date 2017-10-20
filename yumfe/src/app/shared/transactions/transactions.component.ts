import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';

import { GlobalSettingsService } from '../../shared/services/global-settings-service.service';

import * as remote from '../../remote';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() userId: number;
  @Input() update: boolean;
  public currency: Observable<string>;
  public transactions: Array<remote.Transaction>;

  public displayedColumns = ['datetime', 'transactionType', 'menuDate', 'amount', 'balance', 'name'];
  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private globalSettingsService: GlobalSettingsService,
    private hungryService: remote.HungryApi,
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    this.getTransactions();
  }

  ngOnChanges() {

    this.getTransactions();
  }

  getTransactions() {
    this.hungryService.transactionsIdGet(this.userId).subscribe(transactions => {
      this.transactions = transactions;
      this.dataSource = new TransactionsDataSource(transactions, this.paginator);
    }, error => {
    });

  }

  public formattedDateTime(dateTime: Date): string {
    return moment(dateTime).format('DD-MM-YYYY HH:mm:ss');
  }

}

export class TransactionsDataSource extends DataSource<any> {

  //  private transactions;

  // constructor (private transactions: Array<remote.Transaction>, private paginator: MatPaginator) {
  constructor(private transactions: any, private paginator: MatPaginator) {
    super();
    this.paginator.length = transactions.length;
    //  this.transactions = transactions;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
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

  disconnect() { }

}
