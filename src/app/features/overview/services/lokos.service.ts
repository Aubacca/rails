import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LokosService {
  constructor(private _http: HttpClient) {}

  public findAll(): Observable<Vehicle[]> {
    console.log('LokosService.findAll>begin');
    return this._http.get<Vehicle[]>('http://localhost:3000/loks').pipe(
      tap(data => console.log('data:', data)),
      catchError(this.handleError('findAll', []))
    );
  }

  public findByNumber(locoNumber: string): Observable<Vehicle> {
    console.log('LokosService.findByNumber>begin: locoNumber=', locoNumber);
    return this._http
      .get<Vehicle>(
        `http://localhost:3000/vehicles?vehicleKind=LOK&nummer=${locoNumber}`
      )
      .pipe(
        tap(data => console.log('LokosService.findByNumber>data:', data)),
        catchError(this.handleError('findByNumber', null))
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
