import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../model/customer.model';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-rider-login',
  templateUrl: './rider-login.component.html',
  styleUrls: ['./rider-login.component.css']
})
export class RiderLoginComponent implements OnInit {
  customer:Customer;
  email:String;
  password: String;
  // invalidLogin = false
  constructor(private router:Router, private service: RiderService) {
    this.customer = new Customer();
    
   }

  ngOnInit() {
  }
  checkLogin(){

  }
  registerCustomer(){
    this.router.navigate(['rider-signup']);
  }
  fetchCustomer(){
    return this.service.fetchCustomer(this.email, this.password).subscribe(data=>{this.customer=data} );
  }

}
