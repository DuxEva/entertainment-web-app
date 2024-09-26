import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as appSelectors from '../../store/app.selectors';
import { AppState, MediaElement } from '../../models';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css',
})
export class TvSeriesComponent {
  searchResult: any[] = [];
  medias$: Observable<MediaElement[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.medias$ = this.store.pipe(select(appSelectors.selectTvShows));

    this.loading$ = this.store.select(appSelectors.selectLoading);
    this.error$ = this.store.select(appSelectors.selectError);
  }

  ngOnInit() {
    // this.store.dispatch(loadMedia());
  }

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
