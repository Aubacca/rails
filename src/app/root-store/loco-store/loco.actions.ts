import { Action } from '@ngrx/store';

import { VehicleKind } from '../../features/overview/services/vehicle-kind.enum';
import { ShowLoader, HideLoader } from '../spinner-store/shared/decorators';
import { Vehicle } from 'src/app/models/models';

export enum LocoActionTypes {
  GET_LOCOS = '[My Loco] Get all',
  GET_LOCOS_SUCCESS = '[My Loco] Get all success',
  GET_LOCOS_FAILURE = '[My Loco] Get all failure',
  GET_LOCO_ONE = '[My Loco] Get one',
  GET_LOCO_ONE_SUCCESS = '[My Loco] Get one success',
  GET_LOCO_ONE_FAILURE = '[My Loco] Get one failure'
}

@ShowLoader()
export class GetLocos implements Action {
  readonly type = LocoActionTypes.GET_LOCOS;
  constructor(public payload: { vehicleKind: VehicleKind }) {}
}

@HideLoader(LocoActionTypes.GET_LOCOS)
export class GetLocosSuccess implements Action {
  readonly type = LocoActionTypes.GET_LOCOS_SUCCESS;
  constructor(public payload: { vehicleList: Vehicle[] }) {}
}

@HideLoader(LocoActionTypes.GET_LOCOS)
export class GetLocosFailure implements Action {
  readonly type = LocoActionTypes.GET_LOCOS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class GetLocoOne implements Action {
  readonly type = LocoActionTypes.GET_LOCO_ONE;
  constructor(public payload: { nummer: string }) {}
}

@HideLoader(LocoActionTypes.GET_LOCOS)
export class GetLocoOneSuccess implements Action {
  readonly type = LocoActionTypes.GET_LOCO_ONE_SUCCESS;
  constructor(public payload: { vehicle: Vehicle }) {}
}

export class GetLocoOneFailure implements Action {
  readonly type = LocoActionTypes.GET_LOCO_ONE_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type LocoActions =
  | GetLocos
  | GetLocosFailure
  | GetLocosSuccess
  | GetLocoOne
  | GetLocoOneSuccess
  | GetLocoOneFailure;
