import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {LoginData} from "../models/LoginData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected password: string
  protected email: string;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.password = "";
    this.email = "";
  }

  ngOnInit(): void {
  }

  handleSubmit(password: string, email: string): void {
    const loginData: LoginData = {username: email, password: password}
    this.loginService.login(loginData).subscribe((response) => {
      debugger;
      if (response) {
        console.log(response);
        // todo: redirect to dashboard
      }
    });
  }


}
