import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/models';

@Component({
  selector: 'rs-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  @Input()
  pageTitle: string;
  @Input()
  vehicleList$: Observable<Vehicle[]>;

  constructor() {}

  ngOnInit() {}
}
