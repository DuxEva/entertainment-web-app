import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../models';

export const selectAppState = createFeatureSelector<AppState>('data');

export const selectMedia = createSelector(
  selectAppState,
  (state) => state.media
);
export const selectTrendingMovies = createSelector(
  selectAppState,
  (state) => state.trending
);
export const selectTvShows = createSelector(
  selectAppState,
  (state) => state.tvShows
);

export const selectBookmarked = createSelector(
  selectAppState,
  (state) => state.bookmarked
);

export const selectLoading = createSelector(
  selectAppState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectAppState,
  (state) => state.error
);
