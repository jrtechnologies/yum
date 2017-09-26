import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
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
  constructor(public dialogRef: MdDialogRef<TermsDialog>) { }
}
