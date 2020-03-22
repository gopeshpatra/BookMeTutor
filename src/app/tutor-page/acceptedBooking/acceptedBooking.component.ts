// tslint:disable: quotemark
import { MessageResponse } from "./../../Response/messageResponse";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BookingResponse } from "./../../Response/bookingResponse";

import { Component, OnInit, Input } from "@angular/core";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "app-acceptedBooking",
  templateUrl: "./acceptedBooking.component.html",
  styleUrls: ["./acceptedBooking.component.css"]
})
export class AcceptedBookingComponent implements OnInit {
  secret = "";

  @Input() booking: BookingResponse;

  // TODO : change email and token with that of localstorage
  email = "komohoj972@provamail.com";

  jwtToken =
    // tslint:disable-next-line: max-line-length
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb21vaG9qOTcyQHByb3ZhbWFpbC5jb20iLCJleHAiOjE1ODQ3NDkwMjEsImlhdCI6MTU4NDcyMDIyMX0.8WXSbcynS0w_OdULW1Rzfxn45bwboOA16c2UOv1s-kZI_7YYwIUfmK7spvgWSNg7dJrB3gq42rCIFgogRb-2Kw";

  dataObserver = {
    next(data: MessageResponse) {
      alert(data.getMessage);
    },
    error(error: Error) {
      switch (error.status) {
        case 400: {
          alert("Secret is mandatory");
          break;
        }
        case 404: {
          alert("Booking not found");
          break;
        }
        case 406: {
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
        "/tutor/" + this.email + "/booking/" + this.booking.id + "/complete",
        {
          secret: this.secret
        },
        {
          headers: new HttpHeaders({
            "Content-Type": "applicatin/json",
            Authorization: this.jwtToken
          })
        }
      )
      .subscribe(this.dataObserver);
  }
}
