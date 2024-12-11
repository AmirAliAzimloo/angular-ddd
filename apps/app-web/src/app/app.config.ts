import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { LocalStorageTokenService } from '@angular-ddd/persistence';
import { ErrorInterceptor, ErrorHandlerService, HTTP_INTERCEPTOR_ERROR_HANDLER } from '@angular-ddd/common/http-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: LocalStorageTokenService
     },
     {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTOR_ERROR_HANDLER,
      useClass: ErrorHandlerService,
    },
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    ),
  ],
};
