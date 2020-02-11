import { Component, OnInit } from '@angular/core';
import { RiderSignin } from './ridersignin.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { Driver } from '../model/driver.model';
import { Vehicle } from '../model/vehicle.model';

@Component({
  selector: 'app-rider-signup',
  templateUrl: './rider-signup.component.html',
  styleUrls: ['./rider-signup.component.css']
})
export class RiderSignupComponent implements OnInit {

customer: Customer;



  constructor(private router: Router) { 
    this.customer= new Customer();
    
    
  }

  ngOnInit() {
    
  }
  addNewCustomer(){
    this.router.navigate(['rider-login']);
  }
  





}

















