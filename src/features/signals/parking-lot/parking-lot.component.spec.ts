import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotComponent } from './parking-lot.component';

describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  let fixture: ComponentFixture<ParkingLotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParkingLotComponent]
    });
    fixture = TestBed.createComponent(ParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
