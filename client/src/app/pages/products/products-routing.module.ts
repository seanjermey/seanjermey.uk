import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ProductsResolver } from '../../store/resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    resolve: {
      products: ProductsResolver,
    },
    data: {
      label: 'Products',
      icon: 'plug',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
