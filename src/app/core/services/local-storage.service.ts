import { Injectable } from '@angular/core';

export interface LocalStorageRepository {
  setItem(key: string, value: any): void;
  getItem(key: string): any;
  removeItem(key: string): void;
  clear(): void;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements LocalStorageRepository {
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
