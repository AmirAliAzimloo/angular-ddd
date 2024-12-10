import { Injectable } from '@angular/core';
import { environment } from "@angular-ddd/environments";

@Injectable({
  providedIn: 'root'  
})
export class PlatformFactory {
  private static apiUrl: string;

  static getApiUrl(): string {
    if (!this.apiUrl) {
      this.loadApiUrl();
    }
    return this.apiUrl;
  }

  private static loadApiUrl(): void {
    if (!environment.apiUrl) {
      throw new Error('API URL is not defined in the environment file.');
    }
    this.apiUrl = environment.apiUrl;
  }
}
