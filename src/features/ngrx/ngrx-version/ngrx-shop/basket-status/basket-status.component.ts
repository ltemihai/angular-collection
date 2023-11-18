import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {ShopState} from "../../store/shop.store";
import {loadBasket, openCheckout} from "../../store/basket.actions";
import {selectBasketTotalItems} from "../../store/basket.selectors";
import {Observable} from "rxjs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-basket-status',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './basket-status.component.html',
  styleUrls: ['./basket-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketStatusComponent {

  basketTotalItems$: Observable<number>;
  constructor(private store: Store<ShopState>) {
    this.store.dispatch(loadBasket())

    this.basketTotalItems$ = this.store.select(selectBasketTotalItems)
  }

  openCheckout() {
    this.store.dispatch(openCheckout())
  }
}
