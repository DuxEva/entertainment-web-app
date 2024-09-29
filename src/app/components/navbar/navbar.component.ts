import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../models';
import { Store } from '@ngrx/store';
import * as appActions from '../../store/app.actions';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  authAction: boolean = false;
  isAction: boolean = false;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.isActive('/');
  }

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

  logout() {
    this.authService.logout();
    this.store.dispatch(appActions.isLoggedIn({ status: false }));
    this.toastr.success('Logged out successfully', 'Success');
    this.router.navigate(['/login']);
  }
}
