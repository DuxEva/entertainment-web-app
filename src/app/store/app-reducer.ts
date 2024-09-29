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
  isLoggedIn: false,
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
  })),
  on(appActions.bookmark, (state, { media }) => {
    const bookmarked = state.bookmarked.includes(media)
      ? state.bookmarked.filter((item) => item.title !== media.title)
      : [...state.bookmarked, { ...media, isBookmarked: true }];
    const updatedMedia = state.media.map((item) =>
      item.title === media.title ? { ...item, isBookmarked: true } : item
    );

    const tvShows = state.tvShows.map((item) =>
      item.title === media.title ? { ...item, isBookmarked: true } : item
    );

    const trending = state.trending.map((item) =>
      item.title === media.title ? { ...item, isBookmarked: true } : item
    );

    return {
      ...state,
      bookmarked,
      media: updatedMedia,
      tvShows,
      trending,
    };
  }),
  on(appActions.isLoggedIn, (state, { status }) => ({
    ...state,
    isLoggedIn: status,
  }))
);
