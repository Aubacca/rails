import { Component, OnInit } from '@angular/core';

import { VehicleKind } from './../../overview/services/vehicle-kind.enum';
import { VehicleService } from '../../overview/services/vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'rs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locoList$: Observable<Vehicle[]>;

  constructor(private _locoService: VehicleService) { }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.locoList$ = this._locoService.findByKind(VehicleKind.LOCO);
  }

}
