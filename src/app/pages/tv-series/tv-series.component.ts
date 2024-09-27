import { Component, OnInit } from '@angular/core';

import { debounceTime, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as appSelectors from '../../store/app.selectors';
import { AppState, MediaElement } from '../../models';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css',
})
export class TvSeriesComponent implements OnInit {
  searchResult: any[] = [];
  medias$!: Observable<MediaElement[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  searchQuery: string = '';
  searchedMedia: MediaElement[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.medias$ = this.store.pipe(select(appSelectors.selectTvShows));

    this.loading$ = this.store.select(appSelectors.selectLoading);
    this.error$ = this.store.select(appSelectors.selectError);
  }

  handleSearch(query: string) {
    this.searchQuery = query;
    this.medias$.pipe(debounceTime(500)).subscribe((media) => {
      this.searchedMedia = media.filter((m) =>
        m.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }
}
