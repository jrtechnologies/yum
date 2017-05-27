import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as remote from '../../../remote';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-food-inline-edit',
  templateUrl: './food-inline-edit.component.html',
  styleUrls: ['./food-inline-edit.component.scss']
})
export class FoodInlineEditComponent implements OnInit {

  @Input() public food: remote.FoodWithStats;
  @Output() updateFood = new EventEmitter();
  @Output() closeEditFood = new EventEmitter();
  @Input() public foodEditable: remote.FoodEditable;
  @Input() public clone: boolean;
  public foodTypesForm: Array<string>;
  public disabled = false;
  // booleans for check if there are any change in the form while the chef edits
  public foodNameChange = false;
  public foodTypeChange = false;
  public descriptionChange = false;
  public priceChange = false;
  // form
  public foodEditForm: FormGroup;
  // create spinner
  public showSpinner = false;
  // validation for unique name of foods
  public isNameUnique = true;
  // values for counter
  public maxlength = 250;
  public characterleft = this.maxlength;
  public tweetmsg: string;


  constructor(
    public chefService: remote.ChefApi,
    public snackBar: MdSnackBar,
    public fb: FormBuilder) { }

  ngOnInit() {

    if (this.foodEditable.editable) {
      this.disabled = false;
    } else if (this.clone === false) {
      this.disabled = true;
    } else if (this.clone === true) {
      this.disabled = false;
    }

    this.foodTypesForm = ['Main', 'Salad', 'Drink'];

    // The form fills with the values of the Food which we want to edit
    this.foodEditForm = this.fb.group({
      foodName: new FormControl({ value: this.foodEditable.foodItem.foodName, disabled: this.disabled },
        [Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.pattern('.*[^ ].*')]),
      foodType: new FormControl({ value: this.foodEditable.foodItem.foodType, disabled: this.disabled }, Validators.required),
      description: new FormControl(this.foodEditable.foodItem.description, Validators.maxLength(250)),
      price: new FormControl({ value: this.foodEditable.foodItem.price, disabled: this.disabled },
        [Validators.required, Validators.maxLength(10), Validators.pattern('^([1-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$')])
    });

    this.tweetmsg = this.foodEditable.foodItem.description;
    this.characterleft = (this.maxlength) - (this.tweetmsg.length);

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


  // The method editFood, update the Food with the changes
  public editFood({ value, valid }: { value: remote.EditedFood, valid: boolean }) {
    value.lastEdit = this.foodEditable.lastEdit;
    this.showSpinner = true;

    if (this.disabled) {
      value.foodName = this.foodEditable.foodItem.foodName;
      value.foodType = this.foodEditable.foodItem.foodType;
      value.price = this.foodEditable.foodItem.price;
    }

    this.chefService.foodsFoodIdPut(this.food.foodItem.id, value, this.clone).subscribe(foodDetails => {
      this.openSnackBar('Food succefully edited!', 'ok', 1);
    }, error => {
      console.log(error);
      this.openSnackBar('Food cannot be edited!', 'ok', 2);
      this.showSpinner = false;
    },
      () => {
        this.showSpinner = false;
        this.closeEditFood.emit();
        this.updateFood.emit(value);
      });
  }


  // The method closed the open block
  close() {
    this.closeEditFood.emit();
  }

  // Checks if the Food name after the edit it doesn't exist, or if it's exists checks if it's archived or not
  public uniqueName(name): boolean {

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

    return this.isNameUnique;
  }



  // check if the name change and if it is, it checks if it's unique
  public nameChangesAndUnique(foodName) {

    console.log(foodName);
    if (this.foodEditable.foodItem.foodName !== foodName) {
      if (this.uniqueName(foodName)) {
        this.foodNameChange = true;
      }
    } else {
      this.foodNameChange = false;
    }

  }

  // check if the food type change
  public foodTypeChanges(foodType) {

    if (this.foodEditable.foodItem.foodType !== foodType) {
      this.foodTypeChange = true;
    } else {
      this.foodTypeChange = false;
    }

  }

  // check if the description change
  public descriptionChanges(description) {

    if (this.foodEditable.foodItem.description !== description) {
      this.descriptionChange = true;
    } else {
      this.descriptionChange = false;
    }

  }

  // check if the price change
  public priceChanges(price: number) {

    if (this.foodEditable.foodItem.price != price) {
      this.priceChange = true;
    } else {
      this.priceChange = false;
    }
  }

}


