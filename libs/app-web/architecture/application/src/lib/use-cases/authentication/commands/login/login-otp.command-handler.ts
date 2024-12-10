import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAggregate } from '@angular-ddd/domain';
import { Identity } from '@angular-ddd/domain-driven-design/common';
import { AuthenticationApiService } from '@angular-ddd/infrastructure';
import { LocalStorageTokenService } from '@angular-ddd/persistence';
import { LoginOTPCommand } from './login-otp.command';

@Injectable({
  providedIn: 'root',
})
export class LoginOTPCommandHandler {
  constructor(
    private apiService: AuthenticationApiService,
    private localStorageTokenService: LocalStorageTokenService
  ) {}

  execute(command: LoginOTPCommand): Observable<any> {
    return this.apiService.loginOTPRequest().pipe(
      map(response => {
        const userAggregate = UserAggregate.create({
          id: new Identity(response.userId),
          nationalId: response.nationalId,
          username: response.username,
          firstName: response.firstName,
          lastName: response.lastName,
        });

        const token = response.token;
        if (token) {
          this.localStorageTokenService.saveToken(token);
        }

        return userAggregate;
      })
    );
  }
}
