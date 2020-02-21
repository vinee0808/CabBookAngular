import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';




@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor( private router: Router, private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.loginService.isDriverloggedin || this.loginService.isRiderloggedin)
    return true;
else{
  alert("Please Login First!");
  this.router.navigate(['/login']);
  return false;
  }
}
}