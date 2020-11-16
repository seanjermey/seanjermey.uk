import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ProjectsResolver } from '../../store/resolvers/projects.resolver';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    resolve: {
      projects: ProjectsResolver,
    },
    data: {
      label: 'Projects',
      icon: 'cogs',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
