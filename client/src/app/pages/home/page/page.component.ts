import { Component, OnInit } from '@angular/core';
import * as T from '../../../types';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ToolEntityService } from '../../../store/tool-entity.service';
import { ProductEntityService } from '../../../store/product-entity.service';
import { ProjectEntityService } from '../../../store/project-entity.service';
import { ServiceEntityService } from '../../../store/service-entity.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class HomePageComponent implements OnInit {
  tools$: Observable<T.Tool[]>;
  products$: Observable<T.Product[]>;
  projects$: Observable<T.Project[]>;
  services$: Observable<T.Service[]>;

  constructor(
    private route: ActivatedRoute,
    private productEntityService: ProductEntityService,
    private projectEntityService: ProjectEntityService,
    private serviceEntityService: ServiceEntityService,
    private toolEntityService: ToolEntityService
  ) {
    this.tools$ = this.toolEntityService.entities$.pipe(
      map((dt) => dt.filter((el) => el.featured))
    );
    this.products$ = this.productEntityService.entities$.pipe(
      map((dt) => dt.filter((el) => el.featured))
    );
    this.projects$ = this.projectEntityService.entities$.pipe(
      map((dt) => dt.filter((el) => el.featured))
    );
    this.services$ = this.serviceEntityService.entities$.pipe(
      map((dt) => dt.filter((el) => el.featured))
    );
  }

  ngOnInit(): void {}
}
