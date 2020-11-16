import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../types';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ui-products-widget',
  templateUrl: './products-widget.component.html',
  styleUrls: ['./products-widget.component.scss'],
})
export class ProductsWidgetComponent implements OnInit {
  title = 'Products';
  showModal = false;
  @Input() products: Product[];

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
