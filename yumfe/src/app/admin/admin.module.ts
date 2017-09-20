import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SharedMaterialModule} from '../shared/shared-material.module';
import { UsersComponent, ResetPwdDialog } from './users/users.component';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { AdminRouteGuard } from './admin-route.guard';
import { TinymceDirective } from './tinymce.directive';
 
import { ProfileModule } from '../shared/profile/profile.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../shared/pagination/pagination.module';
import {   SlideToggleComponent, UserDisapproveDialog } from '../shared/slide-toggle/slide-toggle.component';
import {LoggedModule} from '../shared/logged/logged.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    FormsModule, ReactiveFormsModule, 
    ProfileModule,
    SharedMaterialModule,
    PaginationModule,
     LoggedModule,
     FlexLayoutModule 
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
      SlideToggleComponent
    ],
  providers: [
      AdminApi,AdminRouteGuard
    ],
  entryComponents: [
      UserDisapproveDialog,
      UserListDisapproveDialog,
      UserDeleteConfirmDialog,
      UserDelete402Dialog,
      UserDelete409Dialog,
      UserDelete412Dialog,
      UserDelete412DisapprovedDialog,
      ResetPwdDialog
    ],
  exports: []
})
export class AdminModule { }
