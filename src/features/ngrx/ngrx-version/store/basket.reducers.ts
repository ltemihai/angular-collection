import {createReducer, on} from "@ngrx/store";
import {BasketState, BasketStateKeys} from "./basket.interface";
import {
  addItemToBasketSuccess,
  checkout,
  loadBasketSuccess,
  openCheckout,
  removeItemFromBasketSuccess
} from "./basket.actions";

const initialState: BasketState = {
  [BasketStateKeys.BASKET_ITEMS]: [],
  [BasketStateKeys.BASKET_TOTAL_PRICE]: 0,
  [BasketStateKeys.BASKET_COUNT]: 0,
  [BasketStateKeys.BASKET_CHECKOUT_OPEN]: false
}

export const basketItemsReducer = createReducer(
  initialState,
  on(loadBasketSuccess, state => state),

  on(addItemToBasketSuccess, (state, { item }) => {
    const items = [...state[BasketStateKeys.BASKET_ITEMS], item];
    return {
      ...state,
      [BasketStateKeys.BASKET_ITEMS]: items,
      [BasketStateKeys.BASKET_TOTAL_PRICE]: items.reduce((acc, item) => acc + item.price, 0),
      [BasketStateKeys.BASKET_COUNT]: items.length
    }
  }),

  on(removeItemFromBasketSuccess, (state, { item }) => {
    const items = state[BasketStateKeys.BASKET_ITEMS].filter(i => i.id !== item.id);
    return {
      [BasketStateKeys.BASKET_ITEMS]: items,
      [BasketStateKeys.BASKET_TOTAL_PRICE]: items.reduce((acc, item) => acc + item.price, 0),
      [BasketStateKeys.BASKET_COUNT]: items.length,
      [BasketStateKeys.BASKET_CHECKOUT_OPEN]: state[BasketStateKeys.BASKET_CHECKOUT_OPEN] && items.length === 0 ? false : state[BasketStateKeys.BASKET_CHECKOUT_OPEN]
    }
  }),

  on(openCheckout, (state, {}) => {
    return {
      ...state,
      [BasketStateKeys.BASKET_CHECKOUT_OPEN]: !state[BasketStateKeys.BASKET_CHECKOUT_OPEN]
    }
  }),

  on(checkout, (state, {}) => {
    return {
      ...state,
      [BasketStateKeys.BASKET_ITEMS]: [],
      [BasketStateKeys.BASKET_TOTAL_PRICE]: 0,
      [BasketStateKeys.BASKET_COUNT]: 0,
      [BasketStateKeys.BASKET_CHECKOUT_OPEN]: false
    }
  })


);
