// search-results.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SearchResult, ApiResponse } from '../../models/search-result.model';
import { SharedDataService } from '../../services/shared-data.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchResults: SearchResult[] = [];
  paginatedResults: SearchResult[] = [];
  showAuthenticationModal: boolean = false;   
  searchTerm: string = '';
  loading: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  private searchResultsSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sharedDataService: SharedDataService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['query'] || '';
      this.fetchSearchResults();
    });
  }

  fetchSearchResults() {
    if (this.searchTerm.trim() !== '') {
      this.loading = true;
      this.searchResultsSubscription = this.searchService.performSearch(this.searchTerm)
        .subscribe((response: ApiResponse) => {
          if (response && response.items) {
            this.searchResults = response.items;
            this.paginateResults();
          } else {
            this.searchResults = [];
            this.paginatedResults = [];
          }
          this.loading = false;

        });
    }
  }

  paginateResults() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedResults = this.searchResults.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.paginateResults();
  }

  ngOnDestroy() {
    if (this.searchResultsSubscription) {
      this.searchResultsSubscription.unsubscribe();
    }
  }

  onSelectCompany(company: SearchResult) {
    // Check if the user is authenticated
    this.authService.isAuthenticated().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // If authenticated, navigate to company details directly
        this.navigateToCompanyDetails(company);
      } else {
        // If not authenticated, show the login modal
        this.showAuthenticationModal = true;
      }
    });
  }

  private navigateToCompanyDetails(company: SearchResult) {
    // Set company details in shared service
    this.sharedDataService.companyDetails = company;
    // Navigate to company details route
    const companyNumber = company.company_number;
    if (companyNumber) {
      this.router.navigate(['/company', companyNumber]);
    }
  }
  onLoginSuccess() {
    // Navigate to company details route
    const companyNumber = this.sharedDataService.companyDetails?.company_number;
    if (companyNumber) {
      this.router.navigate(['/company', companyNumber]);
    }
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.searchResults.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  totalPages(): number {
    return Math.ceil(this.searchResults.length / this.itemsPerPage);
  }

  closeAuthenticationModal() {
    this.showAuthenticationModal = false;
  }
}
