import { Route } from '@angular/router';
import { OnlyAuthenticated } from '@angular-ddd/ui-services';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => {
      return import('./pages/home/home.component').then(
        (m) => m.HomeComponent
      );
    },
    canActivate: [OnlyAuthenticated],
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./app.component').then((m) => m.AppComponent);
    }
  },
  { path: '**', redirectTo: '/' },
];
