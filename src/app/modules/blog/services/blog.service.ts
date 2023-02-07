import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Blog[]> {
    // return this.httpClient.get<Blog[]>(`${env.apiUrl}/api/blogs`)
    return this.httpClient.get<Blog[]>(`${env.apiUrl}/api/blog/list.php`)
  }
  getDetails(id: string): Observable<Blog> {
    // return this.httpClient.get<Blog>(`${env.apiUrl}/api/blogs/${id}`)
    return this.httpClient.get<Blog>(`${env.apiUrl}/api/blog/detail.php?id=${id}`)
  }
  getAllHome(): Observable<Blog[]> {
    // return this.httpClient.get<Blog[]>(`${env.apiUrl}/api/blogs`)
    return this.httpClient.get<Blog[]>(`${env.apiUrl}/api/blog/list.php?where=1&pub=1&limit=3`)
  }
}
