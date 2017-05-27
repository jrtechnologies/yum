import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './anon/login/login.component';
import { RegisterComponent } from './anon/register/register.component';
import { ForgotpwdComponent } from './anon/forgotpwd/forgotpwd.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { ResetpwdComponent } from './anon/resetpwd/resetpwd.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import {AppRouteGuard} from './app-route.guard';
import {SettingsRouteGuard} from './shared/settings/settings-route.guard';

const appRoutes: Routes = [
 // { path: '', canActivate: [AppRouteGuard], redirectTo: 'login', pathMatch: 'full' },
  { path: '', canActivate: [AppRouteGuard], component: LoginComponent , pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpwd', component: ForgotpwdComponent },
  { path: 'settings', canActivate: [SettingsRouteGuard], component: SettingsComponent },
  { path: 'resetpwd/:token', component: ResetpwdComponent },
 // { path: 'hungry', loadChildren: './hungry/hungry.module' },
  { path: '**', component: NotFoundComponent }, //always last
];


export const AppRouting = RouterModule.forRoot(appRoutes //, {  useHash: true }
);



