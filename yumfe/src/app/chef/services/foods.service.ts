import { Injectable } from '@angular/core';
import * as remote from '../../remote';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class FoodsService {

  private foods: BehaviorSubject<remote.Food[]> = new BehaviorSubject<remote.Food[]>([]);
  private foodsMap: BehaviorSubject<Map<number, remote.Food>> = new BehaviorSubject<Map<number, remote.Food>>(new Map);
  private foods_version: number = 0;
  private sortFoodTypes = new Map<string, number>();

  constructor(private chefService: remote.ChefApi) {
    //Food priority listing
    this.sortFoodTypes.set("Main", 10);
    this.sortFoodTypes.set("Salad", 20);
    this.sortFoodTypes.set("Drink", 30);
  }


  public getFoods(): Observable<remote.Food[]> {

    //check version    
    this.chefService.foodsGet(false, null, null, "All", null, null, this.foods_version).subscribe(foodsPageRemote => {

      let foodsPage: remote.FoodsPage = foodsPageRemote;
      console.log("Local foods version:" + this.foods_version + " remote:" + foodsPage.foods_version);
      if (foodsPage.foods_version !== this.foods_version) {
        this.getRemoteFoods();
      }

    }, error => console.log(error));

    return this.foods;

  }


  private getRemoteFoods() {
    //Renew foods lists
    this.chefService.foodsGet(false, null, null, "All", null, null).subscribe(foodsPageRemote => {

      let foodArr: remote.Food[] = new Array();
      let foodMap: Map<number, remote.Food> = new Map();

      for (let food of foodsPageRemote.foods) {
        foodArr.push(food.foodItem);
        foodMap.set(food.foodItem.id, food.foodItem);
      }

      this.foods.next(this.sortArrayOfFoods(foodArr));
      this.foodsMap.next(foodMap);

      this.foods_version = foodsPageRemote.foods_version;

    }, error => console.log(error));
  }

  public getFoodById(id: number): Observable<remote.Food> {

    return Observable.create((observer) => {
      this.foodsMap.subscribe(foodsMap => {
        let foundFood = foodsMap.get(id);
        if (foundFood === undefined) {
          // observer.error("Food not found");
          // possible new food
          console.log("--get foods--");
          console.log(foodsMap);
          this.getFoods();
        }
        else {
          observer.next(foundFood);
          observer.complete();
        }
      });
    });

  }

  //public sortArrayOfFoods(foods: Array<remote.Food>): Array<remote.Food> {
  public sortArrayOfFoods(foods) {
    foods.sort((n1, n2) => {
      if (this.sortFoodTypes.get(n1.foodType) > this.sortFoodTypes.get(n2.foodType)) {
        return 1;
      }
      if (this.sortFoodTypes.get(n1.foodType) < this.sortFoodTypes.get(n2.foodType)) {
        return -1;
      }
      return 0;
    });
    return foods;
  }

}
