import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, first } from 'rxjs/operators';
import { Vehicle } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class LokosService {
  private HOST_URL = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  public findAll(): Observable<Vehicle[]> {
    console.log('LokosService.findAll>begin');
    return this._http
      .get<Vehicle[]>(`${this.HOST_URL}/vehicles?vehicleKind=LOK`)
      .pipe(
        tap(data => console.log('data:', data)),
        catchError(this.handleError('findAll', []))
      );
  }

  public findByNumber(locoNumber: string): Observable<Vehicle> {
    console.log('LokosService.findByNumber>begin: locoNumber=', locoNumber);
    return this._http
      .get<Vehicle>(
        `${this.HOST_URL}/vehicles?vehicleKind=LOK&nummer=${locoNumber}`
      )
      .pipe(
        first(),
        tap(data => console.log('LokosService.findByNumber>data:', data)),
        catchError(this.handleError('findByNumber', null))
      );
  }

  public updateLoco(loco: Vehicle): Observable<Vehicle> {
    console.log('LokosService.update>begin: loco=', loco);
    return this._http
      .put<Vehicle>(
        // `${this.HOST_URL}/vehicles?vehicleKind=LOK&nummer=${loco.nummer}`,
        `${this.HOST_URL}/vehicles/${loco.id}`,
        loco
      )
      .pipe(
        tap(vehicle =>
          console.log('LokosService.updateLoco>vehicle:', vehicle)
        ),
        catchError(this.handleError('update', loco))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
