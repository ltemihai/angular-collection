import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgrxShopComponent} from "../ngrx-version/ngrx-shop/ngrx-shop.component";
import {ServiceShopComponent} from "../services-version/service-shop/service-shop.component";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, NgrxShopComponent, ServiceShopComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopPageComponent {

}
