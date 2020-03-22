// tslint:disable: quotemark
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { BookingResponse } from "src/app/Response/bookingResponse";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tutor-page",
  templateUrl: "./tutor-page.component.html",
  styleUrls: ["./tutor-page.component.css"]
})
export class TutorPageComponent implements OnInit {
  availableBookings: BookingResponse[] = [];
  acceptedBookings: BookingResponse[] = [];

  email = "komohoj972@provamail.com";

  jwtToken =
    // tslint:disable-next-line: max-line-length
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb21vaG9qOTcyQHByb3ZhbWFpbC5jb20iLCJleHAiOjE1ODQ3NDkwMjEsImlhdCI6MTU4NDcyMDIyMX0.8WXSbcynS0w_OdULW1Rzfxn45bwboOA16c2UOv1s-kZI_7YYwIUfmK7spvgWSNg7dJrB3gq42rCIFgogRb-2Kw";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  reloadData() {
    this.loadData();
  }

  private loadData() {
    this.http
      .get(
        "http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com/tutor/" +
          this.email +
          "/booking",
        {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: this.jwtToken
          })
        }
      )
      .subscribe(
        (bookings: BookingResponse[]) => {
          this.availableBookings = Object.assign([]);
          this.acceptedBookings = Object.assign([]);
          for (const booking of bookings) {
            if (booking.status === "not assigned") {
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
