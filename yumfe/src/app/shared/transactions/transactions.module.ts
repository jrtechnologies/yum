import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdTableModule, MdPaginatorModule } from '@angular/material';
import { TransactionsComponent } from './transactions.component'


@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdTableModule,
    MdPaginatorModule,
  ],
  declarations: [ TransactionsComponent],
  entryComponents: [  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule {}
