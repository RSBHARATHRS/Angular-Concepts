import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  firstName:string;
  lastName:string;
  age:number;

  userDetails:{
    firstName:string;
    lastName:string;
    age:number;
  }

  constructor() { 
    this.firstName="";
    this.lastName="";
    this.age=0;
    this.userDetails={
      firstName:"",
      lastName:"",
      age:0
    }
  }

  setDetails(obj:any){
    this.userDetails=obj;
    localStorage.setItem("1",JSON.stringify(this.userDetails));
    
  }

  getDetails():any{
    return this.userDetails;
  }
}
