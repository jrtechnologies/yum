import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar, MdButtonToggleGroup, MdButtonToggleGroupMultiple, MdButtonToggleChange } from '@angular/material';
import * as remote from '../../remote';


@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss']
})
export class GlobalSettingsComponent implements OnInit {

  public showLoadSpinner = false;

  @ViewChild('mdButtongroup')
  public groupButtonWorkingDays: MdButtonToggleGroupMultiple; //


  currencyList: [{ name: string, symbol: string }] =
  [
    { name: 'Euro &euro;', symbol: '&euro;' },
    { name: 'Dollar &dollar;', symbol: '&dollar;' },
    { name: 'Pound &pound;', symbol: '&pound;' },
    { name: 'Yen &yen;', symbol: '&yen;' },
    { name: 'Ruble &#8381;', symbol: '&#8381;' },
    { name: 'Ruppe &#8377;', symbol: '&#8377;' },
    { name: 'Yuan &#20803;', symbol: '&#20803;' },
  ];

  public workingDays: number[];

  public availableWorkingDays: [{ name: string, value: number }] =
  [
    { name: 'Monday', value: 1 },
    { name: 'Tuesday', value: 2 },
    { name: 'Wednesday', value: 3 },
    { name: 'Thursday', value: 4 },
    { name: 'Friday', value: 5 },
    { name: 'Saturday', value: 6 },
    { name: 'Sunday', value: 0 }
  ];

  gss: remote.GlobalSettings;

  constructor(private adminService: remote.AdminApi, public snackBar: MdSnackBar, private router: Router) { }

  ngOnInit() {
    this.showLoadSpinner = true;
    this.adminService.globalsettingsGet().subscribe(response => {
      this.showLoadSpinner = false;
      this.gss = response;
      this.workingDays = JSON.parse(this.gss.workingDays).days;
    }, error => {
      this.showLoadSpinner = false;
    });

  }

  save(form: NgForm) {
    this.adminService.globalsettingsPut(this.gss).subscribe(response => {
      this.gss.lastEdit.version++;
      this.router.navigate(['/admin/']);
      this.openSnackBar('Settings saved', 'ok', 1);
    }, error => {
      let errorStr: string;
      switch (error.status) {
        case 400:
          errorStr = 'Settings not changed';
          break;
        case 409:
          errorStr = 'Settings already changed';
          break;
      }
      this.openSnackBar(errorStr, 'ok', 3);
    });
  }
  public cancel() {
    this.router.navigate(['/admin/']);
  }
  private openSnackBar(message: string, action: string, status: number) {
    if (action === undefined) { action = 'ok' };
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

 

  public wDaysChanged(event) {

    console.log(event);
    console.log(this.groupButtonWorkingDays);
    let day = event.value;
    if (event.source.checked) {
      this.workingDays.push(day);
    }
    else {
      var index = this.workingDays.indexOf(day);
      if (index > -1) {
        this.workingDays.splice(index, 1);
      }
    }

    this.gss.workingDays = JSON.stringify({"days":this.workingDays});
    console.log(this.workingDays);
    console.log(this.gss.workingDays);
  }
   
}
