import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './gw.state';

const getError = (state: State): any => state.error;

const getGwList = (state: State): Vehicle[] => state.gwList;

export const selectGwState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('gwagen');

export const selectGwList: MemoizedSelector<object, Vehicle[]> = createSelector(
  selectGwState,
  getGwList
);

export const selectGwError: MemoizedSelector<object, any> = createSelector(
  selectGwState,
  getError
);
