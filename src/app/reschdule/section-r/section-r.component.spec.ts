import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRComponent } from './section-r.component';

describe('SectionRComponent', () => {
  let component: SectionRComponent;
  let fixture: ComponentFixture<SectionRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
