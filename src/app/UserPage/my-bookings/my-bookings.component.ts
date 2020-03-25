import { Component, OnInit} from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';
import { BookingService} from '../BookingService';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  
clickedBooking=true;
clickedCancel=false;
clickedCompleted=false;

responsebooking:BookingResponse[]
bookings:BookingResponse[]=[]
cancelledbookings:BookingResponse[]=[]
completedbookings:BookingResponse[]=[]

constructor(private bookingservice: BookingService ) { }

  ngOnInit() {
    this.loadBookingData();
   }


  reloaddata(){
    this.loadBookingData();
  }

    
clickedBookingLink(){
       this.clickedBooking=true;
       this.clickedCancel=false;
       this.clickedCompleted=false;
}
clickedCancelLink(){
    this.clickedCancel=true;
    this.clickedCompleted=false;
    this.clickedBooking=false;
}
clickedCompletedLink(){
  this.clickedCancel=false;
  this.clickedCompleted=true;
  this.clickedBooking=false;
}


loadBookingData(){
  this.bookingservice.getBooking().subscribe(
    (responsebooking) => {
      this.bookings = Object.assign([]);
      this.cancelledbookings = Object.assign([]);
      for (const booking of responsebooking) {
        if (booking.status === "unAssigned"||"assigned") {
          this.bookings.push(booking);
        }
        if (booking.status === "cancelled") {
          this.cancelledbookings.push(booking);
        }
        if (booking.status === "completed") {
          this.completedbookings.push(booking);
        }
      }
    },
    error => {
      error.status === 404
        ? console.log("Booking not found")
        : console.log(error.error);
    }
  );
}




 

     
     
      }

       
    

 
     
      
     
  
      
          
        
      
    
        
    
      

    
  

  
  


