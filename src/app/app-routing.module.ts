// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { OfficersListComponent } from './components/officers-list/officers-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, 
  { path: 'search', component: SearchComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { 
    path: 'company/:id', 
    component: CompanyDetailsComponent, 
    canActivate: [AuthGuard] 
  },
  { path: 'officers/:companyNumber', component: OfficersListComponent }, 
  { path: '**', redirectTo: '/search' } 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
