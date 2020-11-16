import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectEntityService } from '../project-entity.service';
import { filter, first, tap } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsResolver implements Resolve<boolean> {
  constructor(
    private entityService: ProjectEntityService,
    private storageService: LocalStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.entityService.loaded$.pipe(
      tap((value) => {
        if (!value) {
          // const fromStorage = this.storageService.loadFromStorage('projects');
          // if (fromStorage) {
          //   return this.entityService.addAllToCache(fromStorage);
          // }

          return this.entityService.getAll().subscribe((value) => {
            this.storageService.saveToStorage('projects', value);
          });
        }
      }),
      filter((v) => !!v),
      first()
    );
  }
}
