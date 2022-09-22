import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent}
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
