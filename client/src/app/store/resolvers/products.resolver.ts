import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEntityService } from '../product-entity.service';
import { filter, first, tap } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<boolean> {
  constructor(
    private entityService: ProductEntityService,
    private storageService: LocalStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.entityService.loaded$.pipe(
      tap((v) => {
        if (!v) {
          // const fromStorage = this.storageService.loadFromStorage('products');
          // if (fromStorage) {
          //   return this.entityService.addAllToCache(fromStorage);
          // }

          return this.entityService.getAll().subscribe((value) => {
            this.storageService.saveToStorage('products', value);
          });
        }
      }),
      filter((v) => !!v),
      first()
    );
  }
}
