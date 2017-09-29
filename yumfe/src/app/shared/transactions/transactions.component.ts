import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
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

  public displayedColumns = ['amount', 'balance', 'datetime', 'lastName', 'menuDate', 'orderType'];
  public dataSource;
  constructor(
    private globalSettingsService: GlobalSettingsService,
    private hungryService: remote.HungryApi,
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    this.hungryService.transactionsIdGet(this.userId).subscribe(transactions => {
      this.transactions = transactions;
      this.dataSource = new TransactionsDataSource(transactions);

      //this.showLoadSpinner = false;
    }, error => {
      //this.showLoadSpinner = false;
    });

  }

}

export class TransactionsDataSource extends DataSource<any> {

  private transactions;

  constructor (transactions: Array<remote.Transaction>) {
    super();
    this.transactions = transactions;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of( this.transactions);
  }

  disconnect() {}
}
