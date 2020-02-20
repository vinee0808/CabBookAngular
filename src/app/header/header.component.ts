import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private driverService: DriverService, private riderService: RiderService) { }

  ngOnInit() {
  }

}
