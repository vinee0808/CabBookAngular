import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';
import { CustomerRequest } from '../model/customer_requirement.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RiderService {
  deleteRequest(requestId: any) {
    throw new Error("Method not implemented.");
  }
  customer: Customer;
  cRequest : CustomerRequest;

  constructor(private http: HttpClient) { }
  fetchCustomer(email: String, password: String){
    return this.http.get<Customer>("http://localhost:8180/customer/get/"+email+"/"+password);
  }
  registerCustomer(customer : Customer){
    return this.http.post<Customer>("http://localhost:8180/customer/saveCustomer", customer);
   }
   saveRequest(cRequest : CustomerRequest){
    return this.http.post<CustomerRequest>("http://localhost:8180/customer/request", cRequest);
   }
   listRequest():Observable<any>{
  
    return this.http.get("http://localhost:8180/customer/getAllRequests");
  }
  // deleteRequest(id: number) {
  //   return this.http.delete("http://localhost:8180/customer/remove/" + '/' + id);
  // }
  listCustomer():Observable<any>{
    return this.http.get("http://localhost:8180/customer/getAllCustomers");
  }

}
