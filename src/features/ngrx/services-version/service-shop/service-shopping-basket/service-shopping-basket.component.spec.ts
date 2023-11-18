import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceShoppingBasketComponent } from './service-shopping-basket.component';

describe('ServiceShoppingBasketComponent', () => {
  let component: ServiceShoppingBasketComponent;
  let fixture: ComponentFixture<ServiceShoppingBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceShoppingBasketComponent]
    });
    fixture = TestBed.createComponent(ServiceShoppingBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
