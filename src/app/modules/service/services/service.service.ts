import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { Service } from '../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(`${env.apiUrl}/api/services/list.php`)
  }
  getDetails(id: string): Observable<Service> {
    return this.http.get<Service>(`${env.apiUrl}/api/services/detail.php?id=${id}`)
  }
}
