import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { BookingService} from '../BookingService';
import { Cancel } from '../classes/cancel';
import { takeUntil, filter } from 'rxjs/operators';
import {Location} from'@angular/common';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

id:number

responsebooking:BookingResponse[]
cancelbooking:Cancel[]
 

  constructor(private bookingservice: BookingService,
              private router:Router,
              private location:Location,
              private changedetect:ChangeDetectorRef) { }

  ngOnInit() {
    
    this.bookingservice.getBooking().subscribe
    (data=>
      {
        this.responsebooking=data
        })
    
  }

  deleteBooking(id:number){
     this.bookingservice.cancelBooking(id).subscribe(
      (data)=>{
        console.log("cancelled :"+id);
    })
    this.cancelbooking = this.cancelbooking.concat(this.responsebooking.splice(id, 1));;
      
     this.bookingservice.getBooking().subscribe(
          data=>
            {this.responsebooking=data;
            this.changedetect.detectChanges()
            })
  }      
          
        
      
    
        
    
      

    
  

  update(){
    this.router.navigate(['/reset',this.responsebooking])
  }

  

}
