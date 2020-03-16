import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { TutorPageComponent } from './tutor-page/tutor-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminTComponent } from './admin-page/admin-t/admin-t.component';
import { CancleComponent } from './cancle/cancle.component';
import { SectionRComponent } from './reschdule/section-r/section-r.component';
import { ReschduleComponent } from './reschdule/reschdule.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'userpage', component: UserpageComponent},
  { path: 'tutor-page', component:TutorPageComponent},
  {path:'admin-page',component: AdminPageComponent},
  {path:'admin-page/:admin-t',component: AdminTComponent},
  {path:'cancle',component: CancleComponent},
  {path:'reschdule',component: ReschduleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }