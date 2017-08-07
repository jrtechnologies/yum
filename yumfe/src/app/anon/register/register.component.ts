import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import * as remote from '../../remote';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  // create spinner
  public showSpinner = false;
  public disableBtn = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: remote.AuthApi,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    // Create Form group, form controls, validators
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1), Validators.pattern('.*[^ ].*')]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.pattern('.*[^ ].*')]],
      email: ['', [
        Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150),
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]],
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
  public register() {
    this.showSpinner = true;
    this.disableBtn = true;
    const body: remote.UserReg = {};
    body.firstName = this.registerForm.value.firstName;
    body.lastName = this.registerForm.value.lastName;
    body.email = this.registerForm.value.email;
    body.password = this.registerForm.value.password;
    body.role = 'hungry';
    this.authService.authRegisterPost(body)
      .finally(() => {
        this.showSpinner = false;
        this.disableBtn = false;
      })
      .subscribe(() => {
        this.openSnackBar('Account successfully created!', 'ok', 1);
        this.registerForm.reset();
        this.router.navigate(['login']);
      },
      error => {
        switch (error.status) {
          case 400:
            this.openSnackBar('Bad registration data.', 'ok', 2);
            break;
          case 412:
            this.openSnackBar('User already exists.', 'ok', 2);
            break;
          case 500:
            this.openSnackBar('Server error try again later.', 'ok', 2);
            break;
        }
      });
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
    this.registerForm.controls.confirm.updateValueAndValidity();
  }
   // status -> 1:success , 3:error
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
          extraClasses: ['error-snack-bar']
        });
        break;
    }
  }
}
