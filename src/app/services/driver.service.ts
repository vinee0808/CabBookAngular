import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../model/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
driver: Driver;
  constructor(private http: HttpClient) { }
  
  fetchDriver(email: String, password: String){
    return this.http.get<Driver>("http://localhost:8180/driver/get/"+email+"/"+password);
  }
  registerDriver(driver : Driver){
    return this.http.post<Driver>("http://localhost:8180/driver/saveDriver", driver);
   }
}
