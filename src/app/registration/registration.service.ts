import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }


  public register(user: User): Observable<User>{
    return new Observable<User>();
}

}
