import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import {
  RootStoreState,
  CompanySelectors,
  CompanyActions
} from 'src/app/root-store';
import { Company } from 'src/app/models/models';

@Component({
  // selector: 'rs-overview2',
  template: `<hr>
  Total Gesellschaften: <b>{{ totalCount$ | async }}</b>
 <rs-company-list [pageTitle]="'List aller Gesellschaften'" [companyList$]="companyList$"></rs-company-list>`,
  styles: []
})
export class CompanyListComponent implements OnInit {
  companyList$: Observable<Company[]>;
  totalCount$: Observable<number>;

  constructor(private _store$: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    // Get company list from store via selector.
    this.companyList$ = this._store$.pipe(
      select(CompanySelectors.selectCompanyList)
    );
    this.totalCount$ = this._store$.pipe(
      select(CompanySelectors.selectTotalCount)
    );
    // Load company list from store.
    this._store$.dispatch(new CompanyActions.GetCompany());
  }
}
