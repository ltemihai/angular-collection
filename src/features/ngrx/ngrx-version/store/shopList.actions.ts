import { createAction, props } from '@ngrx/store';
import { ShopItem } from "./shopList.interface";

export const loadShopItems = createAction('[Item List] Load Items');

export const loadShopItemsSuccess = createAction('[Item List] Load Items Success', props<{
  shopItems: ShopItem[]
}>());
export const loadShopItemsFailure = createAction('[Item List] Load Items Failure', props<{
  error: any
}>());

export const addNewItem = createAction('[Item List] Add New Item', props<{
  shopItem: ShopItem
}>());

export const addNewItemSuccess = createAction('[Item List] Add New Item Success', props<{
  shopItem: ShopItem
}>());


