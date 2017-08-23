import { Component, Inject } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { HttpSubjectService } from './shared/services/httpSubject.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import * as remote from './remote';

import { LoginComponent } from './anon/login/login.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public dialogOpen: Boolean = false;

    constructor(
        private authService: AuthenticationService, private httpSubjectService: HttpSubjectService,
        public dialog: MdDialog, private router: Router
    ) { }

    ngOnInit(): void {
        this.authService.bootstrapUser();

        this.httpSubjectService.http401Subject.subscribe({
            next: (error: any) => {
                console.log(error);
                console.log("User token expired");
                if (this.dialogOpen == false) {
                    this.dialogOpen = true;
                    this.authService.logout();
                    
                    //this.router.navigate(['/']);
                    
                    let dialogRef = this.dialog.open(DialogLogin, { disableClose: true });

                    dialogRef.afterClosed().subscribe(result => {
                        this.dialogOpen = false;                                  
                        window.location.reload();              
                    });
                     
                }
            }
        });

    }

}

@Component({
    selector: 'dialog-login',
    templateUrl: 'dialog-login.html',
})

export class DialogLogin {
    disableRoute: Boolean = true;
    constructor(public dialogRef: MdDialogRef<DialogLogin>) {
        this.disableRoute = true;
        console.log("login started");
    }
    public loginOk(event) {
        console.log("login closed");
        this.dialogRef.close();
    }
}