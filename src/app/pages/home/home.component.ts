import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, MediaElement } from '../../models';
import * as appSelectors from '../../store/app.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mediaElements$!: Observable<MediaElement[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.mediaElements$ = this.store.pipe(select(appSelectors.selectMedia));
  }
}
