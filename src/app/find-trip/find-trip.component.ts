import { Component, OnInit } from '@angular/core';
import { CustomerRequest } from '../model/customer_requirement.model';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.css']
})
export class FindTripComponent implements OnInit {

  
  source : string;
  destination : string;
  type : string;
  locations : string[] = ["Thane","Juhu","Andheri","Versova"];
  model : string[] = ["Mini","Micro","SUV","Sedan"];
  estimate : string;
  constructor() {
   
   }
  ngOnInit() {
  }

  estimateFare(){
    this.estimate = "Rs." + 100+ "/-" + this.type;
    console.log(this.estimate);
    console.log(this.source + this.destination);

  }
  findTrip(){}

}
