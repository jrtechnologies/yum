import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChefRouting } from './chef.routing';
import { ChefApi } from '../remote';
import { SharedModule } from '../shared/shared.module';
import { FoodComponent, EditCloneDialogComponent, DeleteDialogComponent, DeleteAskDialogComponent } from './home/food/food.component';
import { FoodEditComponent } from './home/food-edit/food-edit.component';
import { FoodInlineEditComponent } from './home/food-inline-edit/food-inline-edit.component';
import { FoodsService } from './services/foods.service';
import { ChefNavComponent } from './shared/chef-nav/chef-nav.component';
import { MenusComponent } from './menus/menus.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersdayComponent } from './ordersday/ordersday.component';
import { DailyMenuComponent } from './menus/daily-menu/daily-menu.component';
import { FormsModule } from '@angular/forms';
import { OrderTotalComponent } from './orders/order-total/order-total.component';
import { FoodItemComponent } from './ordersday/food-item/food-item.component';
import { UserOrderComponent } from './ordersday/user-order/user-order.component';
import {ChefRouteGuard} from './chef-route.guard';

@NgModule({
  imports: [
    CommonModule,
    ChefRouting,
    SharedModule,
    FormsModule
  ],


  declarations: [HomeComponent, FoodComponent,
   FoodEditComponent, FoodInlineEditComponent,
    EditCloneDialogComponent, DeleteDialogComponent,
     ChefNavComponent,
     MenusComponent,
     OrdersComponent,
     OrdersdayComponent,
     DailyMenuComponent,
     DeleteAskDialogComponent,
     OrderTotalComponent,
     FoodItemComponent,
     UserOrderComponent],


  providers: [ChefApi, FoodsService, ChefRouteGuard],
  entryComponents: [EditCloneDialogComponent, DeleteDialogComponent, DeleteAskDialogComponent]
})
export class ChefModule { }
