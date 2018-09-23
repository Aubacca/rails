import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';
import * as fromReducer from './reducer';

export const selectSpinnerEntity = createFeatureSelector<State>(
  'loadingSpinner'
);

export const isLoadingSpinnerActive = createSelector(
  selectSpinnerEntity,
  fromReducer.isLoadingSpinnerActive
);
