import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';

import { ShowSpinner, HideSpinner } from './actions';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Injectable()
export class LoadingIndicatorEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  showLoader$ = this.actions$.pipe(
    tap(action =>
      console.log('LoadingIndicatorEffects.showLoader$>tap: action=', action)
    ),
    filter((action: any) => {
      console.log(
        'LoadingIndicatorEffects.showLoader$>filter: action=',
        action
      );
      return action && action.__proto__.showLoader ? action : null;
    }),
    map((action: any) => {
      console.log('LoadingIndicatorEffects.showLoader$>map: action=', action);
      return new ShowSpinner(action.payload);
    })
  );

  @Effect()
  hideLoader$ = this.actions$.pipe(
    tap(action =>
      console.log('LoadingIndicatorEffects.hideLoader$>tap: action=', action)
    ),
    filter(
      (action: any) =>
        action && action.__proto__.triggerAction ? action : null
    ),
    tap(ev =>
      console.log('LoadingIndicatorEffects.hideLoader$>filter: ev=', ev)
    ),
    map((action: any) => {
      console.log('LoadingIndicatorEffects.hideLoader$>map: action=', action);
      return new HideSpinner(action);
    })
  );
}
