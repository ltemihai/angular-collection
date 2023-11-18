import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, tap} from 'rxjs';
import {BasketService} from '../services/basket.service';
import {
  addItemToBasket,
  addItemToBasketSuccess,
  checkout,
  checkoutSuccess,
  loadBasket,
  loadBasketSuccess,
  removeItemFromBasket,
  removeItemFromBasketSuccess
} from './basket.actions';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class BasketEffects {
  getBasket$ = createEffect(() => this.actions$.pipe(
      ofType(loadBasket),
      mergeMap(() => this.basketService.getBasket()
        .pipe(
          map(basket => loadBasketSuccess({ items: basket })),
          catchError(() => EMPTY)
        ))
    )
  );

  addItemToBasket$ = createEffect(() => this.actions$.pipe(
      ofType(addItemToBasket),
      mergeMap((action) => this.basketService.addItemToBasket(action.item)
        .pipe(
          tap(() => { this.snackBar.open(`${action.item.name} added to basket`, '', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
          } )}),
          map(item => addItemToBasketSuccess({ item })),
          catchError(() => EMPTY)
        ))
    )
  );

  removeItemFromBasket$ = createEffect(() => this.actions$.pipe(
      ofType(removeItemFromBasket),
      mergeMap((action) => this.basketService.removeItemFromBasket(action.item)
        .pipe(
          tap(() => { this.snackBar.open(`${action.item.name} removed from basket` )}),
          map(item => removeItemFromBasketSuccess({ item })),
          catchError(() => EMPTY)
        ))
    )
  );

  checkoutBasket$ = createEffect(() => this.actions$.pipe(
      ofType(checkout),
      tap(() => { this.snackBar.open('Checkout complete') }),
      map(() => checkoutSuccess() ),
    )
  );

  constructor(
    private actions$: Actions,
    private basketService: BasketService,
    private snackBar: MatSnackBar,
  ) {}
}

