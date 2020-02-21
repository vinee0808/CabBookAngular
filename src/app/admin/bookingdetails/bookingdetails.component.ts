import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Booking } from 'src/app/model/booking.model';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  booking: Booking;
  bookingId:number;
  bookings:Booking[];

  constructor(private service:LoginService, private route:Router) { }

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
