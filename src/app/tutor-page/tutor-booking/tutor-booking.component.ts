import { Component, OnInit } from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';
import { HttpClient } from '@angular/common/http';
import { BookingService } from 'src/app/userpage/BookingService';

@Component({
  selector: 'app-tutor-booking',
  templateUrl: './tutor-booking.component.html',
  styleUrls: ['./tutor-booking.component.css']
})
export class TutorBookingComponent implements OnInit {

  
  responsebooking:BookingResponse[];
  availableBookings: BookingResponse[] = [];
  acceptedBookings: BookingResponse[] = [];

 constructor(private http: HttpClient,
    private bookingservice: BookingService,
    ) {}

  ngOnInit() {
    this.loadData();
  }

  reloadData() {
    this.loadData();
 
  }
    

 
loadData(){
  this.bookingservice.getTutorPage().subscribe(
    (responsebooking) => {
      this.availableBookings = Object.assign([]);
      this.acceptedBookings = Object.assign([]);
      for (const booking of responsebooking) {
        if (booking.status === "unAssigned") {
          this.availableBookings.push(booking);
        }
        if (booking.status === "assigned") {
          this.acceptedBookings.push(booking);
        }
      }
    },
    error => {
      error.status === 404
        ? console.log("tutor not found")
        : console.log(error.error);
    }
  );
}


 

}

