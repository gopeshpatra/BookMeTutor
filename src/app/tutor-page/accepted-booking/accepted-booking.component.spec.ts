import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedBookingComponent } from './accepted-booking.component';

describe('AcceptedBookingComponent', () => {
  let component: AcceptedBookingComponent;
  let fixture: ComponentFixture<AcceptedBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
