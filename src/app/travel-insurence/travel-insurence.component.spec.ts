import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInsurenceComponent } from './travel-insurence.component';

describe('TravelInsurenceComponent', () => {
  let component: TravelInsurenceComponent;
  let fixture: ComponentFixture<TravelInsurenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelInsurenceComponent]
    });
    fixture = TestBed.createComponent(TravelInsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
