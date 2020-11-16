import { Injectable } from '@angular/core';
import { concatMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { dataServiceConfig } from '../config/data-service.config';
import { login, logout } from './auth.actions';
import { Auth } from './auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject(null);

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  logout() {
    console.log('loggin out...');

    this.isLoggedIn$.next(false);
    this.store.dispatch(logout());
  }

  login(username, password) {
    return this.http
      .post(`${dataServiceConfig.root}/auth/login`, {
        username,
        password,
      })
      .pipe(
        tap((auth: Auth) => {
          if (auth.accessToken) {
            this.isLoggedIn$.next(true);
            this.store.dispatch(login(auth));
          }
        })
      );
  }

  checkAuth() {
    this.store
      .select((s) => s.auth.accessToken)
      .pipe(
        concatMap((accessToken) => {
          if (!accessToken) {
            return of(false);
          }

          return this.http.get<boolean>(
            `${dataServiceConfig.root}/auth/logged-in`,
            {
              withCredentials: true,
              headers: {
                accessToken,
              },
            }
          );
        }),
        tap((loggedIn) => {
          this.isLoggedIn$.next(loggedIn);
        })
      );
  }
}
