import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  HomeComponent,
} from './home/home.component';
import { AdminRouting } from './admin.routing';
import { AdminApi } from '../remote';
import {
  UserComponent,
  UserListDisapproveDialog,
  UserDeleteConfirmDialog,
  UserDelete402Dialog,
  UserDelete409Dialog,
  UserDelete412Dialog,
  UserDelete412DisapprovedDialog
} from './home/user/user.component';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { UsersComponent, ResetPwdDialog } from './users/users.component';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { AdminRouteGuard } from './admin-route.guard';
import { TinymceDirective } from './tinymce.directive';

import { ProfileModule } from '../shared/profile/profile.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../shared/pagination/pagination.module';
import { SlideToggleComponent, UserDisapproveDialog } from '../shared/slide-toggle/slide-toggle.component';
import { LoggedModule } from '../shared/logged/logged.module';
import { HolidaysComponent } from './holidays/holidays.component';
import { CalendarDayComponent } from './holidays/calendar-day/calendar-day.component';
import { CalendarModule } from 'angular-calendar';
import { RouterModule } from '@angular/router';
import { BalanceModule } from '../shared/balance/balance.module'
import { TransactionsModule } from '../shared/transactions/transactions.module'
import {  DeletePictureDialog } from './../shared/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRouting,
    FormsModule, ReactiveFormsModule,
    ProfileModule,
    SharedMaterialModule,
    PaginationModule,
    LoggedModule,
    FlexLayoutModule,
    CalendarModule,
    BalanceModule,
    TransactionsModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    UserDisapproveDialog,
    UserListDisapproveDialog,
    UserDeleteConfirmDialog,
    UserDelete402Dialog,
    UserDelete409Dialog,
    UserDelete412Dialog,
    UserDelete412DisapprovedDialog,
    ResetPwdDialog,
    UsersComponent,
    GlobalSettingsComponent,
    AdminNavComponent,
    TinymceDirective,
    SlideToggleComponent,
    HolidaysComponent,
    CalendarDayComponent
  ],
  providers: [
    AdminApi, AdminRouteGuard, DatePipe, DecimalPipe, LowerCasePipe
  ],
  entryComponents: [
    UserDisapproveDialog,
    UserListDisapproveDialog,
    UserDeleteConfirmDialog,
    UserDelete402Dialog,
    UserDelete409Dialog,
    UserDelete412Dialog,
    UserDelete412DisapprovedDialog,
    ResetPwdDialog,
    DeletePictureDialog
  ],
  exports: []
})
export class AdminModule { }
