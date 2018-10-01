import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as spinnerSate from './state';
import * as spinnerReducer from './reducer';

export interface State {
  loading: spinnerSate.State;
}

export const reducers = {
  loading: spinnerReducer.featureReducer
};

export const getLoadingState = (state: State) => state.loading;

export const isLoadingSpinnerActive = createSelector(
  getLoadingState,
  spinnerReducer.isLoadingSpinnerActive
);
