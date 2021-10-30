import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  towWayVariable:string;
  selectedValue:string;
  radioValue:string;
  constructor() { 
    this.towWayVariable="";
    this.selectedValue="";
    this.radioValue="";
  }

  ngOnInit(): void {
  }

}
