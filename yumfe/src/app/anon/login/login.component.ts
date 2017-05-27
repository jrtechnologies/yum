import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  // create spinner
  public showSpinner = false;
  public disableBtn = false;

  constructor(
        private fb: FormBuilder,
        private router: Router,
        private snackBar: MdSnackBar,
        private authenticationService: AuthenticationService
  ) { }

   ngOnInit() {
     // Create Form group, form controls, validators.
    this.loginForm = this.fb.group({
      email: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]],
      password: ['', [
          Validators.required
      ]]
    });
  }
public login() {
  this.showSpinner = true;
  this.disableBtn = true;
  this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .finally(() => {
        this.showSpinner = false;
        this.disableBtn = false;
      })
      .subscribe(result => { // login successful
        //this.openSnackBar('Successful login', 'ok', 1);
        if (result != null) {
          console.log('Logged as:' + result);
          switch (result) {
            case 'admin':
              this.router.navigate(['admin']);
              break;
            case 'hungry':
              this.router.navigate(['hungry']);
              break;
            case 'chef':
              this.router.navigate(['chef']);
              break;
           }
         }
      },
      error => { // login failed
        console.log(error.body);
        switch (error.status) {
          case 403:
            this.openSnackBar('You can not login (Your account is not activated yet)', 'ok', 2);
            break;
          case 404:
            this.openSnackBar('User not found (bad credentials)', 'ok', 2);
            break;
          case 500:
            this.openSnackBar('Server Error try again later', 'ok', 2);
            break;
        }
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
