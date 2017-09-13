import { Component, OnInit, Input, Output, SimpleChanges, OnChanges, EventEmitter, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MdAutocomplete, MdAutocompleteTrigger, MdProgressBar } from '@angular/material';
import { subDays,  isValid , getHours, getMinutes, getSeconds, addDays, getMonth } from 'date-fns';
import * as remote from '../../../remote';
import * as models from './../../../shared/models';

import { FoodsService } from '../../services/foods.service';
import { GlobalSettingsService } from '../../../shared/services/global-settings-service.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.scss']
})

export class DailyMenuComponent implements OnInit, OnChanges {



  @Input() foods: Array<remote.Food>;
  foodsAvailable: Array<remote.Food>;

  @Input() day;
  @Input() viewdate;
  @Input() menu: remote.DailyMenuChef;

  @Output() snackMessage = new EventEmitter<models.SnackMessage>();

  @ViewChild( MdAutocompleteTrigger ) mdAutoCompleteTrigger: MdAutocompleteTrigger; //
  @ViewChild('blurMe') el: ElementRef;
  @ViewChild('focusMe') focusMe: ElementRef;

  public myForm: FormGroup;

  initMenu:  remote.DailyMenuChef;
  food: remote.Food;
  public showSpinner: boolean = true;

  selectCtrl: FormControl= new FormControl('', []);

  menuCanBeDiscarded: Boolean = false;
  menuCanBeUpdated: Boolean = false;
  menuCanBeEdited: Boolean = false;

  checkUserChanges: Boolean = false;

  foodsSelectedMap: Map<number, remote.Food> = new Map<number, remote.Food>();
  foodsSelected: Array<remote.Food> = [];
  initfoodsSelected: Array<remote.Food> = [];
  filteredFoods: Observable<remote.Food[]>;

  private remote: any;

  constructor(private foodsService: FoodsService, private chefService: remote.ChefApi, private datePipe: DatePipe, public globalSettingsService: GlobalSettingsService, private renderer: Renderer2) { }

  ngOnInit() {

    this.myForm = new FormGroup({
        dropList: this.selectCtrl
    });



    if(getMonth(this.day)!==getMonth(this.viewdate)){
      this.showSpinner=false;
      return;
    }

    this.setAvailableFoods();

    this.setup();
  }

   ngOnChanges(changes: SimpleChanges) {
      if (changes.menu!==undefined && !changes.menu.isFirstChange()){
          //console.log("menu changed:"+changes.menu.currentValue.date, changes.menu.currentValue);
          this.setup();
      }

      if (changes.foods!==undefined && !changes.foods.isFirstChange()){
        //console.log("refresh menu foods");
          this.setAvailableFoods();
          this.setup();
      }
   }
  setAvailableFoods(){
    this.foodsAvailable=[];
    for(let food of this.foods){
        if(!food.archived){
          this.foodsAvailable.push(food);
        }
    }
  }

  setup() {
      console.log("setup menu");

      this.menuCanBeDiscarded = false;
      this.menuCanBeUpdated  = false;
      this.menuCanBeEdited  = false;
      this.checkUserChanges  = false;

      this.initMenu = this.menu;


      this.foodsSelectedMap.clear();
      this.foodsSelected = [];

      this.globalSettingsService.getDeadLine().subscribe(deadline =>{

            let today = new Date();
            let menuDate= new Date(this.day);
            menuDate.setHours(0,0,0,0);
            //console.log("menu date", menuDate);
            menuDate = subDays(menuDate, deadline.dDays);
            let deadlineTime: Date = deadline.dTime;
            menuDate.setHours(getHours(deadlineTime), getMinutes(deadlineTime), getSeconds(deadlineTime));
            this.menuCanBeEdited = new Date(menuDate) > today;

            //console.log("deadline:", new Date(menuDate));

        });

      if (this.menu !== undefined) {

            for(let menuFood of this.menu.foods){
                //let food = this.foodsService.getFoodById(menuFood.foodId);
                 this.foodsService.getFoodById(menuFood.foodId).subscribe( food=>{
                   if( food!==undefined){
                    this.addMenuFood(food);
                  }
                });

            }
        }


      this.filteredFoods = this.selectCtrl.valueChanges
             .startWith(null)
             .map(food => {
               if (food && typeof food === 'object'){
                    this.addMenuFood(food);
                    this.selectCtrl.patchValue('');
                    //window.blur();
                    //document.getElementById("focusMe").focus();
                    //this.el.nativeElement.blur();


                    //this.mdAutoCompleteTrigger.closePanel();
                    //this.mdAutoCompleteTrigger.openPanel();

                    //console.log(allDivs);
                    //allDivs.blur();
               }
               else {
                 return food;
               }
              })
             .map(name => name && name !== '' ? this.filter(name) : this.foodsAvailable.slice());

      this.selectCtrl.valueChanges.subscribe(status => {
          console.log(status);
         if ( this.el && this.focusMe && status.length == 0 ) {
            console.log('blur enter');
            this.el.nativeElement.blur();
            this.focusMe.nativeElement.focus();
            setTimeout(() => {
              this.el.nativeElement.blur();
              this.focusMe.nativeElement.focus();
            }, 300);
        }
      });

      this.filteredFoods.subscribe(a => {
        //
      });

      this.checkUserChanges = true;
      this.initfoodsSelected = this.foodsSelected;
      this.checkChanges();

      this.showSpinner=false;
  }

   displayFn(food: remote.Food): string {
      return food ? food.foodName : "";
   }

  filter(name: string): remote.Food[] {
      return this.foodsAvailable.filter(food => new RegExp(`(.)*${name}(.)*`, 'gi').test(food.foodName));
   }

