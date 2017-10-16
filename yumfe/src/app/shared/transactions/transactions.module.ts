import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { TransactionsComponent } from './transactions.component'


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [ TransactionsComponent],
  entryComponents: [  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule {}
