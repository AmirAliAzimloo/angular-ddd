import { Injectable } from '@angular/core';
import { AuthenticationApiService } from '@angular-ddd/infrastructure';

import { GetMeCommand } from './get-me.query';

@Injectable({
  providedIn: 'root',
})
export class GetMeCommandHandler {
  constructor(private apiService: AuthenticationApiService) {}

  async execute(command: GetMeCommand): Promise<void> {
    this.apiService.getMeRequest();
  }
}
