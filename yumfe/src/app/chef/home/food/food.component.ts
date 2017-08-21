import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as remote from '../../../remote';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { GlobalSettingsService } from './../../../shared/services/global-settings-service.service';
import { DecimalPipe } from '@angular/common';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  @Output() foodEditHome = new EventEmitter();
  @Output() foodRefresh = new EventEmitter();
  @Input() public editFlag = 0;
  @Input() public food: remote.FoodWithStats;
  public foodEditable: remote.FoodEditable;
  public clone = false;
  public editing = false;
  public ready: boolean;
  public config = new MdDialogConfig();
  public currency: Observable<string>;
  public flagClone = false;
  public percentage: number;
  public lastWeek = 0;
  public secondLastWeek = 0;

  constructor(
    public chefService: remote.ChefApi,
    public dialog: MdDialog,
    public globalSettingsService: GlobalSettingsService,
    public decpipe: DecimalPipe,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.currency = this.globalSettingsService.getCurrency();
    this.config.disableClose = true;

    if (this.food.stats['lastWeek'].quantity !== null) {
      this.lastWeek = this.food.stats['lastWeek'].quantity;
    }

    if (this.food.stats['2ndLastWeek'].quantity !== null) {
      this.secondLastWeek = this.food.stats['2ndLastWeek'].quantity;
    }

    if (this.secondLastWeek === 0 && this.lastWeek === 0) {
      this.percentage = 0;
    } else if (this.secondLastWeek === 0 && this.lastWeek === 0) {
      this.percentage = -1;
    } else {
      this.percentage = (this.lastWeek * 100) / this.secondLastWeek;
      this.percentage -= 100;
    }

  }

  public openSnackBar(message: string, action: string, timeOut: boolean) {
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


  edit() {

    this.chefService.foodsFoodIdGet(this.food.foodItem.id, 'editable').subscribe(foodEditable => {
      this.foodEditable = foodEditable;
      if (foodEditable.editable) {
        this.editing = true;
      } else {

        const dialogRef = this.dialog.open(EditCloneDialogComponent, this.config);
        dialogRef.afterClosed().subscribe(result => {

          if (result === 1) {
            // edit only the description of Food
            this.editing = true;
            this.clone = false;
          } else if (result === 2) {
            // clone the Food
            this.editing = true;
            this.clone = true;
            this.flagClone = true;
          } else {
            // close the dialog
            this.editing = false;
            this.clone = false;
          }
        });
      }
    }, error => {
      console.log(error);
      this.openSnackBar('Food cannot be updated!', 'ok', false);
    },
      () => { this.ready = true; }); // when complete
  }

  handleCloseEditFoodEvent() {
    this.editing = false;
    this.clone = false;
  }

  // Delete the Food or Archived it and refresh the list of Foods
  delete() {

    const deleteAskRef = this.dialog.open(DeleteAskDialogComponent, this.config);
    deleteAskRef.afterClosed().subscribe(result => {

      if (result === 1) {
        // Delete the Food
        this.chefService.foodsFoodIdDelete(this.food.foodItem.id).subscribe(data => {
          this.openSnackBar('Food succefully deleted!', 'ok', true);
        }, error => {
          console.log(error);
          this.openSnackBar('Food cannot be deleted!', 'ok', false);
          if (error.status === 412) {
            const deleteRef = this.dialog.open(DeleteDialogComponent, this.config);
            deleteRef.afterClosed().subscribe(result => {

              if (result === 1) {
                // Archived the Food
                this.chefService.foodsFoodIdDelete(this.food.foodItem.id, true).subscribe(complete => {
                  this.openSnackBar('Food succefully archived!', 'ok', true);
                  this.foodRefresh.emit(); // Refresh the list of Foods after Archived
                }, error => {
                  this.openSnackBar('Food cannot be archived!', 'ok', false);
                });
              } else {
                this.editing = false;
              }
            });
          }
        },
          () => {
            this.foodRefresh.emit(); // Refresh the list of Foods after delete
          });
      } else {
        this.editing = false;
      }
    });
  }

  handleUpdateFood(food) {
    this.food.foodItem = food;
    //this.food.foodItem.price = Number(this.decpipe.transform(this.food.foodItem.price, '1.2-2'));
    if (this.flagClone) {
      this.openSnackBar('Food clone succefully created!', 'ok', true);
      this.flagClone = false;
    } else {
      this.openSnackBar('Food succefully updated!', 'ok', true);
    }
    this.foodRefresh.emit(); // Refresh the list of Foods after edit
  }

}

@Component({
  selector: 'app-chef-food-dialog',
  templateUrl: './food-dialog.component.html',
})
export class EditCloneDialogComponent {
  constructor(public dialogRef: MdDialogRef<EditCloneDialogComponent>) { }

}

@Component({
  selector: 'app-chef-delete-ask-dialog',
  templateUrl: './food-delete-ask-dialog.component.html',
})
export class DeleteAskDialogComponent {
  constructor(public deleteAskRef: MdDialogRef<DeleteAskDialogComponent>) { }

}

@Component({
  selector: 'app-chef-delete-dialog',
  templateUrl: './food-delete-dialog.component.html',
})
export class DeleteDialogComponent {
  constructor(public deleteRef: MdDialogRef<DeleteDialogComponent>) { }
}


