import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking.model';
import { BookingService } from '../services/booking.service';
import { CustomerRequest } from '../model/customer_requirement.model';

import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-trip-requests',
  templateUrl: './trip-requests.component.html',
  styleUrls: ['./trip-requests.component.css']
})
export class TripRequestsComponent implements OnInit {
booking:  Booking;
requestId: number;
customerRequest:CustomerRequest;
customerRequests:CustomerRequest[];
  constructor(private router: Router, private  service:RiderService) { 
    this.customerRequest = new CustomerRequest();
  }

  ngOnInit() {
    this.service.listRequest().subscribe(data => this.customerRequests =data);
  }
  confirm(){
    
    this.router.navigate(['add-payment']);
  }
  // cancel(customerRequest: CustomerRequest): void {
  //   var ans = confirm("Are you sure you want to cancel?")
  //   if(ans){
  //   this.service.deleteRequest(this.requestId: any):void
  //     .subscribe(data => {
  //       this.customerRequests = this.customerRequests.filter(c => c !== customerRequest);
        
  //     })}
//this.router.navigate(['trip-requests'])
  // };
  // deleteDriver(driver: Driver): void {
  //   var ans = confirm("Are you sure you want to delete?")
  //   if(ans){
  //   this.service.deleteDriver(driver.driverId)
  //     .subscribe(data => {
  //       this.drivers = this.drivers.filter(d => d !== driver);
        
  //     })}
  // };

}
