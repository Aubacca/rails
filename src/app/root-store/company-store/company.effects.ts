import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';

import * as companyActions from './company.actions';
import { CompaniesService } from 'src/app/features/companies/services/companies.service';

@Injectable()
export class CompanyEffects {
  constructor(
    private actions$: Actions,
    private _companyService: CompaniesService
  ) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<companyActions.GetCompany>(
      companyActions.CompanyActionTypes.GET_COMPANIES
    ),
    switchMap(action =>
      this._companyService.findAll().pipe(
        debounceTime(3000),
        map(
          data => new companyActions.GetCompanySuccess({ companyList: data })
        ),
        catchError(error =>
          observableOf(new companyActions.GetCompanyFailure({ error }))
        )
      )
    )
  );
}
