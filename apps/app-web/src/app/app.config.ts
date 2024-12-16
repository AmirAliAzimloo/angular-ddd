import { ApplicationConfig, enableProdMode, isDevMode, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { appReducer, LocalStorageTokenService } from '@angular-ddd/persistence';
import { ErrorInterceptor, ErrorHandlerService, HTTP_INTERCEPTOR_ERROR_HANDLER } from '@angular-ddd/common/http-interceptor';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { APP_WEB_CONFIG, COMMON_APP_CONFIG, PlatformFactory } from '@angular-ddd/platform';


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAppInitializer(async()=>{

      await PlatformFactory.loadAppConfig();
      
      if(PlatformFactory.appWebConfig){
        console.log(PlatformFactory.appWebConfig,'log_00')
      }

    }
  
  ),
    {
      provide: APP_WEB_CONFIG,
      useFactory: () => PlatformFactory.appWebConfig, // Return the loaded appWebConfig
    },
    {
      provide: COMMON_APP_CONFIG,
      useFactory: () => PlatformFactory.commonAppConfig, // Return the loaded commonAppConfig
    },
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
    provideStore(appReducer),
    provideStoreDevtools(
      {
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode(), // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        connectInZone: true // If set to true, the connection is established within the Angular zone
      }
    )
  ],
};
