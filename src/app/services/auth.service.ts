// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState, User } from '../models/app-state.model';
import { LoginRequest, LoginResponse } from '../models/auth.model';
import * as AuthActions from '../store/auth.actions';
import * as AuthSelectors from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'your-auth-api-url';

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  login(loginRequest: LoginRequest): Observable<boolean> {  
    return of(true).pipe(
      map(() => {
        const user: User = {
          id: 123, // Mock ID
          email: 'user@example.com', // Mock email
          username: loginRequest.username,          
        };
        // Dispatch action to update authentication state
        this.store.dispatch(AuthActions.login());
        return true;
      }),
      catchError((error:any) => {        
        return of(false);
      })
    );
  }

  logout(): void {
    // Dispatch action to update authentication state
    this.store.dispatch(AuthActions.logout());
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.pipe(
      select(AuthSelectors.isLoggedIn)
    );
  }   
}
