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

  loginOTP(): Observable<any> {
    return this.http.post(`${this.apiUrl}/login-otp`, {});
  }

  verifyOTP(otp: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-otp`, { otp });
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh-token`, {});
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }
}
