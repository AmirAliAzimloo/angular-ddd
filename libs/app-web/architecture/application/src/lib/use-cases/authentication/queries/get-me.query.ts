import { Injectable } from '@angular/core';

import { AuthenticationApiService } from '@angular-ddd/infrastructure';

@Injectable({
  providedIn: 'root',
})
export class GetMeCommand {
  constructor(private apiService: AuthenticationApiService) {}

  async execute(): Promise<void> {
    this.apiService.getMeRequest();
  }
}
