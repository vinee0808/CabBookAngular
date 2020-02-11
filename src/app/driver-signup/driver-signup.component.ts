import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../model/driver.model';
import { Vehicle } from '../model/vehicle.model';

@Component({
  selector: 'app-driver-signup',
  templateUrl: './driver-signup.component.html',
  styleUrls: ['./driver-signup.component.css']
})
export class DriverSignupComponent implements OnInit {
  driver: Driver;
  today: string;
  minDate : string;
  vehicle : Vehicle;
  locations : string[] = ["Powai","Andheri", "Juhu", "Airoli", "Kalwa", "Thane", "Kandivali", "Goregoan","Marol", "Oshiwara","Aarey Colony", "IIT Bombay", "Borivali", "Dombivili", "Mulund West", "SGNP", "Kanjurmarg East", "Ghansoli", "Mahape", "Charkop Gaon"];
  constructor(private router : Router) {
    this.locations.sort();
    this.driver = new Driver();
    this.vehicle = new Vehicle();
   }

  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];
    this.minDate = new Date("1900-01-01").toISOString().split('T')[0];
  }
  addNewDriver(){
    this.router.navigate(['driver-login']);
  }
}
