import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/page.component';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule],
})
export class HomeModule {}
