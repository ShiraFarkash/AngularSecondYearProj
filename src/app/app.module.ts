import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ZoomInDirective } from './directive/zoom-in.directive';
import { CartInHomeComponent } from './components/cart-in-home/cart-in-home.component';
import { GewelesRingsComponent } from './components/geweles-rings/geweles-rings.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ContactUsComponent,
    ZoomInDirective,
    CartInHomeComponent,
    GewelesRingsComponent, 
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    RouterModule ,
    HttpClientModule,
  ],
  providers: [DataService, LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
