import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VehicleKind } from './../../services/vehicle-kind.enum';
import { VehicleService } from './../../services/vehicle.service';
import { DetailsService } from './../../services/details.service';
import { Vehicle } from 'src/app/models/models';

@Component({
  selector: 'rs-overview-home',
  templateUrl: './overview-home.component.html',
  styleUrls: ['./overview-home.component.css']
})
export class OverviewHomeComponent implements OnInit {
  bahnList$: Observable<string[]>;
  locoList$: Observable<Vehicle[]>;
  gwList$: Observable<Vehicle[]>;
  pwList$: Observable<Vehicle[]>;
  totalList$: Observable<Vehicle[]>;

  constructor(
    private _detailServcie: DetailsService,
    private _vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.bahnList$ = this._detailServcie.findByType();
    this.locoList$ = this._vehicleService.findByKind(VehicleKind.LOCO);
    this.pwList$ = this._vehicleService.findAllPw();
    this.gwList$ = this._vehicleService.findByKind(VehicleKind.GW);
    this.totalList$ = this._vehicleService.findAll();
  }
}
