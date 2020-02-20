import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ContactUs } from '../model/contactUs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactUs: ContactUs;
  constructor(private service: CustomerService , private route: Router) {
    this.contactUs= new ContactUs();
  }

  ngOnInit() {
  }

submit(){
  this.service.saveContact(this.contactUs).subscribe(data => this.contactUs=data);
  alert("Thank you for contacting us!! We will contact you soon")
  this.route.navigate(['/homecomponent'])
  
}
}
