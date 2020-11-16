import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { pluck } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'ui-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { url } = this.router.routerState.snapshot;

    this.activatedRoute.data.pipe(pluck('label')).subscribe((label) => {
      if (label) {
        this.breadcrumbs.push({ url, label });
      }
    });
  }
}
