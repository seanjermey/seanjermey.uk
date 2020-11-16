import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Project } from '../types';

@Injectable({ providedIn: 'root' })
export class ProjectEntityService extends EntityCollectionServiceBase<Project> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Project', serviceElementsFactory);
  }
}
