import { Injectable } from '@angular/core';
import { StoragePayload } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveToStorage(key: string, data: any) {
    const payload: StoragePayload = {
      expiresAt: new Date().getTime() + 86400000,
      data,
    };

    localStorage.setItem(key, JSON.stringify(payload));
  }

  loadFromStorage(key) {
    const payload: StoragePayload = JSON.parse(localStorage.getItem(key));

    if (
      payload &&
      'data' in payload &&
      'expiresAt' in payload &&
      new Date(payload.expiresAt) > new Date()
    ) {
      return payload.data;
    }

    localStorage.removeItem(key);
  }
}
