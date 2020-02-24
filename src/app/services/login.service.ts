import { Injectable } from '@angular/core';
import { Driver } from '../model/driver.model';
import { CustomerRequest } from '../model/customer_requirement.model';
import { Customer } from '../model/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isRiderloggedin:boolean=false;
  public isDriverloggedin:boolean=false;
  customers: Customer;
  cRequest : CustomerRequest;
  driver: Driver;
drivers:Driver[]=[];

  constructor(private http: HttpClient) {
    this.customers= new Customer();
   }
   fetchDriver(email: String, password: String){
    this.isDriverloggedin= true;
    return this.http.get<Driver>("http://localhost:8180/driver/get/"+email+"/"+password).pipe(retry(1),catchError(this.errorHandler));
  }
  fetchCustomer(email: String, password: String){
    return this.http.get<Customer>("http://localhost:8180/customer/get/"+email+"/"+password).pipe(retry(1),catchError(this.errorHandler));
  }

  registerDriver(driver : Driver){
    return this.http.post<Driver>("http://localhost:8180/driver/saveDriver", driver);
   }
  
    
     listDriver():Observable<any>{
    
      return this.http.get("http://localhost:8180/driver/getAllDrivers");
    }
  
  
  
    listBooking():Observable<any>{
      return this.http.get("http://localhost:8180/driver/getAllBooking");
    }

    registerCustomer(customer : Customer){
      return this.http.post<Customer>("http://localhost:8180/customer/saveCustomer", customer);
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
    logOutDriver(){
      this.isDriverloggedin=false;
    }
    
  
     set(driver: Driver){
       this.driver= driver;
     }
     get(){
       return this.driver;
      
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
}
