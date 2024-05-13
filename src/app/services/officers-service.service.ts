// officers.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class OfficersService {
  private apiUrl = 'api/TruProxyAPI/rest/Companies/v1/Officers';

  constructor(private http: HttpClient) {}

  getOfficers(companyNumber: string): Observable<any> {
    const apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf';
    const url = `${this.apiUrl}?CompanyNumber=${companyNumber}`;
    return this.http.get<ApiResponse>(url, { headers: { 'x-api-key': apiKey } })
      .pipe(
      catchError(error => {
        console.error('Error occurred while fetching officers:', error);
        throw error;
      })
    );
  }
}
