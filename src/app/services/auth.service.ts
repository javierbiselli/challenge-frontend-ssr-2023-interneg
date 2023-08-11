import { Injectable } from '@angular/core';
import { User } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private token = new BehaviorSubject<string | null>(
    localStorage.getItem('token')
  );
  private user = new BehaviorSubject<User | null>(
    JSON.parse(localStorage.getItem('user') ?? 'null')
  );

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
}
