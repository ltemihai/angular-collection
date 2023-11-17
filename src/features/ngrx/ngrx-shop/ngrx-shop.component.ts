import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {loadShopItems} from "../store/shopList.actions";
import {Observable} from "rxjs";
import {selectShopItems} from "../store/shopList.selectors";
import {ReactiveFormsModule} from "@angular/forms";
import {ShopItem} from "../store/shopList.interface";
import {ShopState} from "../store/shop.store";
import {addItemToBasket} from "../store/basket.actions";
import {BasketStatusComponent} from "./basket-status/basket-status.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AddItemFormComponent} from "./add-item-form/add-item-form.component";
import {ShoppingBasketComponent} from "./shopping-basket/shopping-basket.component";
import {selectBasketCheckoutOpen} from "../store/basket.selectors";

@Component({
  selector: 'app-ngrx-shop',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasketStatusComponent,
    MatInputModule,
    MatButtonModule,
    AddItemFormComponent,
    ShoppingBasketComponent,
  ],
  templateUrl: './ngrx-shop.component.html',
  styleUrls: ['./ngrx-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgrxShopComponent {
  items$: Observable<ShopItem[]>
  isCheckoutOpen$: Observable<boolean>

  constructor(private store: Store<ShopState>) {
    this.store.dispatch(loadShopItems())

    this.items$ = this.store.select(selectShopItems)
    this.isCheckoutOpen$ = this.store.select(selectBasketCheckoutOpen)

  }

  addItemToBasket(item: ShopItem) {
    this.store.dispatch(addItemToBasket({ item }))
  }
}
