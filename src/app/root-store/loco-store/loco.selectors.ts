import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './loco.state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getLocoList = (state: State): any => state.locoList;

export const selectMyLocoState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('myLoco');

export const selectMyFeatureError: MemoizedSelector<
  object,
  any
> = createSelector(selectMyLocoState, getError);

export const selectMyLocoIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectMyLocoState, getIsLoading);

export const selectMyLocoLocoList: MemoizedSelector<
  object,
  Vehicle[]
> = createSelector(selectMyLocoState, getLocoList);
