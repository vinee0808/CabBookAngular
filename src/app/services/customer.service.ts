import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TripDetails } from '../model/tripDetails';
import { Payment } from '../model/payment';
import { Booking } from '../model/booking.model';
import { Report } from '../model/report.model';
import { Customer } from '../model/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  savePayment(booking : Booking){
    return this.http.post<Payment>("http://localhost:8180/driver/addPaym", booking);
   }
 
   saveReport(booking : Booking){
    return this.http.post<Report>("http://localhost:8180/driver/addFeedback", booking);
   }

   getCustomer(booking : Booking){
    return this.http.post<Customer>("http://localhost:8180/driver/findCustomer", booking);
   }
}
