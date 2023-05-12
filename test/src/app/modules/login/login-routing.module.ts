import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideSignInComponent } from './slide-sign-in/slide-sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SlideSignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
