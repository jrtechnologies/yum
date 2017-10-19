import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as remote from '../../remote';
import {URLSearchParams} from "@angular/http";

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {
  public resetForm: FormGroup;
  public isDisable = false;
  private token = '';

  // create spinner
  public showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private authService: remote.AuthApi,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.isDisable = false;

    // Create Form group, form controls, validators
    this.resetForm = this.fb.group({
      password: ['', [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/)
      ]],
      confirm: ['', [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/),
          this.validationEquals
      ]]
    });
  }

  public changePassword() {
    this.showSpinner = true;
    this.isDisable = true;

    // Take the secret token from url.
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
    });
    const resetpwd: remote.ResetPwd = {};
    resetpwd.password = this.resetForm.value.password;
    resetpwd.token = this.token;
    this.authService.authChangepwdPut(resetpwd)
      .finally(() => {
        this.showSpinner = false;
        this.isDisable = false;
      })
      .subscribe(result => {
        this.router.navigate(['login']);
        this.openSnackBar('Password Change successfully!', 'ok', 1);
      },
      error => {
        console.log(error);
        this.openSnackBar('Bad reset password data', 'ok', 2);
      })
  }
  // Custom validator for password and confirm password
  public validationEquals(control: FormControl) {
    if (control.parent != null) {
      return (control.parent.value.password === control.value) ? null : { 'confirmError': true };
    } else {
      return { 'confirmError': true };
    }
  }
  // trigger confirm password validator
  onPasswordChange() {
    this.resetForm.controls.confirm.updateValueAndValidity();
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
