import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homepage/header/header.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './homepage/slider/slider.component';
import { Jumboltron1Component } from './homepage/jumboltron1/jumboltron1.component';
import { Section1Component } from './homepage/section1/section1.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

import { UserpageComponent } from './userpage/userpage.component';
import {  FormsModule,ReactiveFormsModule} from "@angular/forms";

import {
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
MatSelectModule,
MatRadioModule,MatCheckboxModule
} from '@angular/material';

import { ModalModule } from "ngx-bootstrap";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingService} from './UserPage/BookingService';
import { UserpageHeaderComponent } from './UserPage/userpage-header/userpage-header.component';
import { MyBookingsComponent } from './userpage/my-bookings/my-bookings.component';
import {  HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { StudentRegComponent } from './Account/student-reg/student-reg.component';
import { TutorRegComponent } from './Account/tutor-reg/tutor-reg.component';
import { AuthenticateService } from './Auth/authenticate.service';
import { AuthGuard } from './Auth/auth.guard';
import { TutorGuard } from './Auth/tutor.guard';
import { TutorPageComponent } from './tutor-page/tutor-page.component';
import { TutorPageHeaderComponent } from './tutor-page/tutor-page-header/tutor-page-header.component';
import { StudentProfileComponent } from './userpage/student-profile/student-profile.component';
import { TutorProfileComponent } from './tutor-page/tutor-profile/tutor-profile.component';
import { BookingPageComponent } from './userpage/booking-page/booking-page.component';
import { ResetBookingComponent } from './userpage/reset-booking/reset-booking.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';












@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    Jumboltron1Component,
    Section1Component,
    FooterComponent,
    HomepageComponent,

    UserpageComponent,
    UserpageHeaderComponent,
    MyBookingsComponent,
    LoginComponent,
   StudentRegComponent,
    TutorRegComponent,
    TutorPageComponent,
    
   
    TutorPageHeaderComponent,
    
   
    StudentProfileComponent,
    
   
    TutorProfileComponent,
    
   
    BookingPageComponent,
    
   
    ResetBookingComponent,
    
   
    PagenotfoundComponent,
    
   
   

   

   
  
    
  
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,MatInputModule,
    MatInputModule,ReactiveFormsModule,MatSelectModule,MatRadioModule,MatCheckboxModule,MatCardModule
  ],
  providers: [ BookingService,AuthenticateService ,AuthGuard,TutorGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
