import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Observable} from "rxjs";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-service-basket-status',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './service-basket-status.component.html',
  styleUrls: ['./service-basket-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceBasketStatusComponent {

  basketTotalItems$: Observable<number>;

  constructor(private basketService: BasketService) {
    this.basketTotalItems$ = this.basketService.totalItems$;
  }

  openCheckout() {
    this.basketService.toggleCheckout().subscribe((_) => {});
  }
}
