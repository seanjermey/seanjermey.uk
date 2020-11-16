import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ThemeModule } from './shared/theme/theme.module';
import { UiModule } from './shared/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  EntityDataService,
} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { ToolDataService } from './store/tool-data.service';
import { dataServiceConfig } from './config/data-service.config';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    UiModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    ToolDataService,
    {
      provide: DefaultDataServiceConfig,
      useValue: dataServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    toolDataService: ToolDataService
  ) {
    entityDataService.registerService('Tool', toolDataService);
  }
}
