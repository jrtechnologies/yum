import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as remote from '../../remote';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { AdminNavComponent } from './../shared/admin-nav/admin-nav.component';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private users: Array<remote.User>;
  public page = 1;
  public pageSize = 10;
  public orderBy = 'registrationDate';
  public direction = 'DESC';
  public totalUsers: number;
  private totalpages: number;
  public showLoadSpinner = false;
  public externalAuth: Boolean = false;
  private searchTerm: string= null;

  // Options for pageSize Select
  public pageSizes = [
    { value: 10, viewValue: '10' },
    { value: 20, viewValue: '20' },
    { value: 50, viewValue: '50' },
    { value: 100, viewValue: '100' }
  ];

  // Options for orderBy Select
  public orderByOptions = [
    { value: 'registrationDate', viewValue: 'Registration date' },
    { value: 'lastName', viewValue: 'Name' },
    { value: 'userRole', viewValue: 'Role' },
    { value: 'approved', viewValue: 'Approval status' }
  ];

  // forms
  public userGroup: FormGroup;
  public searchGroup: FormGroup;

  // create user spinner
  public showSpinner = false;


  // paged items
  pagedItems: any[];

  constructor(private adminService: remote.AdminApi, private fb: FormBuilder,
    public snackBar: MdSnackBar, public dialog: MdDialog,
    private authService: AuthenticationService) {
    //this.someExpression = null;
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
    this.userGroup.controls.confirm.updateValueAndValidity();
  }

  // Create Form group using FormBuilder,  form controls, validators
  buildForm() {

    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [
        Validators.required, Validators.minLength(2),
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]],
      password: ['', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/)
      ]],
      confirm: ['', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/),
        this.validateEqual
      ],
      ],
      role: ['hungry'],
    });

  }

  ngOnInit() {
    // Create Form group, form controls, validators
    this.userGroup = this.buildForm();
    this.loadUsers(this.page);
    this.externalAuth = this.authService.hasExternalAuth();

    this.searchGroup = this.fb.group({
       lastName: [''],
    });

  }


  // load users of specific page
  private loadUsers(page: number) {
    this.showLoadSpinner = true;
    this.adminService.usersGet((page - 1).toString(), this.pageSize.toString(), this.orderBy, this.direction, this.searchTerm).subscribe(usersPage => {
      this.users = usersPage.users;
      this.totalUsers = usersPage.totalElements;
      this.totalpages = usersPage.totalPages;
      this.page = page;
      this.showLoadSpinner = false;
    }, error => {
      this.showLoadSpinner = false;
    });

  }

  getUsers() {
    return this.users;
  }

  // Resets the form
  clearForm() {
     this.userGroup.reset();
     this.userGroup.patchValue({ role: 'hungry' });
  }

  createUser() {
    let value = this.userGroup.value;
    //Creation of DTO
    let userReg: remote.UserReg = {};
    userReg.firstName = value.firstName;
    userReg.lastName = value.lastName;
    userReg.password = value.password;
    userReg.role = value.role;
    userReg.email = value.email;
    //show spinner next to button
    this.showSpinner = true;
    this.adminService.usersPost(userReg)
      .finally(() => {
        this.showSpinner = false;

      })
      .subscribe(
      result => {
        this.openSnackBar('User successfully created!', 'ok', true);
        this.clearForm();
        this.pageSize = 10;
        this.orderBy = 'registrationDate';
        this.direction = 'DESC';

        this.loadUsers(1);
      },
      error => {
        this.openSnackBar('User cannot be created!', 'ok', false);
      }
      );

  }

  // change page size callback
  changePageSize(newValue) {
    this.pageSize = newValue;
    this.page = 1;
    this.loadUsers(this.page);

  }

  // change order callback
  changeOrderBy(newValue) {
    this.orderBy = newValue;
    this.loadUsers(this.page);
  }

  // change direction callback
  changeDirection(direction: string) {
    this.direction = direction;
    this.loadUsers(this.page);
  }

  // success and error snackBars
  private openSnackBar(message: string, action: string, timeOut: boolean) {
    if (timeOut) {
      this.snackBar.open(message, action, {
        duration: 5000,
        extraClasses: ['success-snack-bar']
      });
    } else {
      this.snackBar.open(message, action, {
        extraClasses: ['error-snack-bar']
      });
    }
  }

  // delete user callback
  handleDeletedUser() {
    if (this.totalUsers % this.pageSize === 1) {
      this.page -= 1;
    }
    this.loadUsers(this.page);
    this.openSnackBar('User successfully deleted!', 'ok', true);

  }

  // change page callback
  handlechangePage(page) {
    this.page = page;
    this.loadUsers(page);
  }

  searchUsers() {

    const inputSearchTerm = this.searchGroup.get('lastName').value;
    if (inputSearchTerm.length > 2) {
      this.searchTerm = inputSearchTerm;
      this.loadUsers(1);
    } else if (inputSearchTerm.length === 0) {
      this.searchTerm = null;
      this.loadUsers(1);
    }
  }

}



