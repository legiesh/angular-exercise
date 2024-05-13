// models/search-result.model.ts
export interface SearchResult {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  matches:Object;
  description: string;
  links: Object;
  company_number: string;
  title: string;
  company_type: string;
  address: Object;
}


export interface ApiResponse {
  items: SearchResult[];
  page_number: number;
  kind: string;
  total_results: number;  
}

// officers.model.ts
export interface Officer {
  
}