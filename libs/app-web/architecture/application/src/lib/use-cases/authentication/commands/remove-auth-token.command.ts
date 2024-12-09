import { Injectable } from '@angular/core';
import { AuthenticationProvider } from '../../../abstractions/authentication/authentication-provider.abstract';

@Injectable({
  providedIn: 'root',
})
export class RemoveAuthTokenCommand {
  constructor(private authenticationProvider: AuthenticationProvider) {}

  async execute(): Promise<void> {
    await this.authenticationProvider.removeAuthToken();
  }
}
