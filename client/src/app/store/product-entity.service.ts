import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Product } from '../types';

@Injectable({ providedIn: 'root' })
export class ProductEntityService extends EntityCollectionServiceBase<Product> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementsFactory);
  }
}
