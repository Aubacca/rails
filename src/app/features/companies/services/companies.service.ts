import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private readonly ROOT_SERVICE_URL = 'http://localhost:3000';
  private readonly _URL = 'http://localhost:3000/companies';

  constructor(private _httpClient: HttpClient) {}

  public findAll(): Observable<Company[]> {
    return this._httpClient
      .get<Company[]>(`${this.ROOT_SERVICE_URL}/companies`)
      .pipe(
        map(companies => {
          return companies.sort((pw1, pw2) => pw1.code.localeCompare(pw2.code));
        })
      );
  }
}
