import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLotComponent } from './car-lot.component';

describe('CarLotComponent', () => {
  let component: CarLotComponent;
  let fixture: ComponentFixture<CarLotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarLotComponent]
    });
    fixture = TestBed.createComponent(CarLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
