import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { SignupComponent } from './signup/signup.component';
import { DriverSignupComponent } from './driver-signup/driver-signup.component';
import { RiderSignupComponent } from './rider-signup/rider-signup.component';
import { LoginComponent } from './login/login.component';
import { RiderLoginComponent } from './rider-login/rider-login.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';

import { AddReportComponent } from './add-report/add-report.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FindTripComponent } from './find-trip/find-trip.component';
import { TripRequestsComponent } from './trip-requests/trip-requests.component';
import { HomeComponent } from './admin/home/home.component';
import { BookingdetailsComponent } from './admin/bookingdetails/bookingdetails.component';
import { ListComponent } from './admin/listDriver/list.component';
import { ReportComponent } from './admin/customerIssues/report.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BookCabComponent } from './book-cab/book-cab.component';
import { SolveComponent } from './admin/solveIssues/solve.component';



const routes: Routes = [
  {path:'',redirectTo:'/homecomponent',pathMatch:'full'},
 { path:'homecomponent', component:HomecomponentComponent},
 { path:'home', component:HomeComponent},
 { path:'signup', component:SignupComponent},
 { path:'login', component:LoginComponent},
 {path:'driver-signup',component:DriverSignupComponent},
 {path:'add-payment',component:AddPaymentComponent},
 {path:'find-trip',component:FindTripComponent},
 {path:'book-cab',component:BookCabComponent},
 {path:'add-report',component:AddReportComponent},
 {path:'trip-requests',component:TripRequestsComponent},
 {path:'rider-login',component:RiderLoginComponent},
 {path:'driver-login',component:DriverLoginComponent},
  {path:'rider-signup',component:RiderSignupComponent},
  {path:'admin-login',component:AdminLoginComponent},

 
  {path:'bookingdetails',component:BookingdetailsComponent},
  {path:'list',component:ListComponent},
  {path:'report',component:ReportComponent},
  {path:'solve',component:SolveComponent},
  // {path:'**',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
