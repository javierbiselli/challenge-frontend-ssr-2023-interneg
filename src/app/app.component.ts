import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  token: string | null = null;
  ngOnInit() {
    const storedValue = window.localStorage.getItem('token');
    if (storedValue !== null) {
      this.token = storedValue;
    }
  }

  onLogOut() {
    window.localStorage.removeItem('userCredentials');
    window.localStorage.removeItem('token');
  }
}
