import { inject, Injectable } from '@angular/core';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../services/movies.service';
import * as appActions from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private moviesService: MoviesService) {}

  private actions$ = inject(Actions);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.loadData),
      mergeMap(() =>
        this.moviesService.getMovies().pipe(
          map((movies) => appActions.loadDataSuccess({ data: movies })),
          catchError((error) => of(appActions.loadDataFailure({ error })))
        )
      )
    )
  );
}
