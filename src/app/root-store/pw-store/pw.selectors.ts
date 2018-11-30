import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './pw.state';
import { Vehicle } from 'src/app/models/models';

const getError = (state: State): any => state.error;

const getTotalCount = (state: State): number => state.totalCount;
const getPwList = (state: State): Vehicle[] => state.pwList;

export const selectPwState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('pwagen');

export const selectPwList: MemoizedSelector<object, Vehicle[]> = createSelector(
  selectPwState,
  getPwList
);

export const selectTotalCount: MemoizedSelector<
  object,
  number
> = createSelector(selectPwState, getTotalCount);

export const selectPwError: MemoizedSelector<object, any> = createSelector(
  selectPwState,
  getError
);
