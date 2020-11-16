import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../types';
import { AuthService } from '../../../auth/auth.service';
import { ProductEntityService } from '../../../store/product-entity.service';

@Component({
  selector: 'ui-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  showModal = false;
  @Input() product: Product;

  constructor(
    public auth: AuthService,
    private productEntityService: ProductEntityService
  ) {}

  ngOnInit(): void {}

  setFeatured(): void {
    this.productEntityService.update({
      ...this.product,
      featured: !this.product.featured,
    });
  }
}
