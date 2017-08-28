import { Component, OnInit } from '@angular/core';
import * as remote from '../../remote';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public userId = this.authService.getLoggedInUser().id;
  public user: remote.User;
  public profileGroup: FormGroup;

  // copy initial input values fot enabling/disabling submit button
  private initialEmail: string;
  private initialFirstName: string;
  private initialLastName = '';//: string;
  // private initialRole: string;
  // Flag for refreshing inputs after 409 error
  public change = false;
  // spinner
  public showSpinner = false;
  public invalid = false;
  public externalAuth: Boolean = false;

  constructor(private authService: AuthenticationService, private hungryService: remote.HungryApi, private fb: FormBuilder,
    public snackBar: MdSnackBar, private router: Router) { }

  ngOnInit() {
    
    //const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;

    this.externalAuth = this.authService.hasExternalAuth();
    console.log("settings auth:" + this.externalAuth);

    
    this.profileGroup = this.fb.group({
      // role: [''],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [
        Validators.required, Validators.minLength(2),
        Validators.pattern(emailPattern)
      ]
      ],
      password: ['', [ //, disabled: this.externalAuth 
    
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/)
      ]],
      confirm: ['' , [
  
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/),
        this.validateEqual
      ],
      ],
    });

    // load user
    this.loadUser();
  }

  // Custom validator for password and confirm password
  validateEqual(control: FormControl) {

    if (control.parent != null) {
      return (control.parent.value.password === control.value) ? null : { 'confirmError': true };
    } else {
      return { 'confirmError': true };
    }
  }

  // trigger confirm password validator
  onPasswordChange() {
    this.profileGroup.controls.confirm.updateValueAndValidity();
  }

  private setupForm() {
    // Check can change password 

    if(this.externalAuth && this.user.id !== 1){
      this.profileGroup.get('password').disable();
      this.profileGroup.get('confirm').disable();
    }
  }

  private loadUser() {
    this.hungryService.settingsGet(this.userId).subscribe(user => {
      this.user = user;
      this.initialEmail = user.email;
      this.initialFirstName = user.firstName;
      this.initialLastName = user.lastName;
      // this.initialRole = user.role;
      // this.profileGroup.controls.role.patchValue(user.role);
      this.profileGroup.controls.firstName.patchValue(user.firstName);
      this.profileGroup.controls.lastName.patchValue(user.lastName);
      this.profileGroup.controls.email.patchValue(user.email);
      this.profileGroup.get('password');

      this.setupForm();

    }, error => { }); //console.log(error));

  }

  public displayRole(): string {
    switch (this.user.role) {
      case 'HUNGRY':
        return 'Hungry';
      case 'CHEF':
        return 'Chef';
      case 'ADMIN':
        return 'Admin';
      case 'hungry':
        return 'Hungry';
      case 'chef':
        return 'Chef';
      case 'admin':
        return 'Admin';

    }
  }

  // if changes of initial values enable 'Save changes' button
  public detectChanges() {
    if ((this.user.firstName !== this.initialFirstName) || (this.user.lastName !== this.initialLastName) ||
      (this.user.email !== this.initialEmail) || (this.profileGroup.controls.password.value !== '')) {
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

  public updateUser() {
    const userSettings: remote.Settings = {};
    userSettings.firstName = this.user.firstName;
    userSettings.lastName = this.user.lastName;
    // userSettings.role = this.user.role;
    this.user.role.toLowerCase();
    userSettings.email = this.user.email;
    userSettings.lastEdit = this.user.lastEdit;
    userSettings.password = this.profileGroup.controls.password.value;

    this.showSpinner = true;
    this.hungryService.settingsPut(userSettings)
      .subscribe(
      result => {
        this.showSpinner = false;
        this.user.role.toLowerCase();
        this.authService.updateUserDetails(this.user);
        this.openSnackBar('You succefully modified your settings!', 'ok', 1);
        this.router.navigate(['/' + this.user.role.toLowerCase() + '/']);
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
            // this.initialRole = newUserVersion.role.toLowerCase();
            this.change = !this.change;
            this.openSnackBar('Your settings have been previously modified. The newest version is now displayed in the form', 'ok', 2);

            break;
          // User has only final orders. Can be disapproved
          case 500:
            this.openSnackBar('User can not be modified!', 'ok', 3);
            break;
          default:


        }
        //console.log(error);
      }
      );

  }

  cancelEditing() {
    this.router.navigate(['/' + this.user.role.toLowerCase() + '/']);
  }

  // Callball after invalid data in form from profile component
  handleInvalidProfileForm(validFlag: string) {
    if (validFlag === "invalid") {
      this.invalid = true;
    } else {
      this.invalid = false;
    }
  }
  // Update user version after profile picture change
  handleUpdateVersion() {
    this.user.lastEdit.version += 1;
  }

}
