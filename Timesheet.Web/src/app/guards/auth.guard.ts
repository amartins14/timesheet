import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    // Check if we're in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      const isAuthenticated =
        sessionStorage.getItem('isAuthenticated') === 'true';
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }

    // For server-side rendering, allow the route to activate
    return true;
  }
}
