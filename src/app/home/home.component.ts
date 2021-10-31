import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;
  userEmail: string;
  constructor(private dataService: DataServiceService) {
    this.userEmail = "";
    this.userName = "";
  }

  ngOnInit(): void {
    let obj: any = this.dataService.userObject;
    this.userName = obj.firstName;
    this.userEmail = obj.email;
  }


}
