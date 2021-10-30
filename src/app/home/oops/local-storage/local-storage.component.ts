import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }

  getValueFromService(){
    console.log(this.dataService.getDetails());
  }
}
