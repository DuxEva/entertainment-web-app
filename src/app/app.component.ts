import { Component, OnInit } from '@angular/core';
import { AppState } from './models';
import { Store } from '@ngrx/store';
import * as appActions from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(appActions.loadData());
  }
}
