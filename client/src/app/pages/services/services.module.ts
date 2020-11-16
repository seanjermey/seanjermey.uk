import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesPageComponent } from './page/page.component';
import { ServicesResolver } from '../../store/resolvers/services.resolver';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [ServicesPageComponent],
  providers: [ServicesResolver],
  imports: [CommonModule, ServicesRoutingModule, UiModule],
})
export class ServicesModule {}
