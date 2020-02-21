import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/model/customer.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
customers: Customer[];
  constructor(private service: LoginService, private route: Router) { }

  ngOnInit() {
    this.service.listCustomer().subscribe(data =>this.customers= data)
  }
  logOut(){
    this.route.navigate(['login']);
  }

}
