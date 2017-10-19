import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostListener, Inject } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { AuthenticationService } from '../authentication.service';
import { BASE_PATH } from '../../remote/variables';
import { MatProgressBar, MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';

import * as remote from '../../remote';

//const URL = 'http://localhost:8082/api/settings/picture';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  // directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})


export class ProfileComponent implements OnInit {

  @Input() user: remote.User;
  @Input() change: boolean;
  @Input() admin = false;

  //@Output() userChanged = new EventEmitter();
  @Output() invalidProfileForm = new EventEmitter<String>();
  @Output() updateVersion = new EventEmitter();

  public profileGroup: FormGroup;
  public showForm = true;
  public progress = false;

  private URLadmin = this.baseUrl + '/users/';
  private URL: string = this.baseUrl+"/settings/picture";
  public userPicture: string;


  // ng2-file-upload
  public uploader: FileUploader;

  // Options for roles Select
  public roles = [
    { value: 'hungry', viewValue: 'Hungry' },
    { value: 'chef', viewValue: 'Chef' },
    { value: 'admin', viewValue: 'Admin' }
  ];

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService,
              private adminService: remote.AdminApi,
              private hungryService: remote.HungryApi,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              @Inject(BASE_PATH) private baseUrl: string
  ) { }

  ngOnInit() {

    this.userPicture = this.baseUrl + '/settings/picture/token?token='+this.auth.getToken();

    if (this.admin) {
      this.URLadmin = this.URLadmin + this.user.id + '/picture';
      this.uploader = new FileUploader({ url: this.URLadmin, autoUpload: true, removeAfterUpload: true, authToken: 'Bearer ' + this.auth.getToken() });
      this.userPicture = this.baseUrl + '/users/' + this.user.id + '/picture/token?token=' + this.auth.getToken() + '&random=';
      console.log('this.userPicture: ', this.userPicture);
    } else {
      this.uploader = new FileUploader({ url: this.URL, autoUpload: true, removeAfterUpload: true, authToken: 'Bearer ' + this.auth.getToken() });
      this.userPicture = this.baseUrl + '/settings/picture/token?token=' + this.auth.getToken() + '&random=';
    }


    // Create Form group, form controls, validators
    this.profileGroup = this.fb.group({
      role: [this.user.role],
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(1)]],
      lastName: [this.user.lastName, [Validators.required, Validators.minLength(1)]],
      email: [this.user.email, [
        Validators.required, Validators.minLength(2),
        // tslint:disable-next-line:max-line-length
        Validators.email
      ]
      ]
    });

    this.profileGroup.valueChanges.subscribe(controlsData => {
      this.user.firstName = controlsData.firstName;
      this.user.lastName = controlsData.lastName;
      this.user.email = controlsData.email;
      this.user.role = controlsData.role;
      if (this.profileGroup.invalid) {
        console.log('invalid1' , this.profileGroup.invalid );
        this.invalidProfileForm.emit('invalid');
      } else {
        this.invalidProfileForm.emit('valid');
      }

      //this.auth.updateUserDetails(this.user);

    });

    this.uploader.onAfterAddingFile = () => {
      this.progress = true;
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.progress = false;
      if (status === 200) {
        this.openSnackBar('Image uploaded', 'ok', 1);
        // this.snackBar.open("Image uploaded", "ok", {
        //   duration: 5000,
        //   extraClasses: ['success-snack-bar']
        // });
        //this.userPicture = this.userPicture +  Math.random();
        this.user.hasPicture = true;
        this.userPicture = this.userPicture + '1';
        //this.user.lastEdit.version += 1;
        this.updateVersion.emit();
        this.auth.updateUserDetailsHasPicture(this.user.hasPicture);


      } else {
        this.openSnackBar('An error occured', 'ok', 3);
        // this.snackBar.open("An error occured", "ok", {
        //   extraClasses: ['error-snack-bar']
        // });
      }
    };

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

  deletePicture() {
    let dialogRef = this.dialog.open(DeletePictureDialog);
    dialogRef.afterClosed().subscribe(result => {

      if (result === 'Yes') {
        if (this.admin) {
          this.adminService.usersIdPictureDelete(this.user.id)
            .subscribe(
              value => {
                this.userPicture = this.baseUrl + '/users/' + this.user.id + '/picture/token?token=' + this.auth.getToken() + '&random=';
                this.user.hasPicture = false;
                this.updateVersion.emit();
                this.openSnackBar('Picture deleted', 'ok', 1);

              },
              error => {
                console.log(error);
                this.openSnackBar('Picture cannot be deleted', 'ok', 3);
              }

            );

        } else {
          // hungry service  delete picture
          this.hungryService.settingsPictureDelete()
            .subscribe(
              value => {
              this.userPicture = this.baseUrl + '/settings/picture/token?token=' + this.auth.getToken() + '&random=';
              this.user.hasPicture = false;
              this.updateVersion.emit();
              this.openSnackBar('Picture deleted', 'ok', 1);
              this.auth.updateUserDetailsHasPicture(this.user.hasPicture );
            },
            error => {
              console.log(error);
              this.openSnackBar('Picture cannot be deleted', 'ok', 3);
            }
            );
        }
      }

    });

  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.profileGroup != null) {
      //console.log('onChanges1', this.profileGroup);
      this.profileGroup.patchValue({ role: this.user.role, firstName: this.user.firstName, lastName: this.user.lastName, email: this.user.email });
    }
  }


}

@Component({
  selector: 'app-delete-picture-dialog',
  templateUrl: './delete-picture-dialog.html',
})
export class DeletePictureDialog {
  constructor(public dialogRef: MatDialogRef<DeletePictureDialog>) { }
}
