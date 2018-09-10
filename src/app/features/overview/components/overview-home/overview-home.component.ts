import { VehicleKind } from './../../services/vehicle-kind.enum';
import { VehicleService } from './../../services/vehicle.service';
import { LokosService } from './../../services/lokos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DetailsService } from './../../services/details.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'rs-overview-home',
  templateUrl: './overview-home.component.html',
  styleUrls: ['./overview-home.component.css']
})
export class OverviewHomeComponent implements OnInit {
  detailList$: Observable<string[]>;
  locoList$: Observable<Vehicle[]>;
  vehicles$: Observable<Vehicle[]>;
  gwList$: Observable<Vehicle[]>;
  pwList$: Observable<Vehicle[]>;

  constructor(
    private _detailServcie: DetailsService,
    private _locoService: LokosService,
    private _vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.detailList$ = this._detailServcie.findByType();
    this.locoList$ = this._vehicleService.findByKind(VehicleKind.LOCO);
    this.vehicles$ = this._vehicleService.findAll();
    this.pwList$ = this._vehicleService.findAllPw();
    this.gwList$ = this._vehicleService.findByKind(VehicleKind.GW);
  }
}
