import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../model/driver.model';
import { Report } from '../model/report.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  public isDriverloggedin:boolean=false;
 
driver: Driver;
drivers:Driver[]=[];
  reports:Report[]=[];

 report: Report;
  constructor(private http: HttpClient) { }
  

  // createSession(driver : Driver){
  //   this.isDriverloggedin=true;
  //   this.driver = driver;
  //   localStorage.setItem("driverId",this.driver.driverId.toString())
  //   console.log(localStorage.getItem("driverId"));
  // }

  // destroySession(){
  //   this.isDriverloggedin=false;
  //   this.driver = new Driver;
  //   localStorage.clear();
    
  // }

  fetchDriver(email: String, password: String){
    this.isDriverloggedin= true;
    return this.http.get<Driver>("http://localhost:8180/driver/get/"+email+"/"+password).pipe(retry(1),catchError(this.errorHandler));
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
  registerDriver(driver : Driver){
    return this.http.post<Driver>("http://localhost:8180/driver/saveDriver", driver);
   }
  
    
     listDriver():Observable<any>{
    
      return this.http.get("http://localhost:8180/driver/getAllDrivers");
    }
  
  
  
    listBooking():Observable<any>{
      return this.http.get("http://localhost:8180/driver/getAllBooking");
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
    setter(report: Report){
      this.report= report;
      console.log(report);
    }
    getter(){
      return this.report;
     
    }
  }

