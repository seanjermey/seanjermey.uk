import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { ToolCardComponent } from './tool-card/tool-card.component';
import { ToolsWidgetComponent } from './tools-widget/tools-widget.component';
import { ProductsWidgetComponent } from './products-widget/products-widget.component';
import { ProjectsWidgetComponent } from './projects-widget/projects-widget.component';
import { ServicesWidgetComponent } from './services-widget/services-widget.component';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { AuthModule } from '../../auth/auth.module';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    InputComponent,
    JumbotronComponent,
    LoaderComponent,
    LogoComponent,
    ModalComponent,
    NavigationComponent,
    ProductsWidgetComponent,
    ProjectsWidgetComponent,
    ServicesWidgetComponent,
    SidebarComponent,
    SocialLinksComponent,
    ToolCardComponent,
    ToolFormComponent,
    ToolsWidgetComponent,
    ServiceCardComponent,
    ProductCardComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProductFormComponent,
    ServiceFormComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    BreadcrumbsComponent,
    InputComponent,
    JumbotronComponent,
    LoaderComponent,
    LogoComponent,
    ModalComponent,
    NavigationComponent,
    ProductsWidgetComponent,
    ProjectsWidgetComponent,
    ServicesWidgetComponent,
    SidebarComponent,
    SocialLinksComponent,
    ToolCardComponent,
    ToolFormComponent,
    ToolsWidgetComponent,
    ServiceCardComponent,
    ServiceFormComponent,
    ProjectFormComponent,
    ProjectCardComponent,
    ProductCardComponent,
    ProductFormComponent,
  ],
})
export class UiModule {}
