import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  authAction: boolean = false;
  isAction: boolean = false;

  navItems = [
    {
      icon: 'assets/icon-nav-home.svg',
      iconActive: 'assets/icon-home-active.svg',
      alt: 'Home',
      route: '/home',
    },
    {
      icon: 'assets/icon-nav-movies.svg',
      iconActive: 'assets/icon-category-movie.svg',
      alt: 'Movies',
      route: '/movies',
    },
    {
      icon: 'assets/icon-nav-tv-series.svg',
      iconActive: 'assets/icon-category-tv.svg',
      altText: 'TV Series',
      route: '/tv-series',
    },
    {
      icon: 'assets/icon-nav-bookmark.svg',
      iconActive: 'assets/icon-bookmark-full.svg',
      altText: 'Bookmark',
      route: '/bookmark',
    },
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleAuthAction() {
    this.authAction = !this.authAction;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
