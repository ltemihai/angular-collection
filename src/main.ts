import {bootstrapApplication} from '@angular/platform-browser'
import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from "./app/app.component";
import {provideEffects} from "@ngrx/effects";
import {ShopListEffects} from "./features/ngrx/ngrx-version/store/shopList.effects";
import {provideStore} from "@ngrx/store";
import {shopItemsReducer} from "./features/ngrx/ngrx-version/store/shopList.reducer";
import {importProvidersFrom, isDevMode} from "@angular/core";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {basketItemsReducer} from "./features/ngrx/ngrx-version/store/basket.reducers";
import {BasketEffects} from "./features/ngrx/ngrx-version/store/basket.effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import { provideServiceWorker } from '@angular/service-worker';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/pages.component').then(c => c.PagesComponent) },
  { path: 'factory-async', loadComponent: () => import('./patterns/factory-async/parser-page/parser-page.component').then(c => c.ParserPageComponent) },
  { path: 'signals', loadComponent: () => import ('./features/signals/parking-lot/parking-lot.component').then(c => c.ParkingLotComponent) },
  { path: 'ngrx', loadComponent: () => import ('./features/ngrx/page/page.component').then(c => c.ShopPageComponent) },
  { path: 'offline', loadComponent: () => import('./features/offline-functionality/books/books.component').then(c => c.BooksComponent)}
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
            duration: 2500,
        } },
    importProvidersFrom(BrowserAnimationsModule, MatSnackBarModule),
    provideStore({
        shop: shopItemsReducer,
        basket: basketItemsReducer,
    }),
    provideEffects([ShopListEffects, BasketEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false, connectInZone: true }),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
]
})
