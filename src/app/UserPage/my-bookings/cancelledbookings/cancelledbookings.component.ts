import { Component, OnInit, Input } from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';

@Component({
  selector: 'app-cancelledbookings',
  templateUrl: './cancelledbookings.component.html',
  styleUrls: ['./cancelledbookings.component.css']
})
export class CancelledbookingsComponent implements OnInit {
  panelOpenState = false;

  @Input() booking:BookingResponse

  
  constructor() { }

  ngOnInit() {
  }

}
