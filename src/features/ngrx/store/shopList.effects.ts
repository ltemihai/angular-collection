import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {addNewItem, addNewItemSuccess, loadShopItems, loadShopItemsSuccess} from './shopList.actions';
import {ShopService} from "../services/shop.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class ShopListEffects {

  loadShopItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadShopItems),
    mergeMap(() => this.shopService.getAll()
      .pipe(
        map(shopItems => {
          return loadShopItemsSuccess({ shopItems: shopItems })
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  addNewItem$ = createEffect(() => this.actions$.pipe(
      ofType(addNewItem),
      mergeMap((action) => this.shopService.addNewItem(action.shopItem)
        .pipe(
          tap(() => {
              this.snackBar.open('Item added to shop', '', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
              })
            }
          ),
          map(item => {
            return addNewItemSuccess({ shopItem: item })
          }),
          catchError(() => EMPTY)
        ))
    )
  );


  constructor(
    private actions$: Actions,
    private shopService: ShopService,
    private snackBar: MatSnackBar,
  ) {}
}
