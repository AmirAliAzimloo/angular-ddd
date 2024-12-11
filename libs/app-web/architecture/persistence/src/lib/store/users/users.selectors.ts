import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './users.reducers';

export const selectUsersState = createFeatureSelector<State>('users');

export const selectUser = createSelector(
  selectUsersState,
  (state: State) => state.user
);
