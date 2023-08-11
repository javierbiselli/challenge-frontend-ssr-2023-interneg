import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginData } from '../models/loginData';
import { LoginCredentials } from '../models/loginCredentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<LoginData> {
    return this.http.post<LoginData>(
      `${environment.api_URL}/login`,
      credentials
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
