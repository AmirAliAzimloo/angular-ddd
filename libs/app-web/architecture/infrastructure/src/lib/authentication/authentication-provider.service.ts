import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationProviderApiService {
  private apiUrl = '/api/auth';

  constructor(
    private readonly http: HttpClient,
  ) {}

  loginOTPRequest(): Observable<any> {
    return this.http.post(`${this.apiUrl}/login-otp`, {});
  }

  verifyOTPRequest(): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-otp`, { otp:123 });
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh-token`, {});
  }

  getRefreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh-token`, {});
  }
  
  removeAuthToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/remove-token`, {});
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  getMeRequest(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }
}

// 1- Application Calls AuthenticationApiService
// 2- Application generate domain aggregate with static create method
// 3- Pass aggregate to Persistence to save into the storage


// Command => Insert / delete / update
// Query => read

// Command => UserCreateCommand => 
// export class UserCreateCommand {

//   readonly id: string;
//   readonly name: string;

//   constructor(args: UserCreateCommand) {
//     Object.assign(this, args);
//   }
// }

// export class UserCreateCommandHandler {


//   execute(command: UserCreateCommand) {
   
//   }
// }

