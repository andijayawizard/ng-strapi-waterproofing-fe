import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { MenuWebsite } from '../interfaces/menu-website';

@Injectable({
  providedIn: 'root'
})
export class MenuWebsiteService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<MenuWebsite[]> {
    return this.http.get<MenuWebsite[]>(`${env.apiUrl}/api/menuweb/list.php?where=1&pub=1`)
  }
}
