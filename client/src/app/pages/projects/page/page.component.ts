import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../types';
import { ProjectEntityService } from '../../../store/project-entity.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(
    public auth: AuthService,
    private projectEntityService: ProjectEntityService
  ) {
    this.projects$ = this.projectEntityService.entities$;
  }

  ngOnInit(): void {}
}
