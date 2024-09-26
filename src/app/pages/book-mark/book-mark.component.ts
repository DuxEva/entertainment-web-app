import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.medias$ = this.store.select(appSelectors.selectBookmarked);

    this.loading$ = this.store.select(appSelectors.selectLoading);
    this.error$ = this.store.select(appSelectors.selectError);
  }

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
