import { Action } from '@ngrx/store';
import { Vehicle } from 'src/app/models/models';

export enum GwActionTypes {
  LoadGw = '[GW] Load Gws',
  LoadGwSuccess = '[GW] Load Gws Success',
  LoadGwFailure = '[GW] Load Gws failure'
}

export class LoadGws implements Action {
  readonly type = GwActionTypes.LoadGw;
  constructor() {}
}

export class LoadGwSuccess implements Action {
  readonly type = GwActionTypes.LoadGwSuccess;
  constructor(public payload: { gwList$: Vehicle[] }) {}
}

export class LoadGwFailure implements Action {
  readonly type = GwActionTypes.LoadGwFailure;
  constructor(public payload: { error: any }) {}
}

export type GwActions = LoadGws | LoadGwSuccess | LoadGwFailure;
