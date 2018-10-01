import { VehicleKind } from '../../overview/services/vehicle-kind.enum';
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Vehicle } from '../../overview/models/vehicle.model';
import {
  RootStoreState,
  MyLocoStoreActions,
  MyLocoStoreSelectors
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
      select(MyLocoStoreSelectors.selectMyLocoLocoList)
    );

    this.error$ = this.store$.pipe(
      select(MyLocoStoreSelectors.selectMyFeatureError)
    );

    // this.isLoading$ = this.store$.select(
    //   MyFeatureStoreSelectors.selectUnProcessedDocumentIsLoading
    // );

    this.store$.dispatch(
      new MyLocoStoreActions.GetLocos({ vehicleKind: VehicleKind.LOCO })
    );
  }
}
