import {bootstrapApplication} from '@angular/platform-browser'
import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from "./app/app.component";
import {EffectsModule} from "@ngrx/effects";
import {ShopListEffects} from "./features/ngrx/store/shopList.effects";
import {StoreModule} from "@ngrx/store";
import {shopItemsReducer} from "./features/ngrx/store/shopList.reducer";
import {importProvidersFrom} from "@angular/core";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {basketItemsReducer} from "./features/ngrx/store/basket.reducers";
import {BasketEffects} from "./features/ngrx/store/basket.effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/pages.component').then(c => c.PagesComponent) },
  { path: 'factory-async', loadComponent: () => import('./patterns/factory-async/parser-page/parser-page.component').then(c => c.ParserPageComponent) },
  { path: 'signals', loadComponent: () => import ('./features/signals/parking-lot/parking-lot.component').then(c => c.ParkingLotComponent) },
  { path: 'ngrx', loadComponent: () => import ('./features/ngrx/ngrx-shop/ngrx-shop.component').then(c => c.NgrxShopComponent) }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 2500,
    }},
    importProvidersFrom(
      BrowserAnimationsModule,
      MatSnackBarModule,

      StoreModule.forRoot({}),
      StoreModule.forFeature('shop', shopItemsReducer),
      StoreModule.forFeature('basket', basketItemsReducer),
      EffectsModule.forRoot([]),
      EffectsModule.forFeature(ShopListEffects),
      EffectsModule.forFeature(BasketEffects),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: false, // Restrict extension to log-only mode
      }),
    )
  ]
})
