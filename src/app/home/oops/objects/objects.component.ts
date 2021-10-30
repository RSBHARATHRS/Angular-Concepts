import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  //Object Declaration
  obj:{
    firstName:string,
    lastName:string,
    age:number
  }

  constructor(private dataService:DataServiceService) {
    //Object Empty Definition
    this.obj={
      firstName:"",
      lastName:"",
      age:0
    }
   }

  ngOnInit(): void {
  }

  setDetails(firstName:string, lastName:string, age:string = "18"): void {
    this.obj={
      firstName:firstName,
      lastName:lastName,
      age:Number(age),
    }
    console.log(this.obj);
    this.dataService.setDetails(this.obj);
  }
}
