import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransWaveComponent } from './trans-wave.component';

describe('TransWaveComponent', () => {
  let component: TransWaveComponent;
  let fixture: ComponentFixture<TransWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
