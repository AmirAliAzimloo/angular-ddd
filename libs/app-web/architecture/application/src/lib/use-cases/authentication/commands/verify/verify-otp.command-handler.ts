// verify-otp.command-handler.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationApiService } from '@angular-ddd/infrastructure';
import { VerifyOTPCommand } from './verify-otp.command';

@Injectable({
  providedIn: 'root',
})
export class VerifyOTPCommandHandler {
  constructor(private apiService: AuthenticationApiService) {}

  execute(command: VerifyOTPCommand): Observable<any> {
    return this.apiService.verifyOTPRequest().pipe(
      map(response => {
        console.log('OTP verification successful');
        
        return response;
      })
    );
  }
}
