import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceShopComponent } from './service-shop.component';

describe('ServiceShopComponent', () => {
  let component: ServiceShopComponent;
  let fixture: ComponentFixture<ServiceShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceShopComponent]
    });
    fixture = TestBed.createComponent(ServiceShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
