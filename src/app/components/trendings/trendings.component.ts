import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaItem } from '../../models';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrl: './trendings.component.css',
})
export class TrendingsComponent implements OnInit {
  trendingMovies$!: Observable<MediaItem[]>;
  // loading$!: Observable<boolean>;
  // error$!: Observable<string>;

  constructor(private store: MoviesService) {}

  ngOnInit(): void {
    this.trendingMovies$ = this.store.getMovies();
  }
}
