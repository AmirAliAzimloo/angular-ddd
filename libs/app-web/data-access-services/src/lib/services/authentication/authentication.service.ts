import { Injectable } from '@angular/core';
import { AuthenticationService } from '@angular-ddd/application';
import { LocalStorageTokenService } from '@angular-ddd/persistence';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceClient {
  private isUserAuthenticated: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private localStorageTokenService: LocalStorageTokenService
  ) {
    this.authenticationService
      .getMe()
      .then(() => {
        this.isUserAuthenticated = true;
      })
      .catch(() => {
        this.isUserAuthenticated = false;
        this.localStorageTokenService.removeToken();
      });
  }

  isAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }
}
