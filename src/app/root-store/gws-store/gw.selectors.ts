import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './gw.state';
import { Vehicle } from 'src/app/models/models';

const getError = (state: State): any => state.error;

const getTotalCount = (state: State): number => state.totalCount;
const getGwList = (state: State): Vehicle[] => state.gwList;

export const selectGwState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('gwagen');

export const selectGwList: MemoizedSelector<object, Vehicle[]> = createSelector(
  selectGwState,
  getGwList
);

export const selectTotalCount: MemoizedSelector<
  object,
  number
> = createSelector(selectGwState, getTotalCount);

export const selectGwError: MemoizedSelector<object, any> = createSelector(
  selectGwState,
  getError
);
