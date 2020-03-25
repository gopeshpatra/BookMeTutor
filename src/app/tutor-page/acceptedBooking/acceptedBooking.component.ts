import { MessageResponse } from "./../../Response/messageResponse";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BookingResponse } from "./../../Response/bookingResponse";

import { Component, OnInit, Input } from "@angular/core";

@Component({

  selector: "app-acceptedBooking",
  templateUrl: "./acceptedBooking.component.html",
  styleUrls: ["./acceptedBooking.component.css"]
})
export class AcceptedBookingComponent implements OnInit {
  secret = "";

  @Input() booking: BookingResponse;


  
  httpOptions={

    headers:new HttpHeaders({
     'Content-Type':'application/json',
     'Authorization':localStorage.getItem('token')
       } )
     };

     serverUrl='http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com';


  dataObserver = {
    next(data: MessageResponse) {
      alert(data.getMessage);
    },
    error(error: Error) {

      switch (error.message) {
        case "400": {
          alert("Secret is mandatory");
          break;
        }
        case "404": {
          alert("Booking not found");
          break;
        }
        case "406": {
     alert("Session not expired yet");
          break;
        }
        default:
          console.log("Something unexpected happened");
      }
    },
        complete() {}
};
  

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  endSession() {
    this.http
      .post(

       this.serverUrl+ "/tutor/" +localStorage.getItem('mail') + "/booking/" + this.booking.id + "/complete",
        {
          secret: this.secret
        },
        this.httpOptions
        )
      .subscribe(this.dataObserver);
  }

  }

