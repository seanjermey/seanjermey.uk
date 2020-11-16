import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { PageComponent } from './page/page.component';
import { ProjectsResolver } from '../../store/resolvers/projects.resolver';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [PageComponent],
  providers: [ProjectsResolver],
  imports: [CommonModule, ProjectsRoutingModule, UiModule],
})
export class ProjectsModule {}
