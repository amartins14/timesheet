import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <h1>Login</h1>
      <form (ngSubmit)="onLogin()">
        <input
          type="text"
          placeholder="Username"
          [(ngModel)]="username"
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          [(ngModel)]="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  `,
  styles: [
    `
      .login-container {
        max-width: 400px;
        margin: 2rem auto;
        padding: 2rem;
      }
      input,
      button {
        display: block;
        margin: 1rem 0;
        padding: 0.5rem;
        width: 100%;
      }
    `,
  ],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    // Replace with actual authentication logic
    if (this.username && this.password) {
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/dashboard']);
    }
  }
}
