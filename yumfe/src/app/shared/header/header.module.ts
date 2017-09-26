import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {  MdButtonModule,  MdMenuModule  } from '@angular/material';

@NgModule({ 
  imports: [CommonModule, RouterModule, MdButtonModule,  MdMenuModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}