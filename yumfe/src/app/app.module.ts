import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthApi, ChefApi } from './remote';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HungryModule } from './hungry/hungry.module';
import { ChefModule } from './chef/chef.module';
import { AdminModule } from './admin/admin.module';
import { AnonModule } from './anon/anon.module';
import { AppRouting } from './app.routing';

import { CalendarModule } from 'angular-calendar';
import { ProfileComponent } from './profile/profile.component';
import { BASE_PATH } from './remote/variables';
import { AppRouteGuard } from './app-route.guard';
import {SettingsRouteGuard}  from './shared/settings/settings-route.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    CalendarModule.forRoot(),
    HungryModule,
    ChefModule,
    AdminModule,
    AnonModule
  ],
  providers: [
    AuthApi,
    {provide: BASE_PATH, useValue: "http://localhost:8080/api"},
    AppRouteGuard,
    SettingsRouteGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
