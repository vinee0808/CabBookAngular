import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Booking } from 'src/app/model/booking.model';
import { DriverService } from 'src/app/services/driver.service';


@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  booking: Booking;
  bookingId:number;
  bookings:Booking[];

  constructor(private service:DriverService, private route:Router) { }

  ngOnInit() {
    this.service.listBooking().subscribe(data => this.bookings =data);
  }

  home(){
    this.route.navigate(['home']);
   }
   logOut(){
    this.route.navigate(['login']);
  }

}
