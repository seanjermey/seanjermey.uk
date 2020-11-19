import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../../types';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ServiceEntityService } from '../../../store/service-entity.service';

@Component({
  selector: 'ui-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
  showModal = false;
  form: FormGroup;

  @Input() mode: 'edit' | 'create';
  @Input() service: Service = {
    id: undefined,
    title: '',
    description: '',
    url: '',
    cover: {
      url: '',
      title: '',
    },
    featured: false,
  };

  constructor(private serviceEntityService: ServiceEntityService) {}

  ngOnInit(): void {
    const { id, title, description, url, cover, featured } = this.service;

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

    const service: Service = {
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

    this.serviceEntityService.upsert(service);

    this.form.reset();
    this.showModal = false;
  }

  onDelete(): void {
    if (typeof this.service.id !== 'undefined') {
      this.serviceEntityService.delete(this.service);
    }
  }
}
