import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceAddItemFormComponent} from "./service-add-item-form/service-add-item-form.component";
import {ServiceShoppingBasketComponent} from "./service-shopping-basket/service-shopping-basket.component";
import {Observable} from "rxjs";
import {ShopItem} from "../../ngrx-version/store/shopList.interface";
import {ShopListService} from "../services/shop-list.service";
import {BasketService} from "../services/basket.service";
import {ServiceBasketStatusComponent} from "./service-basket-status/service-basket-status.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-service-shop',
  standalone: true,
  imports: [CommonModule, ServiceAddItemFormComponent, ServiceShoppingBasketComponent, ServiceBasketStatusComponent],
  templateUrl: './service-shop.component.html',
  styleUrls: ['./service-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceShopComponent {
  items$: Observable<ShopItem[]>
  isCheckoutOpen$: Observable<boolean>

  constructor(
    private shopListService: ShopListService,
    private basketService: BasketService,
    private snackBar: MatSnackBar
  ) {
    this.items$ = this.shopListService.shopList$;
    this.isCheckoutOpen$ = this.basketService.isCheckoutOpen$;
  }

  addItemToBasket(item: ShopItem) {
    this.basketService.addItemToBasket(item).subscribe({
      next: () => this.snackBar.open(`Added ${item.name} to basket`, 'Close', { duration: 3000 }),
      error: () => this.snackBar.open(`Failed to add ${item.name} to basket`, 'Close', { duration: 3000 })
    }
    );
  }


}
