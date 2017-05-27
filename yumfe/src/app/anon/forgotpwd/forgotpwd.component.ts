import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as remote from '../../remote';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})

export class ForgotpwdComponent implements OnInit {
  public forgotForm: FormGroup;
  public isDisable = false;

  // create spinner
  public showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private authService: remote.AuthApi,
    private router: Router,
    public snackBar: MdSnackBar
    ) {}

  ngOnInit() {
    // Create Form group, form controls, validators
    this.forgotForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]]
     });
  }
  public resetPassword() {
    this.showSpinner = true;
    this.isDisable = true;
    this.authService.authForgotpwdPost(this.forgotForm.value.email)
    .finally(() => {
        this.showSpinner = false;
        this.isDisable = false;
      })
    .subscribe(result => {
      this.router.navigate(['login']);
      this.openSnackBar('Password Reset successfully!', 'ok', 1);
    },
    error => {
      console.log(error);
      this.openSnackBar('No user found with this email', 'ok', 2);
    }
    );
  }
  // status -> 1:success , 3:error
  private openSnackBar(message: string, action: string, status: number) {
    switch (status) {
      case 1:
        this.snackBar.open(message, action, {
          duration: 3000,
          extraClasses: ['success-snack-bar']
        });
        break;
      case 2:
        this.snackBar.open(message, action, {
          extraClasses: ['error-snack-bar']
        });
        break;
    }
  }
}
