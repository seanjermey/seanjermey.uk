import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolEntityService } from '../../../store/tool-entity.service';
import { Tool } from '../../../types';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ui-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.scss'],
})
export class ToolFormComponent implements OnInit {
  showModal = false;
  form: FormGroup;

  @Input() mode: 'edit' | 'create';
  @Input() tool: Tool = {
    id: undefined,
    title: '',
    description: '',
    url: '',
    logo: {
      title: '',
      url: '',
    },
    featured: false,
  };

  constructor(private toolEntityService: ToolEntityService) {}

  ngOnInit(): void {
    const { id, title, description, url, logo, featured } = this.tool;

    this.form = new FormGroup({
      id: new FormControl(id, []),
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      url: new FormControl(url, [Validators.required]),
      logo: new FormControl(logo.url, [Validators.required]),
      featured: new FormControl(featured),
    });
  }

  onSubmit() {
    const { value, invalid } = this.form;

    if (invalid) {
      return;
    }

    const tool: Tool = {
      id: value.id,
      title: value.title,
      description: value.description,
      url: value.url,
      logo: {
        title: `${value.title} logo`,
        url: value.logo,
      },
      featured: value.featured,
    };

    this.toolEntityService.upsert(tool).pipe(
      tap((value) => {
        this.form.reset();
      })
    );
  }

  onDelete(): void {
    if (typeof this.tool.id !== 'undefined') {
      this.toolEntityService.delete(this.tool);
    }
  }
}
