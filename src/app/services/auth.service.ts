import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { LoginResponse, Signup, SignupMsg } from '../models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = 'https://jadoiradukunda.onrender.com/api/auth';

  constructor(
    private http: HttpClient,
    private route: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  signUp(data: any): Observable<Signup | SignupMsg> {
    return this.http.post<Signup | SignupMsg>(`${this.URL}/signup`, data);
  }

  login(data: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.URL}/login`, data);
  }

  sendToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('LoggedInUser', token);
    }
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('LoggedInUser');
    }
    return null;
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('LoggedInUser');
      this.route.navigate(['login']);
    }
  }
}
