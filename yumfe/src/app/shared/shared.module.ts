import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoggedComponent } from './logged/logged.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdGridListModule,
  MdListModule,
  MdCardModule,
  MdSlideToggleModule,
  MdRadioModule,
  MdInputModule,
  MdSelectModule,
  MdDialogModule,
  MdSnackBarModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdAutocompleteModule,
  MaterialModule,
  MdMenuModule,
  //MdTabsModule
} from '@angular/material';

import 'hammerjs';

import { AuthenticationService } from './authentication.service';
import { CalendarModule } from 'angular-calendar';
import { Configuration } from '../remote/configuration';
import { MonthNavComponent } from './header/month-nav/month-nav.component';
import { PaginationComponent } from './pagination/pagination.component';
import {
  SlideToggleComponent,
  UserDisapproveDialog
} from './slide-toggle/slide-toggle.component';
//import { ProfileComponent } from './profile/profile.component';
import { GlobalSettingsService } from './services/global-settings-service.service';
//import { SettingsComponent } from './settings/settings.component';
//import { SettingsModule} from './settings/settings.module';
//import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
//import { FooterComponent, TermsDialog } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
//import { FileUploadModule } from 'ng2-file-upload';
//import { DeletePictureDialog } from './profile/profile.component';
//import { TabsComponent } from './footer/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MdSelectModule,
    MdInputModule,
    MdDialogModule,
    //FileUploadModule,
    FlexLayoutModule,
    MdMenuModule,
    //MdTabsModule,
    //SettingsModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdCardModule,
    MdSlideToggleModule,
    MdRadioModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DecimalPipe,
    DatePipe,
    LowerCasePipe,
    MdIconModule,
    MonthNavComponent,
    PaginationComponent,
    SlideToggleComponent,
    UserDisapproveDialog,
    //DeletePictureDialog,
    //ProfileComponent,
    RouterModule,
    FlexLayoutModule

  ],
  declarations: [
    NotFoundComponent,
    LoggedComponent,
    MonthNavComponent,
    PaginationComponent,
    SlideToggleComponent,
    UserDisapproveDialog,
    //DeletePictureDialog,
    //ProfileComponent,
    //SettingsComponent,
    //HeaderComponent,
    //FooterComponent,
    //TermsDialog,
    //TabsComponent
  ],
  providers: [
    AuthenticationService,
    Configuration,
    DecimalPipe,
    DatePipe,
    GlobalSettingsService,
    LowerCasePipe
  ],
  entryComponents: [
    UserDisapproveDialog,
    //DeletePictureDialog,
    //TermsDialog
  ]
})
export class SharedModule { }
