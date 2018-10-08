import { createSelector, MemoizedSelector } from '@ngrx/store';

import { LocoStoreSelectors } from './loco-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  LocoStoreSelectors.selectMyFeatureError,
  (myFeatureError: string) => {
    return myFeatureError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  LocoStoreSelectors.selectMyLocoIsLoading,
  (myFeature: boolean) => {
    return myFeature;
  }
);
