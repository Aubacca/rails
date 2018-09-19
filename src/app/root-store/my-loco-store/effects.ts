import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as locoActions from './actions';

import { VehicleService } from './../../features/overview/services/vehicle.service';
import { VehicleKind } from './../../features/overview/services/vehicle-kind.enum';

@Injectable()
export class MyLocoStoreEffects {
  constructor(private dataService: VehicleService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<locoActions.LoadRequestAction>(locoActions.ActionTypes.LOAD_REQUEST),
    switchMap(action =>
      this.dataService.findByKind(VehicleKind.LOCO).pipe(
        map(locos => new locoActions.LoadSuccessAction({ vehicleList: locos })),
        catchError(error =>
          observableOf(new locoActions.LoadFailureAction({ error }))
        )
      )
    )
  );
}
