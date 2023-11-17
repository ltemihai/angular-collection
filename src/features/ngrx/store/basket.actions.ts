import {createAction, props} from "@ngrx/store";
import {ShopItem} from "./shopList.interface";

export const loadBasket = createAction('[Basket] Load Basket');
export const loadBasketSuccess = createAction('[Basket] Load Basket Success', props<{
  items: ShopItem[]
}>());
export const addItemToBasket = createAction('[Basket] Add Item to basket', props<{
  item: ShopItem
}>());
export const addItemToBasketSuccess = createAction('[Basket] Add Item to basket Success', props<{
  item: ShopItem
}>());

export const removeItemFromBasket = createAction('[Basket] Remove Item from basket', props<{
  item: ShopItem
}>());

export const removeItemFromBasketSuccess = createAction('[Basket] Remove Item from basket Success', props<{
  item: ShopItem
}>());

export const openCheckout = createAction('[Basket] Open Checkout');

export const checkout = createAction('[Basket] Checkout');
export const checkoutSuccess = createAction('[Basket] Checkout Success');
