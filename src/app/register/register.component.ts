import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstNameEmpty: string;
  lastNameEmpty: string;
  emailEmpty: string;
  phoneEmpty: string;
  passwordEmpty: string;
  allOk: boolean = true;


  userDetails: {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
  }

  constructor(private dataService: DataServiceService) {
    this.firstNameEmpty = "none";
    this.lastNameEmpty = "none";
    this.emailEmpty = "none";
    this.phoneEmpty = "none";
    this.passwordEmpty = "none";

    this.userDetails = {
      firstName: "",
      lastName: "",
      phone: 0,
      email: "",
      password: "",
    }
  }

  ngOnInit(): void {
  }

  register(firstName: string, lastName: string, email: string, phone: string, password: string, confirmPass: string) {
    if (!firstName) {
      this.firstNameEmpty = "block";
      this.allOk = false;
    }

    if (!lastName) {
      this.firstNameEmpty = "block";
      this.allOk = false;
    }

    if (!firstName) {
      this.firstNameEmpty = "block";
      this.allOk = false;
    }

    if (!firstName) {
      this.firstNameEmpty = "block";
      this.allOk = false;
    }

    if (!firstName) {
      this.firstNameEmpty = "block";
      this.allOk = false;
    }

    if (!this.allOk) {
      return;
    } else {
      this.firstNameEmpty = "none";
      this.userDetails = {
        firstName: firstName,
        lastName: lastName,
        phone: Number(phone),
        email: email,
        password: password,
      }
      this.dataService.setDetails(this.userDetails);

    }
  }
}
