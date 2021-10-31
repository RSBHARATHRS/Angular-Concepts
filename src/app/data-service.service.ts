import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  firstName: string;
  lastName: string;
  age: number;

  userObject: any;
  userDetails: {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
  }

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.age = 0;

    this.userDetails = {
      firstName: "",
      lastName: "",
      phone: 0,
      email: "",
      password: "",
    }
  }

  setDetails(obj: any) {
    this.userDetails = obj;
    localStorage.setItem(obj.email, JSON.stringify(obj));
  }

  getDetails(email: string): any {
    let userObj: any;
    userObj = localStorage.getItem(email);
    if (!userObj) {
      return null;
    }
    console.log("Service retrived:", userObj);
    this.userObject = JSON.parse(userObj);
    return this.userObject;
  }
}
