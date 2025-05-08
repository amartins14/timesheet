import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <p-card>
        <ng-template pTemplate="header">
          <div class="logo">
            <img src="assets/logo.png" alt="Logo" />
          </div>
          <h1>Login</h1>
        </ng-template>

        <form (ngSubmit)="onLogin()">
          <div class="form-field">
            <span class="p-float-label">
              <input
                pInputText
                id="username"
                type="text"
                [(ngModel)]="username"
                name="username"
              />
              <label for="username">Username</label>
            </span>
          </div>

          <div class="form-field">
            <span class="p-float-label">
              <p-password
                id="password"
                [(ngModel)]="password"
                name="password"
                [toggleMask]="true"
              ></p-password>
              <label for="password">Password</label>
            </span>
          </div>

          <p-button type="submit" label="Login" styleClass="w-full"></p-button>
        </form>
      </p-card>
    </div>
  `,
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  standalone: true,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onLogin() {
    if (this.username && this.password) {
      // Simulated successful login
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('user', this.username);
        this.router.navigate(['/dashboard']).then(() => {
          console.log('Navigation completed');
        });
      } else {
        alert(
          'Occorreu um erro ao tentar fazer login. Tente novamente mais tarde.'
        );
      }
    }
  }
}
