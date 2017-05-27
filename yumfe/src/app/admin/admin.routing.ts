import { Routes, RouterModule }                   from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoggedComponent } from '../shared/logged/logged.component';
import {GlobalSettingsComponent} from './global-settings/global-settings.component';
import {AdminRouteGuard} from './admin-route.guard';

const adminRoutes: Routes = [
  { path: 'admin',
    component: LoggedComponent,
    canActivate: [AdminRouteGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'users/:id', component: UsersComponent },
      { path: 'globalSettings', component: GlobalSettingsComponent }
    ]
  }
];

export const AdminRouting = RouterModule.forChild(adminRoutes);
