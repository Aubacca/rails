import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './loco.state';
import { Vehicle } from 'src/app/models/models';

const getError = (state: State): any => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;

const getLocoList = (state: State): any => state.locoList;
const getTotal = (state: State): number => state.totalCount;
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

export const selectLocoTotal: MemoizedSelector<object, number> = createSelector(
  selectLocoState,
  getTotal
);
