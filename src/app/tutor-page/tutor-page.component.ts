// tslint:disable: quotemark
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BookingResponse } from "src/app/Response/bookingResponse";
import { Component, OnInit } from "@angular/core";

import { BookingService } from '../userpage/BookingService';


@Component({
  selector: "app-tutor-page",
  templateUrl: "./tutor-page.component.html",
  styleUrls: ["./tutor-page.component.css"]
})
export class TutorPageComponent implements OnInit {

  responsebooking:BookingResponse[];
  availableBookings: BookingResponse[] = [];
  acceptedBookings: BookingResponse[] = [];

 constructor(private http: HttpClient,
    private bookingservice: BookingService) {}

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
