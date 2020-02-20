import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';
import { CustomerRequest } from '../model/customer_requirement.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RiderService {
  public isRiderloggedin:boolean=false;
  
  // deleteRequest(requestId: any) {
  //   throw new Error("Method not implemented.");
  // }
  customers: Customer;
  cRequest : CustomerRequest;

  constructor(private http: HttpClient) {
    this.customers= new Customer();
   }
  fetchCustomer(email: String, password: String){
    return this.http.get<Customer>("http://localhost:8180/customer/get/"+email+"/"+password).pipe(retry(1),catchError(this.errorHandler));
  }
  errorHandler(error){
let errorMessage= '';
if(error.error instanceof ErrorEvent){
  errorMessage = `Error: ${error.error.message}`;
}
  
  else{
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
  }
  console.log(error);
  window.alert(errorMessage);
  return throwError(error.error)
  
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
  // createSession(customer : Customer){
  //   this.isRiderloggedin=true;
  //   this.customers = customer;
  //   localStorage.setItem("customerId",this.customers.customerId.toString())
  //   console.log(localStorage.getItem("customerId"));
  // }

  // destroySession(){
  //   this.isRiderloggedin=false;
  //   this.customers = new Customer;
  //   localStorage.clear();
    
  // }

logOutRider(){
  this.isRiderloggedin=false;
}

}
