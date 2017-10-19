import { Component, OnInit, EventEmitter, Input, Output, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { QuotesService } from './../services/quotes.service';

interface Quote {
  quote: string;
  author: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public disableRoute: Boolean; //Login as a dialog form
  @Output() loginOk = new EventEmitter<Boolean>();
  @ViewChild('password') elPass;

  public loginForm: FormGroup;
  // create spinner
  public showSpinner = false;
  public disableBtn = false;

  public externalAuth: Boolean = true;
  public config: MatSnackBarConfig;
  public quote: Quote;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
    private elRef: ElementRef,
    private renderer: Renderer2,
    public viewContainerRef: ViewContainerRef,
    private quoteService: QuotesService
  ) {
    this.config = new MatSnackBarConfig();
  }

  ngOnInit() {
    // Create Form group, form controls, validators.


    this.loginForm = this.fb.group({
      username: [''
        , Validators.required
      ],
      email: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });

    this.authService.getRemoteAuthMethod().subscribe(
      value => {

        if (value === 'ldap') {
          this.externalAuth = true;
          this.loginForm.get('username').setValidators([Validators.required]);
          this.loginForm.get('email').clearValidators();
          this.loginForm.get('password').setValidators([Validators.required]);
          this.loginForm.get('password').updateValueAndValidity();
        } else {
          this.externalAuth = false;
          this.loginForm.get('username').clearValidators();
          this.loginForm.get('email').setValidators([
            Validators.required,
            Validators.minLength(2),
            Validators.email
          ]);

        }

        this.loginForm.get('username').updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this.loginForm.get('email').updateValueAndValidity({ onlySelf: true, emitEvent: false });


        // Handle chrome autofill password
        let passwordListener = this.loginForm.controls['password'].valueChanges
          .startWith(null)
          .debounceTime(200)
          .distinctUntilChanged()
          .subscribe(c => {

            if (c !== null) {
              passwordListener.unsubscribe();
              return;
            }

            let el = this.elRef.nativeElement.querySelector('input[type=password]:-webkit-autofill');
            if (el && c === null) {
              this.loginForm.get('password').setValidators([]);
            }
            else if (value === 'ldap') {
              this.loginForm.get('password').setValidators([Validators.required]);
            }
            else {
              this.loginForm.get('password').setValidators([Validators.required, Validators.minLength(6)]);
            }

            this.loginForm.get('password').updateValueAndValidity();
          });


      });


    this.getRandomQuote();

  }

  public login() {
    this.showSpinner = true;
    this.disableBtn = true;
    
    this.loginForm.get('username').updateValueAndValidity({ onlySelf: true, emitEvent: true });
    this.loginForm.get('email').updateValueAndValidity({ onlySelf: true, emitEvent: true });
    this.loginForm.get('password').updateValueAndValidity({ onlySelf: true, emitEvent: true }); 

    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value, this.loginForm.get('username').value)
      .finally(() => {
        this.showSpinner = false;
        this.disableBtn = false;
      })
      .subscribe(result => { // login successful
        //this.openSnackBar('Successful login', 'ok', 1);
        if (result != null) {
          console.log('Logged as:' + result[1]);

          if (this.disableRoute === true) {
            this.loginOk.emit(true);
          } else {
            switch (result[1]) {
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
    //this.snackBar.dismiss();

    this.config.duration = 3000;
    switch (status) {
      case 1:
        this.config.extraClasses = ['success-snack-bar'];
        break;
      case 2:
        this.config.extraClasses = ['error-snack-bar'];
        break;
    }
    this.snackBar.open(message, action, this.config);
  }

  private getRandomQuote() {

    this.quoteService.getQuote<any>().subscribe(data => {
      if (data && data.success) {
        this.quote = data.contents.quotes[0];
        console.log(data);
      }

    }, err => {
      console.log('Get quote failed!', err);
    });
  }
}
