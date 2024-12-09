import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserAggregate } from '@angular-ddd/domain';

import { Identity } from '@angular-ddd/domain-driven-design/common';
import { AuthenticationApiService } from '@angular-ddd/infrastructure';
import { LocalStorageTokenService } from '@angular-ddd/persistence';

@Injectable({
  providedIn: 'root',
})
export class LoginOTPCommand {
  constructor(
    private apiService: AuthenticationApiService,
  ) {}

  execute(): Observable<any> {
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
          LocalStorageTokenService.saveToken(token);
        }

        return userAggregate;
      })
    );
  }
}
