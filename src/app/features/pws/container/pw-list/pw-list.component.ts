import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { RootStoreState, PwSelectors, PwActions } from 'src/app/root-store';

@Component({
  selector: 'rs-overview',
  template: `<rs-vehicle-list pageTitle="Liste aller Personenwagen" [vehicleList$]="pwagenList$"></rs-vehicle-list>`,
  styles: []
})
export class PwListComponent implements OnInit {
  pwagenList$: Observable<Vehicle[]>;

  constructor(private store$: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    // Add store listener.
    this.pwagenList$ = this.store$.select(PwSelectors.selectPwList);
    // Load data via store.
    this.store$.dispatch(new PwActions.LoadPws());
  }
}
