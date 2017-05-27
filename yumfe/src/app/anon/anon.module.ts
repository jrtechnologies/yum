import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';

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
  ]
})
export class AnonModule { }
