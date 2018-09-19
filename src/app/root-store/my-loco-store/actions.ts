import { Action } from '@ngrx/store';

import { Vehicle } from './../../features/overview/models/vehicle.model';
import { VehicleKind } from '../../features/overview/services/vehicle-kind.enum';

export enum ActionTypes {
  LOAD_REQUEST = '[My Loco] Load Request',
  LOAD_FAILURE = '[My Loco] Load Failure',
  LOAD_SUCCESS = '[My Loco] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
  constructor(public payload: { vehicleKind: VehicleKind }) {}
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { vehicleList: Vehicle[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
