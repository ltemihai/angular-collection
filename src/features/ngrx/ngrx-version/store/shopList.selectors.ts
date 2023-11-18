import {createSelector} from '@ngrx/store';
import {ShopStateKeys} from "./shopList.interface";
import {ShopState} from "./shop.store";

export const selectShopState = (state: ShopState) => state.shop;
export const selectShopItems = createSelector(
  selectShopState,
  (shop) => shop[ShopStateKeys.SHOP_ITEMS]
);

