import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Driver } from 'src/app/model/driver.model';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  driver: Driver;
  driverId:number;
  drivers:Driver[];
  
    constructor(private service:LoginService, private route:Router) {
    this.driver= new Driver();
   }


  ngOnInit() {
  
    this.service.listDriver().subscribe(data => this.drivers =data);
   
      
  }
  // deleteDriver(driver: Driver): void {
  //   var ans = confirm("Are you sure you want to delete?")
  //   if(ans){
  //   this.service.deleteDriver(driver.driverId)
  //     .subscribe(data => {
  //       this.drivers = this.drivers.filter(d => d !== driver);
        
  //     })}
  // };
  
  
     verifyDriver(driver: Driver){  
       this.service.set(driver)    
           this.route.navigate(['signup']);            
     }
     home(){
      this.route.navigate(['home']);
     }
     addDriver(){  
       let driver= new Driver();
      this.service.set(driver)    
          this.route.navigate(['signup']);            
    }
    logOut(){
      this.route.navigate(['login']);
    }
   
}
