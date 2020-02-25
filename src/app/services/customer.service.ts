import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Payment } from '../model/payment';
import { Booking } from '../model/booking.model';
import { Report } from '../model/report.model';
import { Customer } from '../model/customer.model';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ContactUs } from '../model/contactUs.model';
import { Pricing } from '../model/pricing';
import { CustomerRequest } from '../model/customer_requirement.model';
import { Observable } from 'rxjs';


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
   saveContact(contactUs: ContactUs){
     return this.http.post<ContactUs>("http://localhost:8180/customer/contact", contactUs);
   }
   getPrice(cRequest : CustomerRequest){
     return this.http.post<number>("http://localhost:8180/tripdetails/estimatePrice", cRequest);
   }
   saveRequest(cRequest : CustomerRequest){
    return this.http.post<CustomerRequest>("http://localhost:8180/tripdetails/add", cRequest);
   }
   listRequest():Observable<any>{
    
    return this.http.get("http://localhost:8180/tripdetails/allRequests");
  }
 
}
