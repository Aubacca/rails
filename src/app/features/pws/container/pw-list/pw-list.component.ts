import { selectTotalCount } from './../../../../root-store/pw-store/pw.selectors';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { RootStoreState, PwSelectors, PwActions } from 'src/app/root-store';
import { Vehicle } from 'src/app/models/models';

@Component({
  // selector: 'rs-overview',
  template: `<hr>
  Total Personenwagen: <b>{{ totalCount$ | async }}</b>
  <rs-vehicle-list pageTitle="Liste aller Personenwagen" [vehicleList$]="pwagenList$"></rs-vehicle-list>`,
  styles: []
})
export class PwListComponent implements OnInit {
  pwagenList$: Observable<Vehicle[]>;
  totalCount$: Observable<number>;

  constructor(private store$: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    // Add store listener.
    this.pwagenList$ = this.store$.select(PwSelectors.selectPwList);
    this.totalCount$ = this.store$.select(PwSelectors.selectTotalCount);
    // Load data via store.
    this.store$.dispatch(new PwActions.LoadPws());
  }
}
