import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {ShopItem} from "../../ngrx-version/store/shopList.interface";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _basket$ = new BehaviorSubject<ShopItem[]>([]);
  basket$ = this._basket$.asObservable();

  private _totalItems$ = new BehaviorSubject<number>(0);
  totalItems$ = this._totalItems$.asObservable();

  private _totalPrice$ = new BehaviorSubject<number>(0);
  totalPrice$ = this._totalPrice$.asObservable();

  private _isCheckoutOpen$ = new BehaviorSubject<boolean>(false);
  isCheckoutOpen$ = this._isCheckoutOpen$.asObservable();

  constructor() {
    this.getBasket();
  }

  getBasket(): void {
    this._basket$.next([]);
    this._totalItems$.next(0);
    this._totalPrice$.next(0);
    this._isCheckoutOpen$.next(false);
  }

  addItemToBasket(item: ShopItem): Observable<ShopItem> {
    this._basket$.next([...this._basket$.getValue(), item]);
    this.recalculateBasket();
    return of(item)
  }

  removeItemFromBasket(item: ShopItem): Observable<ShopItem> {
    this._basket$.next(this._basket$.getValue().filter(basketItem => basketItem.id !== item.id));
    if (this._basket$.getValue().length === 0) {
      this._isCheckoutOpen$.next(false);
    }
    this.recalculateBasket();
    return of(item);
  }

  toggleCheckout(): Observable<boolean> {
    this._isCheckoutOpen$.next(!this._isCheckoutOpen$.getValue());
    return of(this._isCheckoutOpen$.getValue());
  }

  checkout(): Observable<ShopItem[]> {
    this._basket$.next([]);
    this._totalItems$.next(0);
    this._totalPrice$.next(0);
    this._isCheckoutOpen$.next(false);
    return of(this._basket$.getValue());
  }

  private recalculateBasket(): void {
    this._totalItems$.next(this._basket$.getValue().length);
    this._totalPrice$.next(this._basket$.getValue().reduce((acc, item) => acc + item.price, 0));
  }

}
