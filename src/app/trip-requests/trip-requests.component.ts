import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-trip-requests',
  templateUrl: './trip-requests.component.html',
  styleUrls: ['./trip-requests.component.css']
})
export class TripRequestsComponent implements OnInit {
booking:  Booking;
bookings: Booking[];
  constructor(private router: Router, private service: BookingService) { 
    this.booking= new Booking();
  }

  ngOnInit() {
    this.service.listBooking().subscribe(data => this.bookings =data);
  }
  confirm(){
    
    this.router.navigate(['add-payment']);
  }
  cancel(){
this.router.navigate(['trip-requests'])
  }

}
