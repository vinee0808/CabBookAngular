import { Component, OnInit } from '@angular/core';
import { RiderSignin } from './ridersignin.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { Driver } from '../model/driver.model';
import { Vehicle } from '../model/vehicle.model';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-rider-signup',
  templateUrl: './rider-signup.component.html',
  styleUrls: ['./rider-signup.component.css']
})
export class RiderSignupComponent implements OnInit {

customer: Customer;
errorMessage: string;


  constructor(private router: Router, private service: RiderService) { 
    this.customer= new Customer();
    
    
  }

  ngOnInit() {
    
  }
  // addNewCustomer(){
  //   this.router.navigate(['rider-login']);
  // }

  addNewCustomer(){
    this.service.registerCustomer(this.customer).subscribe(data => {
      this.customer = data;
      if(this.customer.customerId>0){
        alert("Signup successfull!");
        this.router.navigate(['rider-login']);
      }
      else{
        alert("Signup Failed!");
        this.router.navigate(['rider-signup']);
      }
    });
  
//   this.service.registerCustomer(this.customer).subscribe(data => {
//     this.customer = data;
//     console.log("12132");
//     this.router.navigate(['rider-login']);
//   }, err => {

//     console.log(err);
//     this.errorMessage = 'username already exist';
//   }
// );
  

}



}

















