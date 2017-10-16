import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {  MatButtonModule,  MatMenuModule  } from '@angular/material';

@NgModule({ 
  imports: [CommonModule, RouterModule, MatButtonModule,  MatMenuModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}