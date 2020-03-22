import { HttpClient, HttpHeaders } from "@angular/common/http";
// tslint:disable: quotemark

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

  // TODO : change email and token with that of localstorage

  email = "komohoj972@provamail.com";

  jwtToken =
    // tslint:disable-next-line: max-line-length
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb21vaG9qOTcyQHByb3ZhbWFpbC5jb20iLCJleHAiOjE1ODQ3NDkwMjEsImlhdCI6MTU4NDcyMDIyMX0.8WXSbcynS0w_OdULW1Rzfxn45bwboOA16c2UOv1s-kZI_7YYwIUfmK7spvgWSNg7dJrB3gq42rCIFgogRb-2Kw";

  @Output() statusChange = new EventEmitter<void>();

  secret: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  acceptBooking() {
    this.http
      .get(
        "http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com/tutor/" +
          this.email +
          "/booking/" +
          this.booking.id +
          "/accept",
        {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: this.jwtToken
          })
        }
      )
      .subscribe(
        data => this.statusChange.emit(),
        error => console.log(error)
      );
  }

  rejectBooking() {
    this.http
      .get(
        "http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com/tutor/" +
          this.email +
          "/booking/" +
          this.booking.id +
          "/reject",
        {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: this.jwtToken
          })
        }
      )
      .subscribe(
        data => this.statusChange.emit(),
        error => console.log(error)
      );
  }
}
