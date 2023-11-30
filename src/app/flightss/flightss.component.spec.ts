import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightssComponent } from './flightss.component';

describe('FlightssComponent', () => {
  let component: FlightssComponent;
  let fixture: ComponentFixture<FlightssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightssComponent]
    });
    fixture = TestBed.createComponent(FlightssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
