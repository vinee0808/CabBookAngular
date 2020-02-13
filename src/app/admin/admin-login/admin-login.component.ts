import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private service: AuthenticationService) { }

 
  
  ngOnInit() {
  }

  checkLogin() {
    if (this.service.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['home'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
