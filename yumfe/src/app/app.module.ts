import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthApi, ChefApi, AdminApi } from './remote';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HungryModule } from './hungry/hungry.module';
import { ChefModule } from './chef/chef.module';
//import { AdminModule } from './admin/admin.module';
import { AnonModule } from './anon/anon.module';

import { AppRouting } from './app.routing';

import { CalendarModule } from 'angular-calendar';
import { ProfileComponent } from './profile/profile.component';
import { BASE_PATH } from './remote/variables';
import { AppRouteGuard } from './app-route.guard';
import { AppExtAuthRouteGuard } from './app-extAuth-route.guard';
import { SettingsRouteGuard } from './shared/settings/settings-route.guard';
import { AdminRouteGuard } from './admin/admin-route.guard';
import { environment } from '../environments/environment';

//Custom Http
import { HttpSubjectService } from './shared/services/httpSubject.service';
import { InterceptHttp, interceptHttpLoader } from './shared/services/http-intercept.service';
import { DialogLogin } from './app.component';
import { AuthenticationService } from './shared/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DialogLogin
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRouting,
    CalendarModule.forRoot(),
    SharedModule,
    HungryModule,
    ChefModule,
    //AdminModule,
    AnonModule,
    HttpClientModule
  ],

  entryComponents: [
    DialogLogin
  ],
  providers: [
    AuthApi, AdminApi,
    { provide: BASE_PATH, useValue: environment.base_path },
    AppRouteGuard,
    AppExtAuthRouteGuard,
    SettingsRouteGuard,
    AdminRouteGuard,
    HttpSubjectService,
    AuthenticationService,
    {
      provide: Http, useFactory: interceptHttpLoader,
      deps: [XHRBackend, RequestOptions, HttpSubjectService]
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
