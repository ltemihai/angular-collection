import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddItemFormComponent} from "../../../ngrx-version/ngrx-shop/add-item-form/add-item-form.component";
import {BasketStatusComponent} from "../../../ngrx-version/ngrx-shop/basket-status/basket-status.component";
import {ShoppingBasketComponent} from "../../../ngrx-version/ngrx-shop/shopping-basket/shopping-basket.component";
import {ServiceAddItemFormComponent} from "../service-add-item-form/service-add-item-form.component";
import {MatButtonModule} from "@angular/material/button";
import {Observable} from "rxjs";
import {ShopItem} from "../../../ngrx-version/store/shopList.interface";
import {BasketService} from "../../services/basket.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-service-shopping-basket',
  standalone: true,
  imports: [CommonModule, AddItemFormComponent, BasketStatusComponent, ShoppingBasketComponent, ServiceAddItemFormComponent, MatButtonModule],
  templateUrl: './service-shopping-basket.component.html',
  styleUrls: ['./service-shopping-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceShoppingBasketComponent {

  basketItems$: Observable<ShopItem[]>;
  basketTotalItems$: Observable<number>;
  basketTotalPrice$: Observable<number>;

  constructor(private basketService: BasketService, private snackBar: MatSnackBar) {
    this.basketItems$ = this.basketService.basket$;
    this.basketTotalItems$ = this.basketService.totalItems$;
    this.basketTotalPrice$ = this.basketService.totalPrice$;
  }

  removeFromBasket(item: any) {
    this.basketService.removeItemFromBasket(item).subscribe({
      next: () => this.snackBar.open(`Removed ${item.name} from basket`, 'Close', { duration: 3000 }),
      error: () => this.snackBar.open(`Failed to remove ${item.name} from basket`, 'Close', { duration: 3000 })
    });
  }

  checkoutBasket() {
    this.basketService.checkout().subscribe({
      next: () => this.snackBar.open(`Checked out basket`, 'Close', { duration: 3000 }),
      error: () => this.snackBar.open(`Failed to checkout basket`, 'Close', { duration: 3000 })
    });
  }
}
