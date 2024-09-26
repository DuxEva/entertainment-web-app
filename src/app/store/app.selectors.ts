import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../models';

export const selectAppState = createFeatureSelector<AppState>('data');

export const selectMedia = createSelector(
  selectAppState,
  (state) => state.media
);
export const selectTrendingMovies = createSelector(selectAppState, (state) => {
  console.log('state', state);
  return state.trending;
});
export const selectTvShows = createSelector(
  selectAppState,
  (state) => state.tvShows
);
