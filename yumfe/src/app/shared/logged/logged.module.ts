import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {LoggedComponent} from './logged.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import {   RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
  declarations: [ LoggedComponent],
  providers:  [ ],
  exports: []
})
export class LoggedModule {}


