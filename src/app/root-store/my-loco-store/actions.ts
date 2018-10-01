import { Action } from '@ngrx/store';

import { Vehicle } from './../../features/overview/models/vehicle.model';
import { VehicleKind } from '../../features/overview/services/vehicle-kind.enum';
import { ShowLoader, HideLoader } from '../spinner-store/shared/decorators';

export enum ActionTypes {
  GET_LOCOS = '[My Loco] Get all',
  GET_LOCOS_SUCCESS = '[My Loco] Get all success',
  GET_LOCOS_FAILURE = '[My Loco] Get all failure'
}

@ShowLoader()
export class GetLocos implements Action {
  readonly type = ActionTypes.GET_LOCOS;
  constructor(public payload: { vehicleKind: VehicleKind }) {}
}

@HideLoader(ActionTypes.GET_LOCOS)
export class GetLocosSuccess implements Action {
  readonly type = ActionTypes.GET_LOCOS_SUCCESS;
  constructor(public payload: { vehicleList: Vehicle[] }) {}
}

@HideLoader(ActionTypes.GET_LOCOS)
export class GetLocosFailure implements Action {
  readonly type = ActionTypes.GET_LOCOS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type Actions = GetLocos | GetLocosFailure | GetLocosSuccess;
