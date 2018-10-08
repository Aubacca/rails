import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import {
  RootStoreState,
  CompanySelectors,
  CompanyActions
} from 'src/app/root-store';

@Component({
  selector: 'rs-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  companyList$: Observable<Company[]>;

  constructor(private _store$: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    // Get company list from store via selector.
    this.companyList$ = this._store$.pipe(
      select(CompanySelectors.selectCompanyList)
    );
    // Load company list from store.
    this._store$.dispatch(new CompanyActions.GetCompany());
  }
}
