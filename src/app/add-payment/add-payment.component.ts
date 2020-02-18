import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.model';
import { Customer } from '../model/customer.model';
import { Payment } from '../model/payment';
import { Router } from '@angular/router';
import { TransitService } from '../services/transit.service';
import { CustomerService } from '../services/customer.service';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  book: Booking;
  cust: Customer;
  payment: Payment;
  found: boolean = false;
  err: any;
  bookings:Booking[];

  constructor(private service:DriverService, private route:Router) { 
    this.service.listBooking().subscribe(data => this.bookings =data);
  }
  

//   ngOnInit() {
//   }

//   checkBalance(){
    
//   }
// }
ngOnInit() {
}

// addPay() {
//   this.service.savePayment(this.book).subscribe(data => this.payment = data);
//   this.route.navigate(['add-report']);
// }
trip(){
  this.route.navigate(['login']);
}

// checkBalance() {
//   this.service.getCustomer(this.book).subscribe(data => {
//     this.cust = data;
//     if (this.cust == null)
//       alert("Customer Not Found!");
//     else {
//       if (this.found == true) {
//         this.cust.wallet = this.book.finalFare;
//         this.addPay();
//       }
//       else if (this.cust.wallet < this.book.finalFare) {
//         this.found = true;
//         alert("Insufficient Wallet balance!");
//       }
//       else
//         this.addPay();
//     }
//   });

// }
// getBooking() {
//   this.transitService.getBooking().subscribe(book => this.book = book, err => this.err = err);
// }
}


