import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../types';
import { AuthService } from '../../../auth/auth.service';
import { ProjectEntityService } from '../../../store/project-entity.service';

@Component({
  selector: 'ui-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  showModal = false;
  @Input() project: Project;
  @Input() index: number;

  constructor(
    public auth: AuthService,
    private projectEntityService: ProjectEntityService
  ) {}

  ngOnInit(): void {}

  setFeatured(): void {
    this.projectEntityService.update({
      ...this.project,
      featured: !this.project.featured,
    });
  }
}
