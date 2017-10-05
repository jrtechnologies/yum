import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdGridListModule, MdButtonModule, MdInputModule, MdCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BalanceComponent, BalanceDialog } from './balance.component'
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    FlexLayoutModule
  ],
  declarations: [ BalanceComponent, BalanceDialog],
  entryComponents: [ BalanceDialog ],
  exports: [BalanceComponent]
})
export class BalanceModule {}
