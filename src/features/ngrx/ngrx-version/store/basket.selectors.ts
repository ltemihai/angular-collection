import {ShopState} from "./shop.store";
import {createSelector} from "@ngrx/store";
import {BasketStateKeys} from "./basket.interface";

export const selectBasketState = (state: ShopState) => state.basket;
export const selectBasketItems = createSelector(
  selectBasketState,
  (basket) => basket[BasketStateKeys.BASKET_ITEMS]
);

export const selectBasketTotalPrice = createSelector(
  selectBasketState,
  (basket) => basket[BasketStateKeys.BASKET_TOTAL_PRICE]
);

export const selectBasketTotalItems = createSelector(
  selectBasketState,
  (basket) => basket[BasketStateKeys.BASKET_COUNT]
);

export const selectBasketCheckoutOpen = createSelector(
  selectBasketState,
  (basket) => basket[BasketStateKeys.BASKET_CHECKOUT_OPEN]
);
