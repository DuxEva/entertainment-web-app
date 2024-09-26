import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, MediaElement } from '../../models';
import { select, Store } from '@ngrx/store';
import * as appActions from '../../store/app.actions';
import * as appSelectors from '../../store/app.selectors';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrl: './trendings.component.css',
})
export class TrendingsComponent implements OnInit {
  trendingMovies$!: Observable<MediaElement[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.trendingMovies$ = this.store.select(appSelectors.selectTrendingMovies);
    this.loading$ = this.store.select(appSelectors.selectLoading);
    this.error$ = this.store.select(appSelectors.selectError);
  }
}
