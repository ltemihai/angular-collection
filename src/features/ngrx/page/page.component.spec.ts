import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ShopPageComponent} from "./page.component";

describe('PageComponent', () => {
  let component: ShopPageComponent;
  let fixture: ComponentFixture<ShopPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShopPageComponent]
    });
    fixture = TestBed.createComponent(ShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
