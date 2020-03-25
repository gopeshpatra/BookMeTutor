import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BookingResponse } from "./../../Response/bookingResponse";
import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-availableBooking",
  templateUrl: "./availableBooking.component.html",
  styleUrls: ["./availableBooking.component.css"]
})
export class AvailableBookingComponent implements OnInit {
  @Input() booking: BookingResponse;


  @Output() statusChange = new EventEmitter<void>();

  secret: string;

  serverUrl='http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com';

  httpOptions={

    headers:new HttpHeaders({
     'Content-Type':'application/json',
     'Authorization':localStorage.getItem('token')
       } )
     };
    


  constructor(private http: HttpClient) {}

  ngOnInit() {}

  acceptBooking() {
    this.http
      .get(

        this.serverUrl +
        '/tutor/'+localStorage.getItem('mail')+'/booking/' +
          this.booking.id +
          "/accept",
          this.httpOptions)
      .subscribe(
        data => this.statusChange.emit(),
        error => console.log(error)
      );
  }

  rejectBooking() {
   this.http
      .get(
        this.serverUrl +
        '/tutor/'+localStorage.getItem('mail')+'/booking/' +
          this.booking.id +
          "/reject",
          this.httpOptions
        ) .subscribe(
        data => this.statusChange.emit(),
        error => console.log(error)
      );

}
}
