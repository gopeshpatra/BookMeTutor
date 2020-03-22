import { NgModule } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";

import { LoginComponent } from "./login/login.component";
import { TutorRegComponent } from "./Account/tutor-reg/tutor-reg.component";
import { StudentRegComponent } from "./Account/student-reg/student-reg.component";
import { AuthGuard } from "./Auth/auth.guard";
import { TutorPageComponent } from "./tutor-page/tutor-page.component";
import { TutorGuard } from "./Auth/tutor.guard";
import { MyBookingsComponent } from "./userpage/my-bookings/my-bookings.component";
import { StudentProfileComponent } from "./userpage/student-profile/student-profile.component";
import { BookingPageComponent } from "./userpage/booking-page/booking-page.component";
import { UserpageComponent } from "./userpage/userpage.component";
import { ResetBookingComponent } from "./userpage/reset-booking/reset-booking.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },

  {
    path: "mybookings",
    component: MyBookingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: StudentProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "reset/:id",
    component: ResetBookingComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "userpage/booking",

    children: [{ path: "", component: BookingPageComponent }],
    canActivate: [AuthGuard]
  },

  { path: "login", component: LoginComponent },
  { path: "studentSignup", component: StudentRegComponent },
  { path: "tutorSignup", component: TutorRegComponent },

  {
    path: "tutorpage",
    component: TutorPageComponent
    // children: [{ path: "profile", component: TutorProfileComponent }]
    // canActivate: [TutorGuard]
  },

  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
