import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdTableModule, MdPaginatorModule } from '@angular/material';
import { TransactionsComponent } from './transactions.component'
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdTableModule,
    MdPaginatorModule,
    FlexLayoutModule
  ],
  declarations: [ TransactionsComponent],
  entryComponents: [  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule {}
