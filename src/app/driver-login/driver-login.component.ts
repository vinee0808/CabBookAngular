import { Component, OnInit } from '@angular/core';
import { Driver } from '../model/driver.model';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  driver:Driver;
email:String;
password: String;
  // invalidLogin = false
  constructor(private router:Router, private service: DriverService) {
    this.driver = new Driver();
    
   }

  ngOnInit() {
  }
  
  checkLogin(){
    this.service.fetchDriver(this.email, this.password).subscribe(data=>this.driver=data)
      // if(this.driver!=null){
         
      //       alert("Login Successfull!");
            this.router.navigate(['trip-requests']);
          // }
          // else{
          //   alert("Invalid Credentials!");
          //   this.driver = new Driver();
          // }
          // });
        
    
  }
  registerDriver(){
    this.router.navigate(['driver-signup']);
  }
}
