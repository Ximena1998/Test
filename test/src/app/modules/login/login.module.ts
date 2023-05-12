import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SlideSignInComponent } from './slide-sign-in/slide-sign-in.component';


@NgModule({
  declarations: [
    SlideSignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
