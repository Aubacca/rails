import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, debounceTime } from 'rxjs/operators';
import * as locoActions from './actions';

import { VehicleService } from './../../features/overview/services/vehicle.service';
import { VehicleKind } from './../../features/overview/services/vehicle-kind.enum';

@Injectable()
export class MyLocoStoreEffects {
  constructor(private dataService: VehicleService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<locoActions.GetLocos>(locoActions.ActionTypes.GET_LOCOS),
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
}
