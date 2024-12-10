import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationApiService } from '@angular-ddd/infrastructure';
import { LocalStorageTokenService } from '@angular-ddd/persistence';
import { LogoutCommand } from './logout.command';

@Injectable({
  providedIn: 'root',
})
export class LogoutCommandHandler {
  constructor(
    private apiService: AuthenticationApiService,  
    private localStorageTokenService: LocalStorageTokenService  
  ) {}

  execute(command: LogoutCommand): Observable<any> {
    return this.apiService.logout().pipe(  
      map(response => {
        this.localStorageTokenService.removeToken();  
        
        console.log('User logged out successfully');
        
        return response; 
      })
    );
  }
}
