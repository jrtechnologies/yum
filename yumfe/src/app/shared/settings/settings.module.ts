import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule,
         MatSelectModule,
         MatButtonModule,
         MatInputModule,
         MatCardModule,
         MatCheckboxModule
        } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//import { RouterModule } from '@angular/router';
import { SettingsComponent }   from './settings.component';
import { SettingsRouteGuard } from './settings-route.guard';
import { routing } from './settings.routing';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ProfileModule } from '../profile/profile.module';
import { BalanceModule } from '../../shared/balance/balance.module'
import { TransactionsModule } from '../../shared/transactions/transactions.module'
import {  DeletePictureDialog } from '../profile/profile.component';

//import { AuthenticationService } from '../authentication.service';

@NgModule({
  imports: [
            CommonModule,
            routing,
            HeaderModule,
            FooterModule,
            MatGridListModule,
            MatSelectModule,
            FormsModule,
            ReactiveFormsModule,
            ProfileModule,
            MatButtonModule,
            MatInputModule,
            MatCardModule,
            MatCheckboxModule,
            BalanceModule,
            TransactionsModule,
            FlexLayoutModule
          ],
  declarations: [SettingsComponent],
  providers:  [ SettingsRouteGuard],
  exports: [MatButtonModule, MatInputModule],
  entryComponents: [DeletePictureDialog]
})
export class SettingsModule {}
