import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';
import { Payment } from 'src/app/model/payment';
import { Report } from 'src/app/model/report.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  book: Booking;
  payment: Payment;
  report: Report;
 

  constructor(private route: Router) { }

  ngOnInit() {
  }

  addRep(){
    alert("ThankYou for your feedback!!")
    this.route.navigate(['book-cab']);
  }
}
