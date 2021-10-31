import { Component, OnInit } from '@angular/core';

var nums:number[] = [1,2,3,3];

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})

export class ArrayComponent implements OnInit {
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  getArr(){
    console.log(nums);
  }
  
  pushArr(val:any){
    nums.push(val);
    console.log(nums.length);
  }
  
}
