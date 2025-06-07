import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url = '/api/customers';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.url);
  }
  getById(id: number) {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  create(data: any) {
    return this.http.post(this.url, data);
  }
  update(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
