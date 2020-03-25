import { Component, OnInit } from '@angular/core';
import { Login } from '../Request/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

ngOnInit() {

    if(localStorage.getItem('isRememberMe')==='true' && localStorage.getItem('role')==='student' ){
         this.router.navigate(['/userpage/booking'])
    }

    if(localStorage.getItem('isRememberMe')==='true' && localStorage.getItem('role')==='tutor' ){
      this.router.navigate(['/tutorpage/tutorbookings'])
 }
    

  }

}
