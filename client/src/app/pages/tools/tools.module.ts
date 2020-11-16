import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { PageComponent } from './page/page.component';
import { ToolsResolver } from '../../store/resolvers/tools.resolver';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [PageComponent],
  providers: [ToolsResolver],
  imports: [CommonModule, ToolsRoutingModule, UiModule],
})
export class ToolsModule {}
