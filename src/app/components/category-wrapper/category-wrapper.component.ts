import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, debounceTime } from 'rxjs';
import { MediaElement, AppState } from '../../models';
import * as appSelectors from '../../store/app.selectors';

@Component({
  selector: 'app-category-wrapper',
  templateUrl: './category-wrapper.component.html',
  styleUrl: './category-wrapper.component.css',
})
export class CategoryWrapperComponent {
  @Input() title!: string;
  searchResult: any[] = [];
  @Input() medias$!: Observable<MediaElement[]>;
  @Input() loading$!: Observable<boolean>;
  @Input() error$!: Observable<string | null>;
  @Input() handleSearch!: (query: string) => void;
  searchQuery: string = '';
  searchedMedia: MediaElement[] = [];
}
