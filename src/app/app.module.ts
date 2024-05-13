import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchService } from './services/search.service';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { OfficersListComponent } from './components/officers-list/officers-list.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './components/header/header.component';

import { authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    CompanyDetailsComponent,
    OfficersListComponent,
    AuthenticationComponent,
    HeaderComponent,        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 
    }),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
