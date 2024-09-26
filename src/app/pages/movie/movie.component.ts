import { Component } from '@angular/core';
import { AppState, MediaElement } from '../../models';
import { Observable } from 'rxjs';
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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.medias$ = this.store.select(appSelectors.selectMedia);

    this.loading$ = this.store.select(appSelectors.selectLoading);
    this.error$ = this.store.select(appSelectors.selectError);
  }

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
