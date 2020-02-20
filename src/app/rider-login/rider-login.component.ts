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
  constructor(private route:Router, private service: RiderService) {
    this.customer = new Customer();
    
   }

  ngOnInit() {
  }
  
  registerCustomer(){
    this.route.navigate(['rider-signup']);
  }
  checkLogin(){
  //   this.service.fetchCustomer(this.customer.email, this.customer.password).subscribe(data=>{this.customer=data;
    
  //     if(this.customer.customerId>0){
     
  //      alert("Login Successfull!");
  //      this.route.navigate(['book-cab']);
  //    }
  //    else{
  //      alert("Invalid Credentials!");
  //  this.customer= new Customer();
  //    }
  //    });
    
  this.service.fetchCustomer(this.customer.email, this.customer.password).subscribe(data=>{this.customer=data;
    
    if(this.customer.customerId>0){
     sessionStorage.setItem("userName", this.customer.name);
     sessionStorage.setItem("userEmail", this.customer.email);
     sessionStorage.setItem("customerId", this.customer.customerId.toString());
     alert("Login Successfully!!")
     
     this.route.navigate(['book-cab']);
   }
   else{
    
     alert("Invalid Credentials!");
     this.customer= new Customer();
   }
   });


}


   

// google() {
//   this.router.navigate(['rider-login']);

// }

// facebook() {
//   this.router.navigate(['rider-login']);

// }



}
