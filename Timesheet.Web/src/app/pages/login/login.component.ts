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
    <div class="login-page-container">
      <div class="login-container">
        <p-card>
          <div class="login-content fade-in">
            <div class="logo">
              <img src="/logo.jpg" alt="Logo" />
            </div>
            <h1>Bem Vindo!</h1>

            <form (ngSubmit)="onLogin()" class="login-form">
              <div class="form-field">
                <span class="p-float-label">
                  <input
                    pInputText
                    id="username"
                    type="text"
                    [(ngModel)]="username"
                    name="username"
                    #usernameInput="ngModel"
                    required
                    [autofocus]="true"
                  />
                  <label for="username">Username</label>
                </span>
              </div>
              <div class="form-field">
                <span class="p-float-label password-container">
                  <input
                    pInputText
                    id="password"
                    [type]="showPassword ? 'text' : 'password'"
                    [(ngModel)]="password"
                    name="password"
                    required
                  />
                  <button
                    type="button"
                    class="eye-button"
                    (click)="showPassword = !showPassword"
                  >
                    <i
                      [class]="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
                    ></i>
                  </button>
                  <label for="password">Password</label>
                </span>
              </div>

              <p-button
                type="submit"
                label="Entrar"
                styleClass="login-button"
                [loading]="isLoading"
              ></p-button>
            </form>
          </div>
        </p-card>
      </div>

      <div class="bottom-actions">
        <p-button
          label="Modo Picagem"
          styleClass="p-button-outlined"
          icon="pi pi-clock"
        ></p-button>
      </div>
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
  isLoading = false;
  showPassword = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onLogin() {
    if (this.username && this.password) {
      this.isLoading = true;
      // Simulate loading
      setTimeout(() => {
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
        this.isLoading = false;
      }, 1000);
    }
  }
}
