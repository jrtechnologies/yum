import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { QuotesService, QuoteInterceptor } from './services/quotes.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    ResetpwdComponent
  ],
  exports : [
    LoginComponent
  ],
  providers: [QuotesService, 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: QuoteInterceptor,
    multi: true
  }]
})
export class AnonModule { }