  addMenuFood(food: remote.Food) {
    //console.log(this.selectCtrl);

    this.foodsSelectedMap.set( food.id,  food);
    this.removeFromAvailable(food);
    this.displayList();
  }

  removeMenuFood(food: remote.Food) {
    this.addToAvailable(food);
    this.foodsSelectedMap.delete(food.id);
    this.displayList();
  }

  removeFromAvailable(foodRemove: remote.Food){
      this.foodsAvailable = this.foodsAvailable.filter(food => food.id !== foodRemove.id);
  }

  addToAvailable(food: remote.Food){
       this.foodsAvailable.push(food);
       this.foodsAvailable = this.foodsService.sortArrayOfFoods(this.foodsAvailable );
       //this.selectCtrl.setValue(""); //reset foodsAvailable


       //this.selectCtrl = undefined;
       //this.selectCtrl.reset();
  }


  displayList() {
    this.foodsSelected = [];
    this.foodsSelectedMap.forEach(food => {
      this.foodsSelected.push(food);
    });

    this.foodsSelected = this.foodsSelected.sort((n1,n2) => {
    if (n1.foodType > n2.foodType) {
            return -1;
        }else if (n1.foodType < n2.foodType) {
            return 1;
        }
        return 0;
    });

    this.checkChanges();
  }

  updateMenu() {
      this.showSpinner=true;

      //this.menuCanBeEdited=false;

      // build food list ids
      let newFoodList: Array<{}> = [];

      for(const food of this.foodsSelected){
          let menuFood: remote.DailyMenusFoods = {};
          menuFood.foodId = food.id;
          newFoodList.push(menuFood);
      }

      // PUT

      if (this.menu !== undefined  ) {

          console.log("update menu id:", this.menu.id);

          let menuEdit: remote.DailyMenuEdit = {};
          menuEdit.lastEdit = {};
          menuEdit.lastEdit.version = this.menu.lastEdit.version;
          menuEdit.foods = newFoodList;
          menuEdit.date= this.menu.date;

          this.remote = this.chefService.dailyMenusIdPut(this.menu.id.toString(), menuEdit)
          .finally(() => {
              this.showSpinner = false;
            })
          .subscribe( response => {
            console.log(response);
            let responseOk: models.SnackMessage = {}
            this.menu.foods=menuEdit.foods;
            //this.menu.lastEdit.version=lastEdit.version;
            this.menu.lastEdit.version++;

            if(menuEdit.foods.length==0){
              this.menu = undefined;
            }

            switch(response.status){
                case 200:
                  responseOk.message="Menu updated successfully";
                  break;
                case 204:
                  responseOk.message="Menu deleted successfully";
                  break;
            }
            this.setup();

            responseOk.status = 1; //ok
            this.snackMessage.emit(responseOk);
            this.showSpinner = false;

          }, error => {
            console.log(error);
            let responseError: models.SnackMessage = {};
            switch(error.status){
                case 404:
                  responseError.message="Menu not found";
                  break;
                case 409:
                  responseError.message="Menu already changed";
                  break;
                case 412:
                  responseError.message="Can't modify menu, deadline time has passed";
                  break;
                case 417:
                  responseError.message="The request failed because there are orders on the food";
                   this.setup();
                  break;
                case 410:
                    let resDto: remote.DailyMenuChef;
                    resDto = JSON.parse(error._body);
                    if(resDto.id!=0){
                        responseError.message= "You deleted this menu earlier, and recreated it. Here is the new one.";
                        this.menu = resDto;
                        this.setup();
                    }
                    else{
                        responseError.message="You deleted this menu earlier. Please recreate it again if this is what was intended.";
                        this.menu = undefined;
                        this.setup();
                    }
                    break;

                case 500:
                  responseError.message="An unexpected error occured.";
                  break;

              }


            this.showSpinner = false;
            responseError.status = 3; //error
            this.snackMessage.emit(responseError);


          });
      }else {

      // POST

          console.log("Post new menu");

          let newMenu: remote.NewDailyMenu ={};
          newMenu.date =this.datePipe.transform(this.day, 'yyyy-MM-dd');
          newMenu.foods = newFoodList;
          this.menuCanBeDiscarded = false;
          this.menuCanBeUpdated  = false;

          this.remote = this.chefService.dailyMenusPost(newMenu)
          .finally(() => {
              this.showSpinner = false;
            })
          .subscribe( menu => {
            console.log(menu);
            let responseError: models.SnackMessage = {};
            this.menu = menu;
            this.setup();

            responseError.status = 1; //ok
            responseError.message = "New menu created!";
            this.snackMessage.emit(responseError);
            this.showSpinner = false;

          }, error => {
            console.log(error);
            let responseError: models.SnackMessage = {};
            switch(error.status){
                case 400:
                  responseError.message="Menu create bad request data";
                  break;
                case 409:
                  responseError.message="A menu was already created for that day";
                  let resDto: remote.DailyMenuChef;
                  resDto = JSON.parse(error._body);
                  this.menu = resDto;
                  this.setup();
                  break;
                case 500:
                  responseError.message="An unexpected error occured.";
                  break;

              }
            responseError.status = 3; //error
            this.snackMessage.emit(responseError);
            this.showSpinner = false;
            });

      }

  }



  discardChanges() {
    this.menu = this.initMenu;
    this.setAvailableFoods();
    this.setup();
  }

  checkChanges(){
    if(this.checkUserChanges && this.initfoodsSelected != this.foodsSelected && (this.foodsSelected.length>0 || this.initfoodsSelected.length>0) ){
      this.menuCanBeDiscarded = true;
      this.menuCanBeUpdated = true;
    }
    else{
      this.menuCanBeDiscarded = false;
      this.menuCanBeUpdated = false;
    }
  }



}
