import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BalanceComponent, BalanceDialog } from './balance.component'
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [ BalanceComponent, BalanceDialog],
  entryComponents: [ BalanceDialog ],
  exports: [BalanceComponent]
})
export class BalanceModule {}
