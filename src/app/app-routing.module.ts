import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { SignupComponent } from './signup/signup.component';
import { DriverSignupComponent } from './driver-signup/driver-signup.component';
import { RiderSignupComponent } from './rider-signup/rider-signup.component';
import { LoginComponent } from './login/login.component';
import { RiderLoginComponent } from './rider-login/rider-login.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
 { path:'home', component:HomecomponentComponent},
 { path:'signup', component:SignupComponent},
 { path:'login', component:LoginComponent},
 {path:'driver-signup',component:DriverSignupComponent},
 {path:'rider-login',component:RiderLoginComponent},
 {path:'driver-login',component:DriverLoginComponent},
  {path:'rider-signup',component:RiderSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
