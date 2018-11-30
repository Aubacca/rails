import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  debounceTime,
  take,
  tap,
  first
} from 'rxjs/operators';

import * as locoActions from './loco.actions';
import { VehicleService } from '../../features/overview/services/vehicle.service';
import { VehicleKind } from '../../features/overview/services/vehicle-kind.enum';
import { LokosService } from 'src/app/features/overview/services/lokos.service';

@Injectable()
export class LocoStoreEffects {
  constructor(
    private dataService: VehicleService,
    private _locoService: LokosService,
    private actions$: Actions
  ) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<locoActions.GetLocos>(locoActions.LocoActionTypes.GET_LOCOS),
    switchMap(action =>
      this.dataService.findByKind(VehicleKind.LOCO).pipe(
        debounceTime(3000),
        map(locos => new locoActions.GetLocosSuccess({ vehicleList: locos })),
        catchError(error =>
          observableOf(new locoActions.GetLocosFailure({ error }))
        )
      )
    )
  );

  @Effect()
  loadLocoOne$: Observable<Action> = this.actions$.pipe(
    ofType<locoActions.GetLocoOne>(locoActions.LocoActionTypes.GET_LOCO_ONE),
    switchMap(action =>
      this._locoService.findByNumber(action.payload.nummer).pipe(
        debounceTime(3000),
        first(),
        take(1),
        // tap(loco => {
        //   console.log('loadLocoOne>loco=', loco);
        //   return new locoActions.GetLocoOneSuccess({ vehicle: loco });
        // }),
        map(loco => {
          console.log('loadLocoOne>loco=', loco[0]);
          return new locoActions.GetLocoOneSuccess({ vehicle: loco[0] });
        }),
        catchError(error =>
          observableOf(new locoActions.GetLocoOneFailure({ error }))
        )
      )
    )
  );
}
