import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
          HomeComponent,
      } from './home/home.component';
import { AdminRouting } from './admin.routing';
import { AdminApi } from '../remote';
import {
          UserComponent,
          UserDisapproveDialog,
          UserDeleteConfirmDialog,
          UserDelete402Dialog,
          UserDelete409Dialog,
          UserDelete412Dialog,
          UserDelete412DisapprovedDialog
        } from './home/user/user.component';
import { SharedModule} from '../shared/shared.module';
import { UsersComponent, ResetPwdDialog } from './users/users.component';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { AdminRouteGuard } from './admin-route.guard';
import { TinymceDirective } from './tinymce.directive';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    SharedModule
  ],
  declarations: [
      HomeComponent,
      UserComponent,
      UserDisapproveDialog,
      UserDeleteConfirmDialog,
      UserDelete402Dialog,
      UserDelete409Dialog,
      UserDelete412Dialog,
      UserDelete412DisapprovedDialog,
      ResetPwdDialog,
      UsersComponent,
      GlobalSettingsComponent,
      AdminNavComponent,
      TinymceDirective
    ],
  providers: [
      AdminApi,AdminRouteGuard
    ],
  entryComponents: [
      UserDisapproveDialog,
      UserDeleteConfirmDialog,
      UserDelete402Dialog,
      UserDelete409Dialog,
      UserDelete412Dialog,
      UserDelete412DisapprovedDialog,
      ResetPwdDialog
    ]
})
export class AdminModule { }
