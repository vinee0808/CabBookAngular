import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  customer: Customer;

  constructor(private http: HttpClient) { }
  fetchCustomer(email: String, password: String){
    return this.http.get<Customer>("http://localhost:8180/customer/get/"+email+"/"+password);
  }
}
