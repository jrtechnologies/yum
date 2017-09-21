import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoggedComponent } from '../shared/logged/logged.component';
import {GlobalSettingsComponent} from './global-settings/global-settings.component';
import {HolidaysComponent} from './holidays/holidays.component';
import {AdminRouteGuard} from './admin-route.guard';

const adminRoutes: Routes = [
  { //path: 'admin',
    path: '',    
    component: LoggedComponent,    canActivate: [AdminRouteGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'users/:id', component: UsersComponent },
      { path: 'globalSettings', component: GlobalSettingsComponent },
      { path: 'globalSettings/holidays', component: HolidaysComponent }
    ]
  }
];

//export const AdminRouting = RouterModule.forChild(adminRoutes);
export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);