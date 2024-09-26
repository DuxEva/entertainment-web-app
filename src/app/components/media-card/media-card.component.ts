import { Component, Input } from '@angular/core';
import { MediaElement } from '../../models';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css',
})
export class MediaCardComponent {
  @Input() media!: MediaElement;
}
