import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../types';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ui-projects-widget',
  templateUrl: './projects-widget.component.html',
  styleUrls: ['./projects-widget.component.scss'],
})
export class ProjectsWidgetComponent implements OnInit {
  title = 'Projects';
  showModal = false;
  @Input() projects: Project[];

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
