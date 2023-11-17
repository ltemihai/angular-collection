import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopState} from "../../store/shop.store";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ShopItem} from "../../store/shopList.interface";
import {selectBasketItems, selectBasketTotalItems, selectBasketTotalPrice} from "../../store/basket.selectors";
import {checkout, loadBasket, removeItemFromBasket} from "../../store/basket.actions";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-shopping-basket',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingBasketComponent {

    basketItems$: Observable<ShopItem[]>;
    basketTotalItems$: Observable<number>;
    basketTotalPrice$: Observable<number>;

    constructor(private store: Store<ShopState>) {
      this.store.dispatch(loadBasket());

      this.basketItems$ = this.store.select(selectBasketItems);
      this.basketTotalItems$ = this.store.select(selectBasketTotalItems);
      this.basketTotalPrice$ = this.store.select(selectBasketTotalPrice);
    }

  removeFromBasket(item: ShopItem) {
    this.store.dispatch(removeItemFromBasket({ item }))
  }

  checkoutBasket() {
    this.store.dispatch(checkout())
  }
}
