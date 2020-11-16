import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ToolsResolver } from '../../store/resolvers/tools.resolver';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    resolve: {
      tools: ToolsResolver,
    },
    data: {
      label: 'Tools',
      icon: 'wrench',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
