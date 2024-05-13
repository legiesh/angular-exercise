// authentication.component.ts
import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth.model';
import { SharedDataService } from '../../services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  @Output() modalClose: EventEmitter<void> = new EventEmitter<void>();
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showAuthenticationModal: boolean = false;

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService,
              private sharedDataService: SharedDataService,
              private router: Router
  ) { }

  login() {
    console.log('Form validity:', this.loginForm.valid);
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    const loginRequest: LoginRequest = { username: this.username, password: this.password };
    this.authService.login(loginRequest)
      .subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful', response);

          // Navigate to company details route
          const companyNumber = this.sharedDataService.companyDetails?.company_number;
          if (companyNumber) {
            this.router.navigate(['/company', companyNumber]);
          }
          
          // Optionally, close the authentication popup
          this.modalClose.emit();
        },
        (error) => {
          // Handle login error
          console.error('Login error:', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
  }
  closeModal() {
    this.modalClose.emit();
  }
}
