import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToolEntityService } from '../tool-entity.service';
import { filter, first, tap } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ToolsResolver implements Resolve<boolean> {
  constructor(
    private entityService: ToolEntityService,
    private storageService: LocalStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.entityService.loaded$.pipe(
      tap((value) => {
        if (!value) {
          //   const fromStorage = this.storageService.loadFromStorage('tools');
          //   if (fromStorage) {
          //     return this.entityService.addAllToCache(fromStorage);
          //   }

          return this.entityService.getAll().subscribe((value) => {
            this.storageService.saveToStorage('tools', value);
          });
        }
      }),
      filter((v) => !!v),
      first()
    );
  }
}
