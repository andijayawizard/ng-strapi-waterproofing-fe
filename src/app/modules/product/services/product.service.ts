import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${env.API_TOKEN_SALT}`
    })
  }
  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${env.apiUrl}/api/products/list.php?where=1&pub=1`)
    // return this.http.get<Product[]>(`${env.local}/api/products`, this.httpOptions)
  }
  getDetails(id: string): Observable<Product> {
    return this.http.get<Product>(`${env.apiUrl}/api/products/detail.php?id=${id}`)
    // return this.http.get<Product>(`${env.local}/api/products/${id}`, this.httpOptions)
  }
}
