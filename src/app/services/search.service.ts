// search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'api/TruProxyAPI/rest/Companies/v1/Search';

  constructor(private http: HttpClient) {}

  performSearch(searchTerm: string): Observable<ApiResponse> {
    const apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf';
    const url = `${this.apiUrl}?Query=${searchTerm}`;

    return this.http.get<ApiResponse>(url, { headers: { 'x-api-key': apiKey } })
      .pipe(
        catchError(error => {
          console.error('Error occurred while searching:', error);
          throw error; 
        })
      );
  }
}
