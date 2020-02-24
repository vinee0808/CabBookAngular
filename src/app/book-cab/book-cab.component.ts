import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';
import { Customer } from 'src/app/model/customer.model';
import { Router } from '@angular/router';
import { CustomerRequest } from 'src/app/model/customer_requirement.model';

import { Pricing } from '../model/pricing';
import { CustomerService } from '../services/customer.service';
import { LoginService } from '../services/login.service';




@Component({
  selector: 'app-book-cab',
  templateUrl: './book-cab.component.html',
  styleUrls: ['./book-cab.component.css']
})
export class BookCabComponent implements OnInit {
  showPriceComp:boolean = false;
  tripdetails:CustomerRequest;
  locations:String[] =  ['Airoli','Marol','Ghansoli','Ghatkopar','Andheri'];
  fare:number;
  customer : Customer;
  cabDetails : Booking;
 
  
  cartype : string;
  estimate : string;
  @Output() showTripStatus = new EventEmitter();

  constructor(private route:Router, private services: CustomerService) { 
    this.customer = new Customer();
    this.cabDetails = new Booking();
    this.tripdetails = new CustomerRequest();
    // this.pricing= new Pricing();
  }

  ngOnInit() {
    this.tripdetails = new CustomerRequest();
   // this.tripdetails = new CustomerRequest();
    // this.service.getLocations().subscribe(p => this.locations=p);

  }

  confirmBooking(){
    // if(this.tripdetails.model=="SUV"){
    //   this.estimate = "Rs." + 100+ "/-" + this.tripdetails.model;
    // }
    // if(this.tripdetails.model=="Mini"){
    //   this.estimate = "Rs." + 10+ "/-" + this.tripdetails.model;
    // }
    // if(this.tripdetails.model=="Micro"){
    //   this.estimate = "Rs." + 20+ "/-" + this.tripdetails.model;
    // }
    // if(this.tripdetails.model=="Sedan"){
    //   this.estimate = "Rs." + 30+ "/-" + this.tripdetails.model;
    // }
    this.services.saveRequest(this.tripdetails).subscribe(data => 
     {this.tripdetails = data;
     if(this.tripdetails.customerId!=null){
     
      alert("Cab Booked Successfully!");
      this.route.navigate(['login']);
    }
    
    else{
      alert("Invalid Input!");
      
    }
    });
  }
     
    //  alert("Cab Booked Successfully!");
    // this.route.navigate(['add-payment'])
  //}
  estimateFare(){
    // if(this.tripdetails.model=="SUV"){
    //   this.estimate = "Rs." + 166.7+ "/-" + this.tripdetails.model;
    // }
    // if(this.tripdetails.model=="Mini"){
    //   this.estimate = "Rs." + 117.7+ "/-" + this.tripdetails.model;
    // }
    // if(this.tripdetails.model=="Micro"){
    //   this.estimate = "Rs." + 120.9+ "/-" + this.tripdetails.model;
    // }
    // if(this.tripdetails.model=="Sedan"){
    //   this.estimate = "Rs." + 153.5+ "/-" + this.tripdetails.model;
    // }
    
    // this.route.navigate(['add-payment'])
    this.services.saveRequest(this.tripdetails).subscribe(data => 
      this.tripdetails = data);
    this.services.getPrice(this.tripdetails).subscribe(data => 
      this.fare = data);
      this.showPriceComp=true;
  }

  
// onConfirm(){
    //  this.tripdetails.customerId = this.service.getCustomerId().customerId;
    //this.service.saveBookingRequest(this.tripdetails).subscribe(p => this.tripdetails =p);
  //  this.tripdetail.customerId=+sessionStorage.getItem("customerId");
    // this.service.findACab(this.tripdetails).subscribe(c=>{this.cabDetails=c;
  //  console.log(this.cabDetails);
    //  console.log(this.cabDetails.bookingId);
     
    //  this.route.navigate(['user']);
  //  this.showTripStatus.emit("true");
   // sessionStorage.setItem("bookingStatus",this.cabDetails.tripStatus);
   // sessionStorage.setItem("driverId",this.cabDetails.driverId.toString());
  // });
    // this.route.navigate(['customer']);
    // this.showPriceComp=false;
 // }


}
