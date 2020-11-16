import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../types';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ProjectEntityService } from '../../../store/project-entity.service';

@Component({
  selector: 'ui-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  showModal = false;
  form: FormGroup;

  @Input() mode: 'edit' | 'create';
  @Input() project: Project = {
    id: undefined,
    title: '',
    description: '',
    url: '',
    cover: {
      title: '',
      url: '',
    },
    featured: false,
  };

  constructor(private projectEntityService: ProjectEntityService) {}

  ngOnInit(): void {
    const { id, title, description, url, cover, featured } = this.project;

    this.form = new FormGroup({
      id: new FormControl(id),
      title: new FormControl(title),
      description: new FormControl(description),
      url: new FormControl(url),
      cover: new FormControl(cover.url),
      featured: new FormControl(featured),
    });
  }

  onSubmit(): void {
    const { value, invalid } = this.form;

    if (invalid) {
      return;
    }

    const project: Project = {
      id: value.id,
      title: value.title,
      description: value.description,
      cover: {
        title: `${value.title} cover`,
        url: value.cover,
      },
      url: value.url,
      featured: value.featured,
    };

    this.projectEntityService.upsert(project).pipe(
      tap((value) => {
        this.form.reset();
      })
    );
  }

  onDelete(): void {
    if (typeof this.project.id !== 'undefined') {
      this.projectEntityService.delete(this.project);
    }
  }
}
