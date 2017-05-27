import { Injectable } from '@angular/core';
import * as remote from '../../remote';
//import {Observable} from 'rxjs/Observable';

@Injectable()
export class FoodsService {

  private foods: remote.Food[] = [];
  private foodsMap: Map<number, remote.Food> = new Map<number, remote.Food>();
  private foods_version: number = 0;
  private  sortFoodTypes = new Map<string, number>();

  constructor(private chefService: remote.ChefApi ) {

    this.sortFoodTypes.set("Main", 10);
    this.sortFoodTypes.set("Salad", 20);
    this.sortFoodTypes.set("Drink", 30);
  }

  public getFoodById(id: number): remote.Food{
    return this.foodsMap.get(id);
  }

  public getFoods(): remote.Food[]{

    //check version
     this.chefService.foodsGet(false, null, null, "All", null, null, this.foods_version ).subscribe( foodsPageRemote => {

        let foodsPage: remote.FoodsPage = foodsPageRemote;
        if(foodsPage.foods_version !== this.foods_version){

            this.getRemoteFoods();
        }
        else{
           console.log("Foods not changed");
        }

      console.log("Local foods version:"+this.foods_version + " remote:" + foodsPage.foods_version);
     // console.log(this.foods);

      }, error => console.log(error));


    return this.foods;
   }


  private getRemoteFoods(){
    //Renew foods lists
     this.chefService.foodsGet(false, null, null, "All", null, null).subscribe( foodsPageRemote => {

        let foodsPage: remote.FoodsPage = foodsPageRemote;
        //console.log(foodsPage);
        for(let i=0;i<foodsPage.foods.length;i++){
          this.foods.push(foodsPage.foods[i].foodItem);
          this.foodsMap.set( foodsPage.foods[i].foodItem.id, foodsPage.foods[i].foodItem);
        }

        this.foods = this.sortArrayOfFoods(this.foods);

        this.foods_version = foodsPageRemote.foods_version;
        //console.log("Renew foods", this.foods, this.foodsMap  );
        console.log("Renewed foods");
      }, error => console.log(error));

  }

  //public sortArrayOfFoods(foods: Array<remote.Food>): Array<remote.Food> {
  public sortArrayOfFoods(foods)  {
        foods.sort((n1, n2) => {
              if (this.sortFoodTypes.get(n1.foodType) > this.sortFoodTypes.get(n2.foodType) ){
                  return 1;
              }
              if (this.sortFoodTypes.get(n1.foodType) < this.sortFoodTypes.get(n2.foodType) ){
                  return -1;
              }
              return 0;
          });
        return foods;
  }

}
