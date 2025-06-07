import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        name: '無線藍牙耳機',
        price: 1290,
        description: '高音質、長效電力、支援降噪功能',
        imageUrl: 'https://via.placeholder.com/300x200?text=Product+1',
      },
      {
        id: 2,
        name: '機械式鍵盤',
        price: 2390,
        description: '青軸打字爽感，RGB 背光',
        imageUrl: 'https://via.placeholder.com/300x200?text=Product+2',
      },
      {
        id: 3,
        name: '曲面顯示器',
        price: 4990,
        description: '27 吋 144Hz 曲面螢幕，沉浸體驗',
        imageUrl: 'https://via.placeholder.com/300x200?text=Product+3',
      },
    ];
    const customers = [
      {
        id: 1,
        name: '王小明',
        email: 'ming@example.com',
        phone: '0912345678',
        address: '台北市信義區',
      },
      {
        id: 2,
        name: '陳美麗',
        email: 'mei@example.com',
        phone: '0922333444',
        address: '高雄市左營區',
      },
      {
        id: 3,
        name: '李大仁',
        email: 'jen@example.com',
        phone: '0933555666',
        address: '新竹市東區',
      },
    ];
    return { products, customers };
  }

  genId<T extends { id: number }>(collection: T[]): number {
    return collection.length > 0
      ? Math.max(...collection.map((item) => item.id)) + 1
      : 1;
  }
}
