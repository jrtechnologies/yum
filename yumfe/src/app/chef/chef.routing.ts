import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedComponent } from '../shared/logged/logged.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersdayComponent } from './ordersday/ordersday.component';
import { MenusComponent } from './menus/menus.component';
import {ChefRouteGuard} from './chef-route.guard';


const chefRoutes: Routes = [
  { path: 'chef',
    component: LoggedComponent,
    canActivate: [ChefRouteGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/daily/:day', component: OrdersdayComponent },
      { path: 'orders/:year/:month', component: OrdersComponent },
      { path: 'menus', component: MenusComponent },
      { path: 'menus/:year/:month', component: MenusComponent },
    ]
  }
];

export const ChefRouting = RouterModule.forChild(chefRoutes);
