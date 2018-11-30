import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootStoreState } from 'src/app/root-store';
import { GwActions, GwSelectors } from 'src/app/root-store/gws-store';
import { Vehicle } from 'src/app/models/models';

@Component({
  // selector: 'rs-overview',
  template: `<hr>
  Total Güterwagen: <b>{{ totalCount$ | async }}</b>
  <rs-vehicle-list pageTitle="Liste aller Güterwagen" [vehicleList$]="gwagenList$"></rs-vehicle-list>`,
  styles: []
})
export class GwListComponent implements OnInit {
  gwagenList$: Observable<Vehicle[]>;
  totalCount$: Observable<number>;

  constructor(private store$: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    // Add store listener.
    this.gwagenList$ = this.store$.select(GwSelectors.selectGwList);
    this.totalCount$ = this.store$.select(GwSelectors.selectTotalCount);
    // Load data via store.
    this.store$.dispatch(new GwActions.LoadGws());
  }
}
