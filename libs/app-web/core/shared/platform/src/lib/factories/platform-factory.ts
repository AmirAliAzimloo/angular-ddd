// way 1 =>

import { environment } from "@angular-ddd/environments";
import { Injectable, InjectionToken, PlatformRef, StaticProvider } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// import { Injectable } from '@angular/core';
// import { environment } from "@angular-ddd/environments";

// @Injectable({
//   providedIn: 'root'  
// })
// export class PlatformFactory {
//   private static apiUrl: string;

//   static getApiUrl(): string {
//     if (!this.apiUrl) {
//       this.loadApiUrl();
//     }
//     return this.apiUrl;
//   }

//   private static loadApiUrl(): void {
//     if (!environment.apiUrl) {
//       throw new Error('API URL is not defined in the environment file.');
//     }
//     this.apiUrl = environment.apiUrl;
//   }
// }


// way 2 =>

export class CommonAppConfig{
  readonly name!:string;
  readonly production!:boolean;
  readonly api_base!:string;
}

export class AppWebConfig extends CommonAppConfig {
  readonly app_default_subdomain!: string;
}

export const APP_WEB_CONFIG = new InjectionToken<AppWebConfig>('app_web_config');

export const COMMON_APP_CONFIG = new InjectionToken<CommonAppConfig>('common_app_config');


@Injectable({providedIn:"root"})
export class PlatformFactory{
  private static appWebConfiguration: AppWebConfig;
  private static commonAppConfiguration: CommonAppConfig;

  static get appWebConfig():AppWebConfig{
    return this.appWebConfiguration;
  }

  static get commonAppConfig():CommonAppConfig{
    return this.commonAppConfiguration;
  }

  static async loadAppConfig():Promise<void>{

    //TODO: Implement EnvironmentHelper to handel production mode.

    const developmentConfigPath = '/assets/app-config/config.development.json';
    const configPath = developmentConfigPath;

    

    try {
      const response: Response = await fetch(configPath);

      const appWebConfig:AppWebConfig = await response.json();


      this.setAppConfiguration(appWebConfig);

    } catch (error) {
      //TODO: Implement EnvironmentHelper to do this only for localhost
    }

  }

  static async platformBrowserDynamic(): Promise<PlatformRef> {
    const extraProviders: StaticProvider[] = await this.createAppConfigProviders();

    return platformBrowserDynamic(extraProviders);
  }

  private static async createAppConfigProviders(): Promise<StaticProvider[]> {
    await this.loadAppConfig();

    return [
      {provide: COMMON_APP_CONFIG, useValue: this.commonAppConfig},
      {provide: APP_WEB_CONFIG, useValue: this.appWebConfiguration}
    ];
  }

  private static setAppConfiguration(appWebConfig: AppWebConfig): void {
    this.appWebConfiguration = appWebConfig;
    this.commonAppConfiguration={
      name: this.appWebConfiguration.name,
      production: this.appWebConfiguration.production,
      api_base: this.appWebConfiguration.api_base,
    }
  }

  static getApiUrl(){
    return environment.apiUrl;
  }

}