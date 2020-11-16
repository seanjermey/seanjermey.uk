import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { systemReducer, SystemState } from './system.reducer';
import { authReducer, AuthState } from '../../auth/auth.reducer';

export interface AppState {
  system: SystemState;
  router: RouterReducerState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  system: systemReducer,
  router: routerReducer,
  auth: authReducer,
};
