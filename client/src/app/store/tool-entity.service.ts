import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Tool } from '../types';

@Injectable({ providedIn: 'root' })
export class ToolEntityService extends EntityCollectionServiceBase<Tool> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Tool', serviceElementsFactory);
  }
}
