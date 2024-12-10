import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginOTPCommand } from '../../use-cases/authentication/commands/login/login-otp.command';
import { LoginOTPCommandHandler } from '../../use-cases/authentication/commands/login/login-otp.command-handler';

import { LogoutCommand } from '../../use-cases/authentication/commands/logout/logout.command';
import { LogoutCommandHandler } from '../../use-cases/authentication/commands/logout/logout.command-handler';


import { VerifyOTPCommand } from '../../use-cases/authentication/commands/verify/verify-otp.command';
import { VerifyOTPCommandHandler } from '../../use-cases/authentication/commands/verify/verify-otp.command-handler';

import { RemoveAuthTokenCommand } from '../../use-cases/authentication/commands/remove-auth-token/remove-auth-token.command';
import { RemoveAuthTokenCommandHandler } from '../../use-cases/authentication/commands/remove-auth-token/remove-auth-token.command-handler';

import { GetMeCommand } from '../../use-cases/authentication/queries/get-me/get-me.query'
import { GetMeCommandHandler } from '../../use-cases/authentication/queries/get-me/get-me.query-handler'

import { GetRefreshTokenCommand } from '../../use-cases/authentication/queries/get-refresh-token/get-refresh-token.query';
import { GetRefreshTokenCommandHandler } from '../../use-cases/authentication/queries/get-refresh-token/get-refresh-token.query-handler';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private loginOTPCommandHandler: LoginOTPCommandHandler,
    private logoutCommandHandler: LogoutCommandHandler,
    private verifyOTPCommandHandler: VerifyOTPCommandHandler,
    private removeAuthTokenCommandHandler: RemoveAuthTokenCommandHandler,
    private getMeCommandHandler: GetMeCommandHandler,
    private getRefreshTokenCommandHandler: GetRefreshTokenCommandHandler,
  ) {}

  loginOTP(): Observable<any> {
    const command = new LoginOTPCommand();

    return this.loginOTPCommandHandler.execute(command);
  }

  verifyOTP() {
    const command = new VerifyOTPCommand();

    return this.verifyOTPCommandHandler.execute(command);
  }

  getRefreshToken() {
    const command = new GetRefreshTokenCommand();

    return this.getRefreshTokenCommandHandler.execute(command);
  }

  removeAuthToken() {
    const command = new RemoveAuthTokenCommand();

    return this.removeAuthTokenCommandHandler.execute(command);
  }

  logout() {
    const command = new LogoutCommand();
    return this.logoutCommandHandler.execute(command);
  }

  getMe() {
    const command = new GetMeCommand();

    return this.getMeCommandHandler.execute(command);
  }
}
