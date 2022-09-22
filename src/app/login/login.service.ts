import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {LoginData} from "../models/LoginData";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  public login(loginData: LoginData): Observable<User> {
    const formData = new FormData();
    formData.append("username", loginData.username);
    formData.append("password", loginData.password);
    return this.http.post<User>('http://localhost:8080/api/login', formData);
  }

}
