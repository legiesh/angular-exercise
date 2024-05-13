export interface AuthUser {
    username: string;    
  }
  
export interface LoginRequest {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    success: boolean;
  }  