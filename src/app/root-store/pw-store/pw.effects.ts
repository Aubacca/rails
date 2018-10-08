import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as pwagenActions from './pw.actions';
import { PwagenService } from '../../features/pws/service/pwagen.service';

@Injectable()
export class PwEffects {
  constructor(
    private pwagenService: PwagenService,
    private actions$: Actions
  ) {}

  @Effect()
  loadPwsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<pwagenActions.LoadPws>(pwagenActions.PwActionTypes.LOAD_PW),
    switchMap(action =>
      this.pwagenService.findAll().pipe(
        map(data => new pwagenActions.LoadPwsSuccess({ pwList$: data })),
        catchError(error =>
          observableOf(new pwagenActions.LoadPwsFailure({ error }))
        )
      )
    )
  );
}
