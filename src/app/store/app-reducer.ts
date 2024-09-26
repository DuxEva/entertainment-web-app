import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { AppState } from '../models';

export const initialState: AppState = {
  media: [],
  trending: [],
  tvShows: [],
  bookmarked: [],
  loading: false,
  error: '',
};

export const appReducer = createReducer(
  initialState,
  on(appActions.loadData, (state) => ({ ...state, loading: true })),
  on(appActions.loadDataSuccess, (state, { data }) => ({
    ...state,
    media: data,
    trending: data.filter((item) => item.isTrending),
    tvShows: data.filter((item) => item.category === 'TV Series'),
    bookmarked: data.filter((item) => item.isBookmarked),
    loading: false,
  })),
  on(appActions.loadDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
