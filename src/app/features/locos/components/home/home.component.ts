import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VehicleService } from 'src/app/features/overview/services/vehicle.service';
import { VehicleKind } from 'src/app/features/overview/services/vehicle-kind.enum';

@Component({
  selector: 'rs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locoList$: Observable<Vehicle[]>;

  constructor(private _locoService: VehicleService) {}

  ngOnInit() {
    this.load();
  }

  private load() {
    this.locoList$ = this._locoService.findByKind(VehicleKind.LOCO);
  }
}
