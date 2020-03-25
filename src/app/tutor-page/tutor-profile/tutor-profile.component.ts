import { Component, OnInit } from '@angular/core';
import { TutorDetails } from '../classes/tutorDetails';
import { BookingService } from 'src/app/userpage/BookingService';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {

  tutordetails:TutorDetails
 

  constructor(private bookingservice: BookingService) { }

  ngOnInit() {
    this.bookingservice.getTutorDetails().subscribe
    (
      data=>
      {this.tutordetails=data}
    )

}
}
