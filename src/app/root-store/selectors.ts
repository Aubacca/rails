import { createSelector, MemoizedSelector } from '@ngrx/store';

import {  MyLocoStoreSelectors } from './my-loco-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  MyLocoStoreSelectors.selectMyFeatureError,
  (myFeatureError: string) => {
    return myFeatureError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  MyLocoStoreSelectors.selectMyLocoIsLoading,
  (myFeature: boolean) => {
    return myFeature;
  }
);
