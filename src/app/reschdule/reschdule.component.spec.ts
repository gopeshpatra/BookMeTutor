import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschduleComponent } from './reschdule.component';

describe('ReschduleComponent', () => {
  let component: ReschduleComponent;
  let fixture: ComponentFixture<ReschduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReschduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReschduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
