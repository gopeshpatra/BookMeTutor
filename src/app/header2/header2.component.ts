import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../Auth/authenticate.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private authenticationService:AuthenticateService) { }

  ngOnInit() {
  }

}
