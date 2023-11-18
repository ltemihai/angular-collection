import {ShopItem} from "./shopList.interface";

export interface BasketState {
  [BasketStateKeys.BASKET_ITEMS]: ShopItem[];
  [BasketStateKeys.BASKET_TOTAL_PRICE]: number;
  [BasketStateKeys.BASKET_COUNT]: number;
  [BasketStateKeys.BASKET_CHECKOUT_OPEN]: boolean;
}

export enum BasketStateKeys {
  BASKET_ITEMS = 'basketItems',
  BASKET_TOTAL_PRICE = 'basketTotal',
  BASKET_COUNT = 'basketCount',
  BASKET_CHECKOUT_OPEN = 'checkoutOpen'
}

