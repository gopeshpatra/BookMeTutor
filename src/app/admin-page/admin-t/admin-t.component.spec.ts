import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTComponent } from './admin-t.component';

describe('AdminTComponent', () => {
  let component: AdminTComponent;
  let fixture: ComponentFixture<AdminTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
