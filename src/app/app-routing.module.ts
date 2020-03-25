

import { NgModule } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { LoginComponent } from './login/login.component';
import { TutorRegComponent } from './Account/tutor-reg/tutor-reg.component';
import { StudentRegComponent } from './Account/student-reg/student-reg.component';
import{AuthGuard} from './Auth/auth.guard';

import { TutorGuard } from './Auth/tutor.guard';
import { MyBookingsComponent } from './userpage/my-bookings/my-bookings.component';
import { StudentProfileComponent } from './userpage/student-profile/student-profile.component';

import { BookingPageComponent } from './userpage/booking-page/booking-page.component';
import { UserpageComponent } from './userpage/userpage.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TutorPageComponent } from './tutor-page/tutor-page.component';
import { TutorProfileComponent } from './tutor-page/tutor-profile/tutor-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },


{
  path:'userpage',component:UserpageComponent,
  children:[
  { path: 'mybookings', component: MyBookingsComponent},
  { path: 'profile', component: StudentProfileComponent },
  { path: 'booking', component: BookingPageComponent},
  ],
canActivate:[AuthGuard]
},
    
  { path: 'login', component:LoginComponent },
  { path: 'studentSignup', component:StudentRegComponent },
  { path: 'tutorSignup', component:TutorRegComponent},

  {
    path: "tutorpage",
    component: TutorPageComponent,
   children: [{ path: "profile", component: TutorProfileComponent }],
    canActivate: [TutorGuard]
  },
  { path: "**", component: PagenotfoundComponent }
]
  

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard,TutorGuard]
})



export class AppRoutingModule {}
