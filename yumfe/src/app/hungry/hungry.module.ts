import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { HungryRouting } from './hungry.routing';
import { HungryApi } from '../remote';
import { SharedModule } from '../shared/shared.module';
import { DailyMenuComponent, DailyMenuOrderDialog, DailyOrderCancelDialog } from './home/daily-menu/daily-menu.component';
import { DailyOrderHistoryComponent } from './history/daily-order-history/daily-order-history.component';

import {HungryRouteGuard} from './hungry-route.guard';
import { HungryNavComponent } from './shared/hungry-nav/hungry-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HungryRouting
  ],

  declarations: [
    HomeComponent,
    HistoryComponent,
    DailyMenuComponent,
    DailyOrderHistoryComponent,
    DailyMenuOrderDialog,
    DailyOrderCancelDialog,
    HungryNavComponent
  ],

  providers: [HungryApi, HungryRouteGuard],
  entryComponents: [
    DailyMenuOrderDialog,
    DailyOrderCancelDialog
  ]
})
export class HungryModule { }
