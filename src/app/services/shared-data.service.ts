// shared-data.service.ts
import { Injectable } from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  companyDetails: SearchResult | undefined;

  constructor() { }
}
