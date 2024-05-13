// company-details.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  companyDetails: SearchResult | undefined;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    // Retrieve company details from shared service
    this.companyDetails = this.sharedDataService.companyDetails;
    console.log('Company Details:', this.companyDetails); 
  }
}
