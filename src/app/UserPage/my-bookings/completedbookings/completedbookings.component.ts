import { Component, OnInit, Input } from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';

@Component({
  selector: 'app-completedbookings',
  templateUrl: './completedbookings.component.html',
  styleUrls: ['./completedbookings.component.css']
})
export class CompletedbookingsComponent implements OnInit {
 
  panelOpenState = false;

  @Input() booking:BookingResponse
  constructor() { }

  ngOnInit() {
  }

}
