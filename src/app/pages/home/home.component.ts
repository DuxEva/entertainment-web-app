import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, MediaElement } from '../../models';
import * as appSelectors from '../../store/app.selectors';
import { debounceTime, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  mediaElements$!: Observable<MediaElement[]>;
  searchQuery: string = '';
  searchedMedia: MediaElement[] = [];
  medias$!: Observable<MediaElement[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.mediaElements$ = this.store.select(appSelectors.selectMedia);
  }

  ngOnChanges() {
    this.medias$ = this.store.select(appSelectors.selectMedia);
    this.mediaElements$ = this.store.select(appSelectors.selectMedia);
  }

  handleSearch(query: string) {
    this.searchQuery = query;
    this.mediaElements$.pipe(debounceTime(500)).subscribe((media) => {
      this.searchedMedia = media.filter((m) =>
        m.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
    console.log(this.searchedMedia);
  }
}
