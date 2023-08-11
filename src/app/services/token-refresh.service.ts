import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenRefreshService {
  constructor(private authService: AuthService) {}

  refreshToken(token: string): void {
    this.authService.setToken(token);
  }
}
