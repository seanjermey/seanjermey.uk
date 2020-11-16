import { DefaultDataService, HttpMethods, HttpUrlGenerator } from '@ngrx/data';
import { Tool } from '../types';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataServiceConfig } from '../config/data-service.config';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';

@Injectable()
export class ToolDataService extends DefaultDataService<Tool> {
  /**
   *
   * @param http
   * @param httpUrlGenerator
   * @param store
   */
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private store: Store<AppState>
  ) {
    super('Tool', http, httpUrlGenerator, dataServiceConfig);
  }

  /**
   *
   * @param method
   * @param url
   * @param data
   * @param options
   */
  protected execute(
    method: HttpMethods,
    url: string,
    data?: any,
    options?: any
  ): Observable<any> {
    if (['DELETE', 'POST', 'PUT'].includes(method)) {
      options = {
        headers: {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlYW5qZXJtZXkiLCJpYXQiOjE2MDI2NzA1OTQsImV4cCI6MTYwMjY3NDE5NH0.prKyfRcgmZ2Fj8O8VKFQg_ldH4DiDAp8MyxkdDSKd54',
        },
        withCredentials: true,
      };
    }

    return super.execute(method, url, data, options);
  }
}
