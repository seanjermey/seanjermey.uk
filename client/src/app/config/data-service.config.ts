import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../environments/environment';

export const dataServiceConfig: DefaultDataServiceConfig = {
  root: `http://${environment.domain}/api`,
  timeout: 3000,
};
