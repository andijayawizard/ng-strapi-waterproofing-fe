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
    return this.httpClient.get<Blog[]>(`${env.apiUrl}/api/blogs`)
  }
  getDetails(id: string): Observable<Blog> {
    return this.httpClient.get<Blog>(`${env.apiUrl}/api/blogs/${id}`)
  }
}
