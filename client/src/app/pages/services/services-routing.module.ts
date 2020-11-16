import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesPageComponent } from './page/page.component';
import { ServicesResolver } from '../../store/resolvers/services.resolver';

const routes: Routes = [
  {
    path: '',
    component: ServicesPageComponent,
    resolve: {
      services: ServicesResolver,
    },
    data: {
      label: 'Services',
      icon: 'cog',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
