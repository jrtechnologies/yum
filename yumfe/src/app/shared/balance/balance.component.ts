import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { GlobalSettingsService } from '../../shared/services/global-settings-service.service';

import * as remote from '../../remote';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  @Input() user: remote.User;
  @Input() admin = false;
  public balanceGroup: FormGroup;
  public balance: number;
  public currency: Observable<string>;
  public showSpinnerBalance = false;

  constructor(
    private adminService: remote.AdminApi,
    private fb: FormBuilder,
    public snackBar: MdSnackBar,
    public dialog: MdDialog,
    //private router: Router,
    //private authService: AuthenticationService,
    public globalSettingsService: GlobalSettingsService

  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    // Create formGroup for adding amount to balance
    this.balanceGroup = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern('^([-]?[1-9]*[1-9][0-9]*(\.[0-9]+)?|[-]?[0]+\.[0-9]*[1-9][0-9]*)$'), Validators.pattern('^[^\,]*$')]]
    });

    if (this.user.balance == null) {
      this.balance = 0;
    } else {
      this.balance = this.user.balance;
    }

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


  updateBalance() {
    const amount = Number(this.balanceGroup.get('amount').value);
    const newBalance = this.balance + amount;
    const dialogBal = this.dialog.open(BalanceDialog, {
      data: {
        newBalance: newBalance,
        amount: amount,
        currency: this.currency
      }
    });
    dialogBal.afterClosed().subscribe(result => {

      if (result === 'Yes') {
        this.showSpinnerBalance = true;
        const deposit: remote.Deposit = {};
        deposit.amount = amount;
        deposit.balance = this.balance;
        this.adminService.balanceIdPut(this.user.id, deposit)
          .finally(() => {
            this.showSpinnerBalance = false;
          })
          .subscribe(
          value => {
            this.balanceGroup.reset();
            this.balance = value;
            this.openSnackBar('Successfull user\'s balance update', 'ok', 1);
          },
          error => {
            switch (error.status) {
              case 400:
                this.openSnackBar('Bad request.', 'ok', 3);
                break;
              case 404:
                this.openSnackBar('User not found.', 'ok', 3);
                break;
              case 409:
                const balance = JSON.parse(error._body);
                this.balance = balance;
                this.openSnackBar('No Transaction! Balance was modified by someone else. The right balance is now displayed.', 'ok', 2);
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
  selector: 'app-balance-dialog',
  templateUrl: './balance-dialog.html',
})
export class BalanceDialog {
  constructor(public dialogRef: MdDialogRef<BalanceDialog>, @Inject(MD_DIALOG_DATA) public data: any) { }
}
