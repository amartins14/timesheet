import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-content">
        <h1>Settings</h1>
        <div class="grid">
          <div class="col-12">
            <p-card>
              <h2>Application Settings</h2>
              <p>Customize your application settings here.</p>
            </p-card>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .dashboard-container {
        padding: 2rem;
      }
      .dashboard-content {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--text-color);
        margin-bottom: 2rem;
      }
      .bottom-actions {
        position: fixed;
        bottom: 2rem;
        left: 2rem;
      }
    `,
  ],
})
export class SettingsComponent {}
