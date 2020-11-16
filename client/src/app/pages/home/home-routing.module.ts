import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/page.component';
import { ToolsResolver } from '../../store/resolvers/tools.resolver';
import { ProductsResolver } from '../../store/resolvers/products.resolver';
import { ProjectsResolver } from '../../store/resolvers/projects.resolver';
import { ServicesResolver } from '../../store/resolvers/services.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      tools: ToolsResolver,
      products: ProductsResolver,
      projects: ProjectsResolver,
      services: ServicesResolver,
    },
    data: {
      label: 'Home',
      icon: 'home',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    ToolsResolver,
    ProductsResolver,
    ProjectsResolver,
    ServicesResolver,
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
