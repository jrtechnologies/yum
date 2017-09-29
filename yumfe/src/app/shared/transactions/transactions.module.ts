import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdInputModule, MdCardModule, MdTableModule } from '@angular/material';
import { TransactionsComponent } from './transactions.component'
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    CommonModule,
    //MdGridListModule,
    //MdButtonModule,
    //MdInputModule,
    MdCardModule,
    MdTableModule,
    FlexLayoutModule
  ],
  declarations: [ TransactionsComponent],
  entryComponents: [  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule {}
