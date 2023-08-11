import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, LoginCredentials } from 'src/app/models/';
import { AuthService, LoginService } from 'src/app/services/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  userName: string = '';
  password: string = '';

  onSubmit(): void {
    const credentials: LoginCredentials = {
      username: this.userName,
      password: this.password,
    };
    this.loginService.login(credentials).subscribe({
      next: (data: LoginData) => {
        this.authService.setToken(data.ATO);
        this.authService.setUser(data.user);
        this.router.navigate(['']);
      },
      error: (err) => console.error(err),
    });
  }
}
