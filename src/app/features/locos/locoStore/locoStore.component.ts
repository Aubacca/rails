import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { VehicleKind } from '../../overview/services/vehicle-kind.enum';

import {
  RootStoreState,
  LocoStoreActions,
  LocoStoreSelectors
} from '../../../root-store';

@Component({
  selector: 'rs-loco2',
  templateUrl: './locoStore.component.html',
  styleUrls: ['./locoStore.component.css']
})
export class LocoStoreComponent implements OnInit {
  myLocoList$: Observable<Vehicle[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

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

    // this.isLoading$ = this.store$.select(
    //   MyFeatureStoreSelectors.selectUnProcessedDocumentIsLoading
    // );

    this.store$.dispatch(
      new LocoStoreActions.GetLocos({ vehicleKind: VehicleKind.LOCO })
    );
  }
}
