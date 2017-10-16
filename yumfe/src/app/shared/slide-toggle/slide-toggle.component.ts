import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as remote from '../../remote';
import { AuthenticationService } from '../authentication.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-slide-toggle-component',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

 // @Input() approvedText;
  @Input() user: remote.User;
  @Input() public externalAuth: Boolean = false;

  @Output() updateVersion = new EventEmitter();

  public userId = this.authService.getLoggedInUser().id;

  constructor(private adminService: remote.AdminApi, private authService: AuthenticationService,  public dialog: MatDialog) { }



  ngOnInit() {
    // if (this.user.approved) {
    //   this.approvedText = 'User approved';
    // } else {
    //   this.approvedText = 'User not approved';
    // }
  }

  private forceDisapprove() {
    this.adminService.usersIdApprovePut(this.user.id, false, true)
      .subscribe(
      value => {
        this.user.approved = false;
        this.updateVersion.emit();
      },
      error => console.log(error)
      );
  }

  approve(event, aprv: boolean) {
    if (aprv) {
      this.adminService.usersIdApprovePut(this.user.id, aprv)
        .subscribe(
        value => {
          this.user.approved = true;
          this.updateVersion.emit();
        },
        error => console.log(error)
        );
    } else {
      this.adminService.usersIdApprovePut(this.user.id, aprv, false)
        .subscribe(
        value => {
          this.user.approved = false;
          this.updateVersion.emit();
        },
        error => {
          console.log(error);
          if (error.status === 400) {
            event.source.checked = true;
          } else if (error.status === 409) {
            event.source.checked = true;
            let dialogRef = this.dialog.open(UserDisapproveDialog, {
              //height: '400px',
              //width: '600px'
            });
            dialogRef.afterClosed().subscribe(result => {

              if (result === 'Yes') {
                this.forceDisapprove();
              }
              //  else {
              // //  this.approvedText = 'User approved';
              // }
            });
          }
        });
    }
  }

}

@Component({
  selector: 'app-disapprove-dialog',
  templateUrl: './user-disapprove-dialog.html',
})
export class UserDisapproveDialog {
  constructor(public dialogRef: MatDialogRef<UserDisapproveDialog>) { }
}
