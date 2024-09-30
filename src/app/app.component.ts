import { Component, OnInit } from '@angular/core';
import { AppState } from './models';
import { Store } from '@ngrx/store';
import * as appActions from './store/app.actions';
import * as appSelectors from './store/app.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isUserLoggedIn!: boolean;
  currentRoute!: string;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.store.dispatch(appActions.loadData());
    this.store.select(appSelectors.selectIsLoggedIn).subscribe((status) => {
      this.isUserLoggedIn = status;
    });

    this.route.url.subscribe((url) => {
      this.currentRoute = url[0].path;
    });
  }
}
