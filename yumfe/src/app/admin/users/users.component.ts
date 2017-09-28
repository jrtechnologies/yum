import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import * as remote from '../../remote';
import { AuthenticationService } from '../../shared/authentication.service';
import { GlobalSettingsService } from '../../shared/services/global-settings-service.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private sub: any;
  private userId = 0;
  public user: remote.User;
  public profileGroup: FormGroup;
  //copy initial input values for enabling/disabling submit button
  private initialEmail: string;
  private initialFirstName: string;
  private initialLastName: string;
  private initialRole: string;
  //Flag for refreshing inputs after 409 error
  public change = false;
  //spinner
  public showSpinner = false;
  public showSpinnerBalance = false;
  public invalid = false;
  public externalAuth: Boolean = false;
  public balanceGroup: FormGroup;
  public balance: number;
  public currency: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private adminService: remote.AdminApi,
    private fb: FormBuilder,
    public snackBar: MdSnackBar,
    public dialog: MdDialog,
    private router: Router,
    private authService: AuthenticationService,
    public globalSettingsService: GlobalSettingsService
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    //check if id is valid
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (!isNaN(id)) {
        this.userId = +id; // (+) converts string 'id' to a number
        this.loadUser();
      }
    });

    // Create formGroup
    this.profileGroup = this.fb.group({
      role: [''],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [
        Validators.required, Validators.minLength(2),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]
      ]
    });

    // Create formGroup for adding amount to balance
    this.balanceGroup = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern('^([-]?[1-9]*[1-9][0-9]*(\.[0-9]+)?|[-]?[0]+\.[0-9]*[1-9][0-9]*)$'), Validators.pattern('^[^\,]*$')]]
    });


    this.externalAuth = this.authService.hasExternalAuth();
  }

  ngOnChanges() {
    this.profileGroup.markAsTouched();
  }

  // loads user form usersIdGet API
  private loadUser() {
    this.adminService.usersIdGet(this.userId).subscribe(user => {
      this.user = user;
      this.initialEmail = user.email;
      this.initialFirstName = user.firstName;
      this.initialLastName = user.lastName;
      this.initialRole = user.role;
      this.profileGroup.controls.role.patchValue(user.role);
      this.profileGroup.controls.firstName.patchValue(user.firstName);
      this.profileGroup.controls.lastName.patchValue(user.lastName);
      this.profileGroup.controls.email.patchValue(user.email);
      this.balance = user.balance;
    }, error => {
      //console.log(error)
    });

  }

  // if changes of initial values enable 'Save changes' button
  public detectChanges() {
    if ((this.user.firstName !== this.initialFirstName) || (this.user.lastName !== this.initialLastName) ||
      (this.user.email !== this.initialEmail) || (this.user.role !== this.initialRole)) {
      return true;
    } else {
      return false;
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

  // Callback on submit
  public updateUser({ value, valid }: { value, valid: boolean }) {
    const userSettings: remote.UserSettings = {};
    userSettings.firstName = this.user.firstName;
    userSettings.lastName = this.user.lastName;
    userSettings.role = this.user.role;
    userSettings.email = this.user.email;
    userSettings.lastEdit = this.user.lastEdit;
    this.showSpinner = true;
    this.adminService.usersIdPut(this.userId, userSettings)
      .subscribe(
      result => {
        //this.user.lastEdit.version += 1;
        //this.profileGroup.markAsUntouched();
        this.showSpinner = false;
        this.openSnackBar('User succefully modified!', 'ok', 1);
        this.router.navigate(['/admin/']);
      },
      error => {
        this.showSpinner = false;
        switch (error.status) {
          // User has both final and non-final orders. Can be force disapproved
          case 400:
            this.openSnackBar('User can not be modified! Some data are invalid', 'ok', 3);
            break;
          // User has only non-final orders. Can be force deleted
          case 409:
            const newUserVersion = JSON.parse(error._body);
            this.user.lastName = newUserVersion.lastName;
            this.user.firstName = newUserVersion.firstName;
            this.user.email = newUserVersion.email;
            this.user.role = newUserVersion.role.toLowerCase();
            this.user.approved = newUserVersion.approved;
            this.user.lastEdit.version = newUserVersion.lastEdit.version;
            //Refresh initial values
            this.initialEmail = newUserVersion.email;
            this.initialFirstName = newUserVersion.firstName;
            this.initialLastName = newUserVersion.lastName;
            this.initialRole = newUserVersion.role.toLowerCase();
            this.change = !this.change;
            this.openSnackBar('User\'s details have been modified by someone else. The newest version is now dispalyed in the form', 'ok', 2);

            break;
          // User has only final orders. Can be disapproved
          case 500:
            this.openSnackBar('User can not be modified!', 'ok', 3);
            break;
          default:


        }
      }
      );

  }

  resetPwd() {
    let dialogRef = this.dialog.open(ResetPwdDialog);
    dialogRef.afterClosed().subscribe(result => {

      if (result === 'Yes') {
        this.adminService.usersIdForgotpwdPost(this.user.id)
          .subscribe(
          value => {
            this.openSnackBar('Successfull password reset', 'ok', 1);
          },
          error => {
            this.openSnackBar('Password cannot be reset', 'ok', 3);
          }
          );
      }
    });

  }

  // Callball after invalid data in form from profile component
  handleInvalidProfileForm(validFlag: string) {
    if (validFlag === "invalid") {
      this.invalid = true;
    } else {
      this.invalid = false;
    }
  }

  handleUpdateVersion() {
    this.user.lastEdit.version += 1;
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
                this.openSnackBar('Server error try again later.', 'ok', 2);
                break;
            }
          }
          );
      }
    });
  }

}

@Component({
  selector: 'app-admin-reset-pwd-dialog',
  templateUrl: './admin-reset-pwd-dialog.html',
})
export class ResetPwdDialog {
  constructor(public dialogRef: MdDialogRef<ResetPwdDialog>) { }
}

@Component({
  selector: 'app-admin-balance-dialog',
  templateUrl: './admin-balance-dialog.html',
})
export class BalanceDialog {
  constructor(public dialogRef: MdDialogRef<BalanceDialog>, @Inject(MD_DIALOG_DATA) public data: any) { }
}
