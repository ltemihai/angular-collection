import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBasketStatusComponent } from './service-basket-status.component';

describe('ServiceBasketStatusComponent', () => {
  let component: ServiceBasketStatusComponent;
  let fixture: ComponentFixture<ServiceBasketStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceBasketStatusComponent]
    });
    fixture = TestBed.createComponent(ServiceBasketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
