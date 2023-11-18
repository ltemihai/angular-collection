import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddItemFormComponent } from './service-add-item-form.component';

describe('ServiceAddItemFormComponent', () => {
  let component: ServiceAddItemFormComponent;
  let fixture: ComponentFixture<ServiceAddItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceAddItemFormComponent]
    });
    fixture = TestBed.createComponent(ServiceAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
