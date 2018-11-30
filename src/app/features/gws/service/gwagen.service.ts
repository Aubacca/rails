import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class GwagenService {
  private readonly ROOT_SERVICE_URL = 'http://localhost:3000';
  private readonly _URL = `${this.ROOT_SERVICE_URL}/vehicles`;

  constructor(private _httpClient: HttpClient) {}

  public findAll(): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(`${this._URL}?vehicleKind=GW`).pipe(
      map(data => {
        return data.sort((pw1, pw2) => pw1.nummer.localeCompare(pw2.nummer));
      })
    );
  }
}
