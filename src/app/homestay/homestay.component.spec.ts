import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayComponent } from './homestay.component';

describe('HomestayComponent', () => {
  let component: HomestayComponent;
  let fixture: ComponentFixture<HomestayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomestayComponent]
    });
    fixture = TestBed.createComponent(HomestayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
