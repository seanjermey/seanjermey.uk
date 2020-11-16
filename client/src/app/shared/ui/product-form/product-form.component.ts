import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../types';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ProductEntityService } from '../../../store/product-entity.service';

@Component({
  selector: 'ui-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  showModal = false;
  form: FormGroup;

  @Input() mode: 'edit' | 'create';
  @Input() product: Product = {
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

  constructor(private productEntityService: ProductEntityService) {}

  ngOnInit(): void {
    const { id, title, description, url, cover, featured } = this.product;

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

    const product: Product = {
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

    this.productEntityService.upsert(product).pipe(
      tap((value) => {
        this.form.reset();
      })
    );
  }

  onDelete(): void {
    if (typeof this.product.id !== 'undefined') {
      this.productEntityService.delete(this.product);
    }
  }
}
