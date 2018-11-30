import { VehicleKindType } from './../../../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { VehicleKind } from './vehicle-kind.enum';
import { Vehicle } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly ROOT_SERVICE_URL = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  /**
   * Find all vehicle which are not a passanger car.
   * @returns {Vehicle[]}  -  List of vehicles.
   */
  public findAll2(): Observable<any> {
    return this._http.get<Vehicle[]>(`${this.ROOT_SERVICE_URL}/vehicles`).pipe(
      tap(data => console.log('VehicleService.findAll:', data)),
      map((vehicles: Vehicle[]) => {
        console.log('vehicles:', vehicles);
        return vehicles.filter(
          (vehicle: Vehicle) => vehicle.vehicleType !== VehicleKind.PW
        );
      }),
      tap(data => console.log('VehicleService.findAll:', data))
    );
  }

  public findAll(): Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(`${this.ROOT_SERVICE_URL}/vehicles`);
  }

  public findAllPw(): Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(`${this.ROOT_SERVICE_URL}/vehicles`).pipe(
      tap(vehicles => console.log('findAllPw.vehicles:', vehicles)),
      map(allVehicles => {
        const list = allVehicles.filter(
          vehicle => vehicle.vehicleKind === VehicleKind.PW
        );
        return list.sort((pw1, pw2) => pw1.nummer.localeCompare(pw2.nummer));
      })
    );
  }

  public findByKind(vehicleKind: String): Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(`${this.ROOT_SERVICE_URL}/vehicles`).pipe(
      tap(vehicles => console.log('findByKind.vehicles:', vehicles)),
      map(allVehicles => {
        const list = allVehicles.filter(
          vehicle => vehicle.vehicleKind === vehicleKind
        );
        return list.sort((pw1, pw2) => pw1.nummer.localeCompare(pw2.nummer));
      })
    );
  }
}
