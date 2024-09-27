import { Component, Input } from '@angular/core';
import { AppState, MediaElement } from '../../models';
import { Store } from '@ngrx/store';
import * as appActions from '../../store/app.actions';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css',
})
export class MediaCardComponent {
  @Input() media!: MediaElement;

  constructor(private store: Store<AppState>) {}

  bookmark(media: MediaElement) {
    this.store.dispatch(appActions.bookmark({ media }));
  }
}
