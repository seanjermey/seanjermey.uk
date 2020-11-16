import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../types';
import { ProductEntityService } from '../../../store/product-entity.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    public auth: AuthService,
    private productEntityService: ProductEntityService
  ) {
    this.products$ = this.productEntityService.entities$;
  }

  ngOnInit(): void {}
}
