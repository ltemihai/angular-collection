import {ShopListState} from "./shopList.interface";
import {BasketState} from "./basket.interface";

export interface ShopState {
  shop: ShopListState,
  basket: BasketState
}
