import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayIndicatorComponent } from './holiday-indicator.component';

describe('HolidayIndicatorComponent', () => {
  let component: HolidayIndicatorComponent;
  let fixture: ComponentFixture<HolidayIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
