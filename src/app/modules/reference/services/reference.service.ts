import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { Reference } from '../interfaces/reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Reference> {
    return this.http.get<Reference>(`${env.apiUrl}/api/references-category/list.php?where=1&pub=1`)
  }
}
