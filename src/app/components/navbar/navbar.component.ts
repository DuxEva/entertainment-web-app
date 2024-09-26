import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  authAction: boolean = false;

  navItems = [
    { icon: 'assets/icon-nav-home.svg', alt: 'Home', route: '/home' },
    { icon: 'assets/icon-nav-movies.svg', alt: 'Movies', route: '/media' },
    {
      icon: 'assets/icon-nav-tv-series.svg',
      altText: 'TV Series',
      route: '/tv-series',
    },
    {
      icon: 'assets/icon-nav-bookmark.svg',
      altText: 'Bookmark',
      route: '/bookmark',
    },
  ];

  isActive(route: string): boolean {
    console.log('Route:', this.router.url);
    return this.router.url === route;
  }

  toggleAuthAction() {
    this.authAction = !this.authAction;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
