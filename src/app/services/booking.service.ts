import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  listBooking():Observable<any>{
  
    return this.http.get("http://localhost:8180/booking/getAll");
  }
}
