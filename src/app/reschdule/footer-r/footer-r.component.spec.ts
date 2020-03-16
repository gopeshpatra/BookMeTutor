import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRComponent } from './footer-r.component';

describe('FooterRComponent', () => {
  let component: FooterRComponent;
  let fixture: ComponentFixture<FooterRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
