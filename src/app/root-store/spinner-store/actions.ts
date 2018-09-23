import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  SHOW_SPINNER = '[Spinner] Show loading spinner',
  HIDE_SPINNER = '[Spinner] Hide loading spinner'
}

export class ShowSpinner implements Action {
  readonly type: SpinnerActionTypes.SHOW_SPINNER;
  constructor(action: any) {}
}

export class HideSpinner implements Action {
  readonly type: SpinnerActionTypes.HIDE_SPINNER;
  constructor(action: any) {}
}

export type SpinnerAction = ShowSpinner | HideSpinner;
