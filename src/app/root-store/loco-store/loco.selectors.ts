import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './loco.state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getLocoList = (state: State): any => state.locoList;
const getLocoDetail = (state: State): any => state.locoDetail;

export const selectLocoState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('loco');

export const selectMyFeatureError: MemoizedSelector<
  object,
  any
> = createSelector(selectLocoState, getError);

export const selectMyLocoIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectLocoState, getIsLoading);

export const selectMyLocoLocoList: MemoizedSelector<
  object,
  Vehicle[]
> = createSelector(selectLocoState, getLocoList);

export const selectLocoDetail: MemoizedSelector<
  object,
  Vehicle
> = createSelector(selectLocoState, getLocoDetail);
