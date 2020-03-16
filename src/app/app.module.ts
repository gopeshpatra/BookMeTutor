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
import { Userpage1Component } from './userpage/userpage1/userpage1.component';
import { UserpageComponent } from './userpage/userpage.component';


import { ModalModule } from "ngx-bootstrap";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { TutorPageComponent } from './tutor-page/tutor-page.component';
import { AvailableBookingComponent } from './tutor-page/available-booking/available-booking.component';
import { AcceptedBookingComponent } from './tutor-page/accepted-booking/accepted-booking.component';
import { Header1Component } from './tutor-page/header1/header1.component';
import { Footer1Component } from './tutor-page/footer1/footer1.component';
import { SectionComponent } from './tutor-page/section/section.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { HeaderAComponent } from './admin-page/header-a/header-a.component';
import { SectionAComponent } from './admin-page/section-a/section-a.component';
import { FooterAComponent } from './admin-page/footer-a/footer-a.component';
import { AdminTComponent } from './admin-page/admin-t/admin-t.component';
import { CancleComponent } from './cancle/cancle.component';
import { HeaderCComponent } from './cancle/header-c/header-c.component';
import { FooterCComponent } from './cancle/footer-c/footer-c.component';
import { SectionCComponent } from './cancle/section-c/section-c.component';
import { ReschduleComponent } from './reschdule/reschdule.component';
import { FooterRComponent } from './reschdule/footer-r/footer-r.component';
import { HeaderRComponent } from './reschdule/header-r/header-r.component';
import { SectionRComponent } from './reschdule/section-r/section-r.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    Jumboltron1Component,
    Section1Component,
    FooterComponent,
    HomepageComponent,
    Userpage1Component,
    UserpageComponent,
    TutorPageComponent,
    AvailableBookingComponent,
    AcceptedBookingComponent,
    Header1Component,
    Footer1Component,
    SectionComponent,
    AdminPageComponent,
    FooterAComponent,
    HeaderAComponent,
    SectionAComponent,
   
    AdminTComponent,
   
    CancleComponent,
   
    HeaderCComponent,
   
    FooterCComponent,
   
    SectionCComponent,
   
    ReschduleComponent,
   
    FooterRComponent,
   
    HeaderRComponent,
   
    SectionRComponent 
    
  
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
   
  ],
 
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
