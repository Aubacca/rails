import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { VehicleKind } from 'src/app/features/overview/services/vehicle-kind.enum';
import {
  RootStoreState,
  LocoStoreSelectors,
  LocoStoreActions
} from 'src/app/root-store';
import { Vehicle } from 'src/app/models/models';

@Component({
  template: `<hr>
  Total Lokomotiven: <b>{{ totalCount$ | async }}</b>
  <rs-loco-list [pageTitle]="'Liste aller Lokomotiven (mit Store)'" [locoList$]="myLocoList$"></rs-loco-list>`,
  styles: []
})
export class LocosComponent implements OnInit {
  myLocoList$: Observable<Vehicle[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;
  totalCount$: Observable<number>;

  constructor(private store$: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    this.myLocoList$ = this.store$.pipe(
      select(LocoStoreSelectors.selectMyLocoLocoList)
    );

    this.error$ = this.store$.pipe(
      select(LocoStoreSelectors.selectMyFeatureError)
    );
    this.totalCount$ = this.store$.pipe(
      select(LocoStoreSelectors.selectLocoTotal)
    );

    // this.isLoading$ = this.store$.select(
    //   MyFeatureStoreSelectors.selectUnProcessedDocumentIsLoading
    // );

    this.store$.dispatch(
      new LocoStoreActions.GetLocos({ vehicleKind: VehicleKind.LOCO })
    );
  }
}
