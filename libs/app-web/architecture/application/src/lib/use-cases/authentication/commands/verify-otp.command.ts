import { Injectable } from '@angular/core';

import { AuthenticationApiService } from '@angular-ddd/infrastructure';

@Injectable({
  providedIn: 'root',
})
export class VerifyOTPCommand {
  constructor(private apiService: AuthenticationApiService) {}

  async execute(): Promise<void> {
    this.apiService.verifyOTPRequest();
  }
}
