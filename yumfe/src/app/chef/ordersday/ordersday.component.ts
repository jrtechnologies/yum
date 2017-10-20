import { Component, OnInit } from '@angular/core';
import { ChefNavComponent } from '../shared/chef-nav/chef-nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as remote from '../../remote';
import { FoodsService } from '../services/foods.service';
import { subDays, addDays, startOfMonth, endOfMonth, getMonth, getYear, isToday, isValid } from 'date-fns';
import { DecimalPipe } from '@angular/common';
import { MatSnackBar, MatDialog, MatDialogRef, } from '@angular/material';

@Component({
  selector: 'app-ordersday',
  templateUrl: './ordersday.component.html',
  styleUrls: ['./ordersday.component.scss']
})
export class OrdersdayComponent implements OnInit {

  public orderItems: Array<remote.OrderItem>;
  public userOrders: Array<remote.UserOrder>;
  public foods: Array<remote.Food>;
  public date: string;

  public sub: any;
  public remote: any;

  public showSpinner = false;

  constructor(
    public chefService: remote.ChefApi,
    public foodsService: FoodsService,
    public route: ActivatedRoute,
    public decpipe: DecimalPipe,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {

    this.foodsService.getFoods().subscribe(foods => {
      this.foods = foods;
    });

    this.sub = this.route.params.subscribe(params => {
      this.date = params['day'];
    }, error => console.log(error));

    this.chefService.ordersDailyDayGet(this.date).subscribe(dailyOrderSummary => {
      this.orderItems = dailyOrderSummary.orderItems;
      this.userOrders = dailyOrderSummary.userOrders;
    }, error => console.log(error));

  } // ngOnInit

  public print = (): void => {
    let printContents, popupWin;
    printContents = document.getElementById('container-to-print').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=800px,width=950px');
    if(!popupWin) { return; }
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Daily Order Summary</title>
          <style>

          .no-print {
            display: none;
          }
          app-food-item, app-user-order {
            display: block;
          }
          .print-row-border{
            border-bottom: solid 1px;
          }
          .print-row-border-total {
            border-bottom: solid 2px;
          }
          .is-flex {display: flex; align-items: center; justify-content: space-between; }
          .align-right {
            text-align: right;
          }
          .comment{     
            font-size: 0.8em;
            font-style: italic;
            word-wrap: break-word; 
            word-break: break-all;
          }
          .user{ margin-bottom:20px;}
          .smallPad{ padding: 10px;}
          .smallpadTopBottom { padding: 10px 0;}
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

  // status -> 1:success , 2:warning, 3:error
  private openSnackBar(message: string, action: string, status: number) {
    switch (status) {
      case 1:
        this.snackBar.open(message, action, {
          duration: 5000,
          extraClasses: ['success-snack-bar']
        });
        break;
      case 2:
        this.snackBar.open(message, action, {
          extraClasses: ['warning-snack-bar']
        });
        break;
      case 3:
        this.snackBar.open(message, action, {
          extraClasses: ['error-snack-bar']
        });
        break;
    }
  }

  sendEmail() {
    let dialogRef = this.dialog.open(ReportEmailDialog);
     dialogRef.afterClosed().subscribe(result => {

      if (result === 'Yes') {


        this.showSpinner = true;
        this.chefService.reportDayPost(this.date)
          .finally(() => {
            this.showSpinner = false;
          })
          .subscribe(
            result => {
              this.openSnackBar('Order summary email report sent successfully!', 'ok', 1);
            },
            error => {
              switch (error.status) {
                // User has both final and non-final orders. Can be force disapproved
                case 400:
                  this.openSnackBar('Bad request.', 'ok', 3);
                  break;
                case 500:
                  this.openSnackBar('Server error try again later.', 'ok', 3);
                  break;
              }
            }
          );
      }
    });
  }
}

@Component({
  selector: 'app-ordersday-email-dialog',
  templateUrl: './ordersday-email-dialog.html',
})
export class ReportEmailDialog {
  constructor(public dialogRef: MatDialogRef<ReportEmailDialog>) { }
}
