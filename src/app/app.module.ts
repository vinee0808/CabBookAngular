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
import { BookCabComponent } from './book-cab/book-cab.component';
import { AddReportComponent } from './add-report/add-report.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FindTripComponent } from './find-trip/find-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    SignupComponent,
    LoginComponent,
    DriverSignupComponent,
    AddPaymentComponent,
    FindTripComponent,
    BookCabComponent,
    RiderSignupComponent,
    AddReportComponent,
    RiderLoginComponent,
    DriverLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
