import { Action } from '@ngrx/store';

import { Vehicle } from 'src/app/models/models';

export enum PwActionTypes {
  LOAD_PW = '[PW] Load all',
  LOAD_PW_SUCCESS = '[PW] Load all success',
  LOAD_PW_FAILURE = '[PW] Load all failure'
}

export class LoadPws implements Action {
  readonly type = PwActionTypes.LOAD_PW;
  constructor() {}
}

export class LoadPwsSuccess implements Action {
  readonly type = PwActionTypes.LOAD_PW_SUCCESS;
  constructor(public payload: { pwList$: Vehicle[] }) {}
}

export class LoadPwsFailure implements Action {
  readonly type = PwActionTypes.LOAD_PW_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type PwActions = LoadPws | LoadPwsSuccess | LoadPwsFailure;
