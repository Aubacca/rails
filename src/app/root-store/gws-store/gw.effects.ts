import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as gwagenActions from './gw.actions';
import { GwagenService } from 'src/app/features/gws/service/gwagen.service';

@Injectable()
export class GwEffects {
  constructor(
    private actions$: Actions,
    private _gwagenService: GwagenService
  ) {}

  @Effect()
  loadGwEffect$: Observable<Action> = this.actions$.pipe(
    ofType<gwagenActions.LoadGws>(gwagenActions.GwActionTypes.LoadGw),
    switchMap(action =>
      this._gwagenService.findAll().pipe(
        map(data => new gwagenActions.LoadGwSuccess({ gwList$: data })),
        catchError(error =>
          observableOf(new gwagenActions.LoadGwFailure({ error }))
        )
      )
    )
  );
}
