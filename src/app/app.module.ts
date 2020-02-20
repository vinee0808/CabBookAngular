import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DriverSignupComponent } from './driver-signup/driver-signup.component';
import { RiderSignupComponent } from './rider-signup/rider-signup.component';
import { RiderLoginComponent } from './rider-login/rider-login.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AddReportComponent } from './add-report/add-report.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FindTripComponent } from './find-trip/find-trip.component';
import { TripRequestsComponent } from './trip-requests/trip-requests.component';
import { HomeComponent } from './admin/home/home.component';
import { BookingdetailsComponent } from './admin/bookingdetails/bookingdetails.component';
import { ReportComponent } from './admin/customerIssues/report.component';
import { ListComponent } from './admin/listDriver/list.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BookCabComponent } from './book-cab/book-cab.component';
import { SolveComponent } from './admin/solveIssues/solve.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListCustomerComponent } from './admin/list-customer/list-customer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DriverSignupComponent,
    AddPaymentComponent,
    FindTripComponent,
    BookCabComponent,
    TripRequestsComponent,
    RiderSignupComponent,
    AddReportComponent,
    RiderLoginComponent,
    DriverLoginComponent,
    TripRequestsComponent,
  BookingdetailsComponent,
  ReportComponent,
  ListComponent,
  SolveComponent,
  AdminLoginComponent,
  ListCustomerComponent,
  ContactUsComponent,
  HeaderComponent,
  FooterComponent
  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,NgxPaginationModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
