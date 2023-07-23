import { bootstrapApplication } from '@angular/platform-browser'
import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from "./app/app.component";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/pages.component').then(c => c.PagesComponent) },
  { path: 'factory-async', loadComponent: () => import('./patterns/factory-async/parser-page/parser-page.component').then(c => c.ParserPageComponent) },
  { path: 'signals', loadComponent: () => import ('./features/signals/parking-lot/parking-lot.component').then(c => c.ParkingLotComponent) }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
})
