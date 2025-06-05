import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        name: '無線藍牙耳機',
        price: 1290,
        description: '高音質、長效電力、支援降噪功能',
        imageUrl: 'https://via.placeholder.com/300x200?text=Product+1'
      },
      {
        id: 2,
        name: '機械式鍵盤',
        price: 2390,
        description: '青軸打字爽感，RGB 背光',
        imageUrl: 'https://via.placeholder.com/300x200?text=Product+2'
      },
      {
        id: 3,
        name: '曲面顯示器',
        price: 4990,
        description: '27 吋 144Hz 曲面螢幕，沉浸體驗',
        imageUrl: 'https://via.placeholder.com/300x200?text=Product+3'
      }
    ];
    return { products };
  }
}
