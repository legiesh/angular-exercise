// auth.actions.ts
import { createAction } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const logout = createAction('[Auth] Logout');

// import { createAction, props } from '@ngrx/store';
// import { User } from '../../models/app-state.model';

// // Action types
// export const login = createAction('[Auth] Login', props<{ username: string, password: string }>());
// export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User }>());
// export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
// export const logout = createAction('[Auth] Logout');
// export const logoutSuccess = createAction('[Auth] Logout Success');

// // Other authentication-related actions can be added similarly
