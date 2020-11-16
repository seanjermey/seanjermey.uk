import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    data: {
      label: 'Home',
      icon: 'home',
    },
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
    data: {
      label: 'Services',
      icon: 'cog',
    },
  },
  {
    path: 'tools',
    loadChildren: () =>
      import('./pages/tools/tools.module').then((m) => m.ToolsModule),
    data: {
      label: 'Tools',
      icon: 'tools',
    },
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
    data: {
      label: 'Products',
      icon: 'plug',
    },
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
    data: {
      label: 'Projects',
      icon: 'cogs',
    },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
    data: {
      label: 'Contact',
      icon: 'envelope-o',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
