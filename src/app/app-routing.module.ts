import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
