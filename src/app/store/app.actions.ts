import { createAction, props } from '@ngrx/store';
import { MediaElement } from '../models';

export const loadData = createAction('[Media] Load Data');

export const loadDataSuccess = createAction(
  '[Media] Load Data Success',
  props<{ data: MediaElement[] }>()
);

export const loadDataFailure = createAction(
  '[Media] Load Data Failure',
  props<{ error: string }>()
);

export const bookmark = createAction(
  '[Media] Bookmark',
  props<{ media: MediaElement }>()
);

export const getMovies = createAction('[Movies] Get Movies');
