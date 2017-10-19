import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as remote from '../../../remote';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { GlobalSettingsService } from './../../../shared/services/global-settings-service.service';
import { DecimalPipe } from '@angular/common';
import { MatSnackBar, MatSlideToggle } from '@angular/material';

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
  public config = new MatDialogConfig();
  public currency: Observable<string>;
  public flagClone = false;
  public percentage: number;
  public lastWeek = 0;
  public secondLastWeek = 0;
  public showSpinner = false;
  
  constructor(
    public chefService: remote.ChefApi,
    public dialog: MatDialog,
    public globalSettingsService: GlobalSettingsService,
    public decpipe: DecimalPipe,
    public snackBar: MatSnackBar
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
    } else {
      this.percentage = ((this.lastWeek-this.secondLastWeek)*100) / this.secondLastWeek; 
    }

  }

  // status -> 1:success , 2:error
  public openSnackBar(message: string, action: string, status: number) {
    switch (status) {
      case 1:
        this.snackBar.open(message, action, {
          duration: 5000,
          extraClasses: ['success-snack-bar']
        });
        break;
      case 2:
        this.snackBar.open(message, action, {
          extraClasses: ['error-snack-bar']
        });
        break;
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
      this.openSnackBar('Food cannot be updated!', 'ok', 2);
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
          this.openSnackBar('Food succefully deleted!', 'ok', 1);
        }, error => {
          console.log(error);
          this.openSnackBar('Food cannot be deleted!', 'ok', 2);
          if (error.status === 412) {
            const deleteRef = this.dialog.open(DeleteDialogComponent, this.config);
            deleteRef.afterClosed().subscribe(result => {

              if (result === 1) {
                // Archived the Food
                this.chefService.foodsFoodIdDelete(this.food.foodItem.id, true).subscribe(complete => {
                  this.openSnackBar('Food succefully archived!', 'ok', 1);
                  this.foodRefresh.emit(); // Refresh the list of Foods after Archived
                }, error => {
                  this.openSnackBar('Food cannot be archived!', 'ok', 2);
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
      this.openSnackBar('Food clone succefully created!', 'ok', 1);
      this.flagClone = false;
    } else {
      this.openSnackBar('Food succefully updated!', 'ok', 1);
    }
    this.foodRefresh.emit(); // Refresh the list of Foods after edit
  }

  public setFoodAsStandard(event){

    
    this.showSpinner = true;
    this.chefService.foodsFoodIdGet(this.food.foodItem.id, 'editable').subscribe(foodEditable => {

      if(foodEditable.foodItem.standard != this.food.foodItem.standard){
        this.openSnackBar('Food already changed!', 'ok', 2);
        this.food.foodItem = foodEditable.foodItem;
        this.food.lastEdit = foodEditable.lastEdit; 
        return;
      }
       
      let editedFood: remote.EditedFood= this.food.foodItem;
      let val = !foodEditable.foodItem.standard;

      editedFood.lastEdit = foodEditable.lastEdit;
      editedFood.standard = val;        
      
      this.chefService.foodsFoodIdPut(this.food.foodItem.id, editedFood, false).subscribe(foodDetails => {
        this.food.foodItem.standard = val;
        this.openSnackBar('Food succefully edited!', 'ok', 1);
      }, error => {
        console.log(error);
        this.openSnackBar('Food cannot be edited!', 'ok', 2);
        this.showSpinner = false;
      },
        () => {
          this.showSpinner = false; 
        });
    });
 


  }

}

@Component({
  selector: 'app-chef-food-dialog',
  templateUrl: './food-dialog.component.html',
})
export class EditCloneDialogComponent {
  constructor(public dialogRef: MatDialogRef<EditCloneDialogComponent>) { }

}

@Component({
  selector: 'app-chef-delete-ask-dialog',
  templateUrl: './food-delete-ask-dialog.component.html',
})
export class DeleteAskDialogComponent {
  constructor(public deleteAskRef: MatDialogRef<DeleteAskDialogComponent>) { }

}

@Component({
  selector: 'app-chef-delete-dialog',
  templateUrl: './food-delete-dialog.component.html',
})
export class DeleteDialogComponent {
  constructor(public deleteRef: MatDialogRef<DeleteDialogComponent>) { }
}


