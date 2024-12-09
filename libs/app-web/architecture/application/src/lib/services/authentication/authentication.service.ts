import { Injectable } from '@angular/core';

import { LoginOTPCommand } from '../../use-cases/authentication/commands/login-otp.command';
import { VerifyOTPCommand } from '../../use-cases/authentication/commands/verify-otp.command';
import { RemoveAuthTokenCommand } from '../../use-cases/authentication/commands/remove-auth-token.command';
import { LogoutCommand } from '../../use-cases/authentication/commands/logout.command';

import { GetRefreshTokenCommand } from '../../use-cases/authentication/queries/get-refresh-token.query';
import { GetMeCommand } from '../../use-cases/authentication/queries/get-me.query';
import { AuthenticationProvider } from '../../abstractions';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private loginOTPCommand: LoginOTPCommand,
    private verifyOTPCommand: VerifyOTPCommand,
    private getRefreshTokenCommand: GetRefreshTokenCommand,
    private removeAuthTokenCommand: RemoveAuthTokenCommand,
    private logoutCommand: LogoutCommand,
    private getMeCommand: GetMeCommand
  ) {}

  loginOTP() {
    return this.loginOTPCommand.execute();
  }

  verifyOTP() {
    return this.verifyOTPCommand.execute();
  }

  getRefreshToken() {
    return this.getRefreshTokenCommand.execute();
  }

  removeAuthToken() {
    return this.removeAuthTokenCommand.execute();
  }

  logout() {
    return this.logoutCommand.execute();
  }

  getMe() {
    return this.getMeCommand.execute();
  }
}
