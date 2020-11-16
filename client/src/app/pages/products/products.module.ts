import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PageComponent } from './page/page.component';
import { ProductsResolver } from '../../store/resolvers/products.resolver';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [PageComponent],
  providers: [ProductsResolver],
  imports: [CommonModule, ProductsRoutingModule, UiModule],
})
export class ProductsModule {}
