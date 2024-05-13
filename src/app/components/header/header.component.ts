// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import * as AuthActions from '../../store/auth.actions';
import { isLoggedIn } from '../../store/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$ = this.store.select(isLoggedIn);
  showAuthenticationModal: boolean = false;
  isLoggedIn: boolean | null = null; 

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Subscribe to the login state
    this.isLoggedIn$.subscribe(isLoggedIn => {
      console.log('isLoggedIn:', isLoggedIn);
      // Update the login status
      this.isLoggedIn = isLoggedIn;
    });
  }

  login(): void {
    // Dispatch login action
    this.showAuthenticationModal = true;
  }

  logout(): void {
    // Dispatch logout action
    this.store.dispatch(AuthActions.logout());
  }

  openAuthenticationModal() {
    this.showAuthenticationModal = true;
  }

  closeAuthenticationModal() {
    this.showAuthenticationModal = false;
  }
  
}

