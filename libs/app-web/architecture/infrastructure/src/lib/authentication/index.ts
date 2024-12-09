import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationApiService {
  private apiUrl = '/api/auth';

  constructor(
    private http: HttpClient,
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
