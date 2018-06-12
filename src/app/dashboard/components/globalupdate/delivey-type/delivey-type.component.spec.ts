import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveyTypeComponent } from './delivey-type.component';

describe('DeliveyTypeComponent', () => {
  let component: DeliveyTypeComponent;
  let fixture: ComponentFixture<DeliveyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
