import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { State } from './company.store';

const getError = (state: State): any => state.error;

const getCompanyList = (state: State): Company[] => state.companyList;

export const selectCompanyState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('company');

export const selectCompanyList: MemoizedSelector<
  object,
  Company[]
> = createSelector(selectCompanyState, getCompanyList);

export const selectCompanyError: MemoizedSelector<object, any> = createSelector(
  selectCompanyState,
  getError
);
