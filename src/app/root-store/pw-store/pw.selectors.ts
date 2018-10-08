import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './pw.state';

const getError = (state: State): any => state.error;

const getPwList = (state: State): Vehicle[] => state.pwList;

export const selectPwState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('pwagen');

export const selectMyFeatureError: MemoizedSelector<
  object,
  any
> = createSelector(selectPwState, getError);

export const selectPwList: MemoizedSelector<object, Vehicle[]> = createSelector(
  selectPwState,
  getPwList
);
