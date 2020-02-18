import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/services/rider.service';
import { Customer } from 'src/app/model/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
customers: Customer[];
  constructor(private service: RiderService, private route: Router) { }

  ngOnInit() {
    this.service.listCustomer().subscribe(data =>this.customers= data)
  }
  logOut(){
    this.route.navigate(['login']);
  }

}
