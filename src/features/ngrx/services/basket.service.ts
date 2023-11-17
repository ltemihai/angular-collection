import { Injectable } from '@angular/core';
import {ShopItem} from "../store/shopList.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  getBasket(): Observable<ShopItem[]> {
    return of([]);
  }

  addItemToBasket(item: ShopItem): Observable<ShopItem> {
    return of(item);
  }

  removeItemFromBasket(item: ShopItem): Observable<ShopItem> {
    return of(item);
  }
}
