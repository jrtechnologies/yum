import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component'; 
import { LoggedModule } from './logged/logged.module';
import { RouterModule } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs'; 
import { CalendarModule } from 'angular-calendar';
import { Configuration } from '../remote/configuration';
import { MonthNavComponent } from './header/month-nav/month-nav.component';
import { PaginationModule } from './pagination/pagination.module'; 
import { GlobalSettingsService } from './services/global-settings-service.service'; 
import {SharedMaterialModule} from './shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PaginationModule,
    SharedMaterialModule
  ],
  exports: [ 
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DecimalPipe,
    DatePipe,
    LowerCasePipe,
    MonthNavComponent,
    PaginationModule, 
    RouterModule,
    FlexLayoutModule,
    LoggedModule

  ],
  declarations: [
    NotFoundComponent, 
    MonthNavComponent,  
  ],
  providers: [ 
    Configuration,
    DecimalPipe,
    DatePipe,
    GlobalSettingsService,
    LowerCasePipe
  ],
  entryComponents: [ 
  ]
})
export class SharedModule { }
