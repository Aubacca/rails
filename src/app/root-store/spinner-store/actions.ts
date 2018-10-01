import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  SHOW_SPINNER = '[Spinner] Show',
  HIDE_SPINNER = '[Spinner] Hide'
}

export class ShowSpinner implements Action {
  readonly type = SpinnerActionTypes.SHOW_SPINNER;

  constructor(public payload: any) {}
}

export class HideSpinner implements Action {
  readonly type = SpinnerActionTypes.HIDE_SPINNER;

  constructor(public payload: any) {}
}

export type SpinnerAction = ShowSpinner | HideSpinner;
