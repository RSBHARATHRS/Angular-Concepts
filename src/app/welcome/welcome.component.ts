import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  errDisplay;
  constructor(private router: Router, private dataService: DataServiceService) {
    this.errDisplay = "";
  }

  ngOnInit(): void {
  }

  login(userEmail: string, userPass: string) {
    if (!userEmail) {
      this.errDisplay = "block";
      return;
    }
    if (!userPass) {
      this.errDisplay = "block";
      return;
    }
    this.errDisplay = "none"
    let userDetails: any;
    userDetails = this.dataService.getDetails(userEmail);
    if (!userDetails) {
      alert("No such a User");
    }
    localStorage.setItem("currentUserID", userEmail);
    this.router.navigateByUrl("home");

  }

  goToRegister(): void {

    this.router.navigateByUrl("register");
  }
}
