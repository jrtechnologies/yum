import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  public version: string;

  ngOnInit() {
    this.version = "Version: " + environment.version;
  }

  public openDialog(tabNumber) {
    const dialogRef = this.dialog.open(TermsDialog);
    const instance = dialogRef.componentInstance; // This instance pass data to dialog.
    instance.tabNumber = tabNumber;
  }
}

// Terms Dialog.
@Component({
  selector: 'app-terms-dialog',
  templateUrl: './terms-dialog.html',
})
export class TermsDialog {
  public tabNumber = 0;
  constructor(public dialogRef: MatDialogRef<TermsDialog>) { }
}
