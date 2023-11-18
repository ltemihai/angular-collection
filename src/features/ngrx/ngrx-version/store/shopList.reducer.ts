import { createReducer, on } from '@ngrx/store';
import {ShopListState, ShopStateKeys} from "./shopList.interface";
import {addNewItem, addNewItemSuccess, loadShopItems, loadShopItemsFailure, loadShopItemsSuccess} from "./shopList.actions";

export const initialState: ShopListState = {
  [ShopStateKeys.SHOP_ITEMS]: []
};

export const shopItemsReducer = createReducer(
  initialState,
  on(loadShopItems, state => state),
  on(loadShopItemsSuccess, (state, { shopItems }) => ({ ...state, shopItems: shopItems })),
  on(loadShopItemsFailure, (state, { error }) => ({ ...state, error })),

  on(addNewItem, state => state),
  on(addNewItemSuccess, (state, { shopItem }) => ({
    ...state,
    [ShopStateKeys.SHOP_ITEMS]: [...state[ShopStateKeys.SHOP_ITEMS], shopItem]
  })),

);
