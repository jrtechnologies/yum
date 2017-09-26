import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FooterComponent, TermsDialog } from './footer.component';
import { TabsComponent } from './tabs/tabs.component'
import {  MdTabsModule, MdGridListModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({ 
  imports: [CommonModule, MdTabsModule, FlexLayoutModule, MdGridListModule, MdButtonModule],
  declarations: [FooterComponent, TermsDialog, TabsComponent],
  exports: [FooterComponent],
  entryComponents: [TermsDialog]
})
export class FooterModule {}