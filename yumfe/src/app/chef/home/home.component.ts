import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as remote from '../../remote';
import { ChefNavComponent } from '../shared/chef-nav/chef-nav.component';
@Component({
  selector: 'app-chef-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public foods: Array<remote.FoodWithStats>;
  public foodTypes: Array<string>;
  public numberOfItems: Array<string>;
  public sortBy: Array<string>;
  public foodType: string;
  public nbrOfItem: string;
  public sort: string;
  public checked = false;
  public showLoadSpinner = false;

  public page = 1;
  public pageSize = 10;
  public totalFoods: number;
  public direction = 'DESC';
  public totalpages: number;
  public archived = 'false';
  public orderBy = 'id';
  public stats = true;


  constructor(public chefService: remote.ChefApi) { }

  ngOnInit() {

    this.foodTypes = ['All', 'Main', 'Salad', 'Drink'];
    this.numberOfItems = ['10', '20', '50', '100'];
    this.sortBy = ['Newest food', 'Most popular food', 'Least popular food', 'Higher price', 'Lower price'];
    this.foodType = this.foodTypes[0];
    this.nbrOfItem = this.numberOfItems[0];

    this.chefService.foodsGet(this.stats, null, this.nbrOfItem, this.foodType, this.archived, this.orderBy, null, this.direction).subscribe(foods => {
      this.foods = foods.foods;
    }, error => console.log(error));

    this.loadFoods(this.page);

  }


  loadFoods(page: number) {

    this.showLoadSpinner = true;
    this.chefService.foodsGet(this.stats, (page - 1).toString(), this.pageSize.toString(), this.foodType, this.archived, this.orderBy, null, this.direction).subscribe(foodsPage => {

      this.foods = foodsPage.foods;
      this.totalFoods = foodsPage.totalElements;
      this.totalpages = foodsPage.totalPages;
      this.page = page;
      this.showLoadSpinner = false;
    }, error => {
      console.log(error);
      this.showLoadSpinner = false;
    });

  }

  // Pagination
  handleChangePage(page) {
    this.showLoadSpinner = true;
    this.page = page;
    this.loadFoods(page);
  }

  // Number of Items in a page
  changePageSize(newValue) {
    this.showLoadSpinner = true;
    this.pageSize = newValue;
    this.page = 1;
    this.loadFoods(this.page);
  }

  // This method displays/refresh the list of foods after we created/delete/archived a food
  handleFoodRefresh() {
    this.loadFoods(this.page);
  }


  showByFoodType() {
    this.loadFoods(this.page);
  }

  showByOrderType(value) {
    this.showLoadSpinner = true;

    if (value === 'Higher price') {
      this.orderBy = 'price';
      this.direction = 'DESC';
    } else if (value === 'Lower price') {
      this.orderBy = 'price';
      this.direction = 'ASC';
    } else if (value === 'Newest food') {
      this.orderBy = 'id';
      this.direction = 'DESC';
    } else if (value === 'Most popular food') {
      this.orderBy = 'popular';
      this.direction = 'DESC';
    } else if (value === 'Least popular food') {
      this.orderBy = 'popular';
      this.direction = 'ASC';
    }

    this.loadFoods(this.page);
  }

  viewArchived() {

    if (this.checked === true) {
      this.showLoadSpinner = true;
      this.archived = 'true';
      this.loadFoods(this.page);
    } else {
      this.showLoadSpinner = true;
      this.archived = 'false';
      this.loadFoods(this.page);
    }
  }

}




