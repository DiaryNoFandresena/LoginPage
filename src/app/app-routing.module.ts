import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PrincipalPagesComponent } from './principal Page/principal-pages/principal-pages.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path :'' , component : LandingPageComponent },
  { path :'login' , component : PrincipalPagesComponent },
  { path :'signIn' , component : LoginComponent  },
  { path :'signUp' , component : SignUpComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
