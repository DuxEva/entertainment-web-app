import { Component } from '@angular/core';
import { AppState, MediaElement } from '../../models';
import { debounceTime, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as appSelectors from '../../store/app.selectors';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  searchResult: any[] = [];
  medias$!: Observable<MediaElement[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  searchQuery: string = '';
  searchedMedia: MediaElement[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.medias$ = this.store.select(appSelectors.selectMedia);

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
