import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Service } from '../types';

@Injectable({ providedIn: 'root' })
export class ServiceEntityService extends EntityCollectionServiceBase<Service> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Service', serviceElementsFactory);
  }
}
