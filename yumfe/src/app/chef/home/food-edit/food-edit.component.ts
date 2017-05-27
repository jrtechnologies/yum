import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import * as remote from '../../../remote';
import { GlobalSettingsService } from '../../../shared/services/global-settings-service.service';


@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})

export class FoodEditComponent implements OnInit {

  @Input() public foodDetails: remote.FoodDetails = {};
  @Output() foodCreated = new EventEmitter();
  public foodTypesForm: Array<string>;
  // form
  public food: FormGroup;
  public showForm = true;
  // create spinner
  public showSpinner = false;
  // validation for unique name of foods
  public isNameUnique = true;

  // values for counter
  public maxlength = 250;
  public characterleft = this.maxlength;
  public tweetmsg: string;

  public currency: Observable<string>


  constructor(
    public chefService: remote.ChefApi,
    public snackBar: MdSnackBar,
    private gss: GlobalSettingsService
    ) { }

  ngOnInit() {

    this.foodTypesForm = ['Main', 'Salad', 'Drink'];

    this.currency  = this.gss.getCurrency();

    this.food = new FormGroup({
      foodName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.pattern('.*[^ ].*')]),
      foodType: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(250)),
      price: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^([1-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$')])
    });


  }

  // method for count how many chars is remaning for the description
  count(msg) {
    if (this.maxlength >= msg.length) {
      this.characterleft = (this.maxlength) - (msg.length);
    } else {
      this.tweetmsg = msg.substr(0, msg.length - 1);
      console.log(msg);
    }
  }

  clearForm() {
    this.showForm = false;
    setTimeout(() => {
      this.food.reset({ description: '' });
      this.showForm = true;
    });
  }

  createFood() {

    this.showSpinner = true;
    this.clearForm();

    this.chefService.foodsPost(this.food.value).subscribe(foodDetails => {

      this.foodCreated.emit(this.foodDetails);
      this.openSnackBar('Food succefully created!', 'ok', true);
    }, error => {
      console.log(error);
      this.openSnackBar('Food cannot be created!', 'ok', false);
      this.showSpinner = false;
    },
      () => {
        this.showSpinner = false;
      });

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

  // Checks if the name of the new food that Chef want it doesn't exist, or if it's exists checks if it's archived or not
  public uniqueName(name) {

    this.chefService.foodsFindByNameNameGet(name).subscribe(food => {

      if (food.archived === false) {
        this.isNameUnique = false;
      } else {
        this.isNameUnique = true;
      }
    }, error => {
      console.log(error);
      this.isNameUnique = true;
    });

  }


}
