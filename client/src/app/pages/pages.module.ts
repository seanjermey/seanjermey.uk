import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { ProjectsModule } from './projects/projects.module';
import { ServicesModule } from './services/services.module';
import { ToolsModule } from './tools/tools.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactModule,
    HomeModule,
    ProductsModule,
    ProjectsModule,
    ServicesModule,
    ToolsModule,
  ],
  exports: [
    ContactModule,
    HomeModule,
    ProductsModule,
    ProjectsModule,
    ServicesModule,
    ToolsModule,
  ],
})
export class PagesModule {}
