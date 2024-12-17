import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PlatformFactory } from '@angular-ddd/platform';
import { enableProdMode, PlatformRef } from '@angular/core';

PlatformFactory.platformBrowserDynamic().then(
  async (platformRef: PlatformRef) => {
    if (PlatformFactory.appWebConfig.production) {
      enableProdMode();
      console.log('This is production mode !');
    }

    await bootstrapApplication(AppComponent, appConfig).catch((err) =>
      console.error(err)
    );
  }
).catch(error=>{console.log(error)});
