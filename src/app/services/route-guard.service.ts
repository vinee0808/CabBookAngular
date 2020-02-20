import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DriverService } from './driver.service';
import { RiderService } from './rider.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private driverService: DriverService, private riderService: RiderService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.driverService.isDriverloggedin || this.riderService.isRiderloggedin)
    return true;
else{
  alert("Please Login First!");
  this.router.navigate(['/login']);
  return false;
  }
}
}