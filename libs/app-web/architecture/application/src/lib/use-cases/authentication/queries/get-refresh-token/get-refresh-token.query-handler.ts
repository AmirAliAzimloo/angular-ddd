import { Injectable } from '@angular/core';

import { AuthenticationApiService } from '@angular-ddd/infrastructure';
import { GetRefreshTokenCommand } from './get-refresh-token.query';

@Injectable({
  providedIn: 'root',
})
export class GetRefreshTokenCommandHandler {
  constructor(private apiService: AuthenticationApiService) {}

  async execute(command: GetRefreshTokenCommand): Promise<void> {
    this.apiService.getRefreshToken();
  }
}
