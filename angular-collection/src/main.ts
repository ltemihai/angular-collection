import { bootstrapApplication } from '@angular/platform-browser'
import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from "./app/app.component";

export const routes: Routes = [
  { path: 'factory-async', loadComponent: () => import('./patterns/factory-async/parser-page/parser-page.component').then(c => c.ParserPageComponent) }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
})
