// search.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';



  constructor(private router: Router) { }

  performSearch() {
    if (this.searchTerm.trim() !== '') {      
      this.router.navigate(['/search-results'], { queryParams: { query: this.searchTerm } });
    }
  }

  isValidSearchTerm(): boolean {
    // Validation
    return this.searchTerm.trim().length > 0;
  }  
}
