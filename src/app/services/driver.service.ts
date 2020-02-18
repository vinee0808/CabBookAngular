import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../model/driver.model';
import { Report } from '../model/report.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
driver: Driver;
drivers:Driver[]=[];
  reports:Report[]=[];

 report: Report;
  constructor(private http: HttpClient) { }
  
  fetchDriver(email: String, password: String){
    return this.http.get<Driver>("http://localhost:8180/driver/get/"+email+"/"+password);
  }
  registerDriver(driver : Driver){
    return this.http.post<Driver>("http://localhost:8180/driver/saveDriver", driver);
   }
   deleteDriver(id: number) {
    return this.http.get("http://localhost:8180/admin/remove/"+id);
  }
  
    saveDriver(driver: Driver){
       return this.http.post<any>("http://localhost:8180/admin/saveDriver", driver);
   
     }
    
     listDriver():Observable<any>{
    
      return this.http.get("http://localhost:8180/driver/getAllDrivers");
    }
  
  
    findDriver(id: number): Observable<Driver> {
      return this.http.get<Driver>("http://localhost:8180/admin/driver/" + id);
    }
    
  
     updateDriver(driver: Driver) {
      return this.http.post("http://localhost:8180/admin/updateDriver", driver);
    }
   
  
    listReports():Observable<any>{
      return this.http.get("http://localhost:8180/admin/report");
    }
    listBooking():Observable<any>{
      return this.http.get("http://localhost:8180/driver/getAllBooking");
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

