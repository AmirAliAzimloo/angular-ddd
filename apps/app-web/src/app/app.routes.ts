import { Route } from '@angular/router';
import { OnlyAuthenticated } from '@angular-ddd/ui-services';

export const appRoutes: Route[] = [
  {
    path: 'protected',
    loadComponent: () => {
      return import('./pages/protected/protected.component').then(
        (m) => m.ProtectedComponent
      );
    },
    canActivate: [OnlyAuthenticated],
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./app.component').then((m) => m.AppComponent);
    },
  },
  { path: '**', redirectTo: '/' },
];
