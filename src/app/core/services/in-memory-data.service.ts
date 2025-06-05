import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'MacBook Pro', price: 3000 },
      { id: 2, name: 'iPhone 13', price: 1200 },
      { id: 3, name: 'AirPods Pro', price: 250 }
    ];
    return { products };
  }
}
