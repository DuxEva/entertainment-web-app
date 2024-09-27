import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as appSelectors from '../../store/app.selectors';
import { AppState, MediaElement } from '../../models';

@Component({
  selector: 'app-book-mark',
  templateUrl: './book-mark.component.html',
  styleUrl: './book-mark.component.css',
})
export class BookMarkComponent implements OnInit {
  searchResult: any[] = [];
  medias$!: Observable<MediaElement[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  searchQuery: string = '';
  searchedMedia: MediaElement[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.medias$ = this.store.select(appSelectors.selectBookmarked);

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
