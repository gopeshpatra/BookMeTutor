import { Component, OnInit, Input } from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';

@Component({
  selector: 'app-bookingcard',
  templateUrl: './bookingcard.component.html',
  styleUrls: ['./bookingcard.component.css']
})
export class BookingcardComponent implements OnInit {

  @Input() booking:BookingResponse[];
  constructor() { }

  ngOnInit() {
  }

}
