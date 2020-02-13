import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';
import { Report } from 'src/app/model/report.model';
import { Driver } from 'src/app/model/driver.model';
import { DriverService } from 'src/app/services/driver.service';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report: Report;
  driver: Driver;
  drivers: Driver[];
  id:number;
  reports:Report[];

  constructor(private service:DriverService, private route:Router) {
    this.report= new Report();

  }
  ngOnInit() {
    this.service.listReports().subscribe(data => this.reports =data);
  }


  home(){
    this.route.navigate(['home']);
   }

  
  fetchDriver(report: Report){  
    this.service.setter(report)    
          this.route.navigate(['solve']);
  }
  logOut(){
    this.route.navigate(['login']);
  }
}
