import { Injectable } from '@angular/core';
import { AuthenticationApiService } from '@angular-ddd/infrastructure';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageTokenService } from '@angular-ddd/persistence';
import { RemoveAuthTokenCommand } from './remove-auth-token.command';

@Injectable({
  providedIn: 'root',
})
export class RemoveAuthTokenCommandHandler {
  constructor(private apiService: AuthenticationApiService, private localStorageTokenService: LocalStorageTokenService) {}

  execute(command: RemoveAuthTokenCommand): Observable<any> {
    return this.apiService.removeAuthToken().pipe(
      map(response => {
        this.localStorageTokenService.removeToken();
        
        console.log('Authentication token removed successfully');
        
        return response;
      })
    );
  }
}
