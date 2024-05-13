export interface User {
    id: number;
    username: string;
    email: string;    
  }
  
  export interface AppState {
    isAuthenticated: boolean; 
    user: User | null; 
  }
  