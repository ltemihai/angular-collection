import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgrxShopComponent} from "./ngrx-shop.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {ShopItem, ShopStateKeys} from "../store/shopList.interface";
import {ShopState} from "../store/shop.store";
import {BasketStateKeys} from "../store/basket.interface";
import {selectShopItems} from "../store/shopList.selectors";
import {selectBasketItems} from "../store/basket.selectors";

fdescribe('NgrxShop', () => {
  let component: NgrxShopComponent;
  let fixture: ComponentFixture<NgrxShopComponent>;
  let mockStore: MockStore;

  beforeEach(() => {

    const initialState: ShopState = {
      shop: {
        [ShopStateKeys.SHOP_ITEMS]: []
      },
      basket: {
        [BasketStateKeys.BASKET_ITEMS]: [],
        [BasketStateKeys.BASKET_TOTAL_PRICE]: 0,
        [BasketStateKeys.BASKET_COUNT]: 0,
        [BasketStateKeys.BASKET_CHECKOUT_OPEN]: false
      }
    }

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        NgrxShopComponent,
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    });
    fixture = TestBed.createComponent(NgrxShopComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch items from store', (done) => {
    const mockItems: ShopItem[] = [
      { id: 1, name: 'Item 1', price: 100, description: 'Test 1' },
      { id: 2, name: 'Item 2', price: 100, description: 'Test 2' },
    ]
    mockStore.overrideSelector(selectShopItems, mockItems);
    mockStore.overrideSelector(selectBasketItems, [])
    // mockStore.setState(
    //   {
    //     shop: {
    //       [ShopStateKeys.SHOP_ITEMS]: mockItems
    //     },
    //     basket: {
    //       [BasketStateKeys.BASKET_ITEMS]: [],
    //       [BasketStateKeys.BASKET_TOTAL_PRICE]: 0,
    //       [BasketStateKeys.BASKET_COUNT]: 0,
    //       [BasketStateKeys.BASKET_CHECKOUT_OPEN]: false
    //     }
    //   }
    // );

    fixture.detectChanges();

    component.items$.subscribe(items => {
      expect(items).toEqual(mockItems);
      done();
    })

  })
});
