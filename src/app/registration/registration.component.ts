import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    // todo create request to server for register new user
  }
}
