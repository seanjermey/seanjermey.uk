import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { PageComponent } from './page/page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    StoreModule.forFeature('contact-page', reducers),
  ],
})
export class ContactModule {}
