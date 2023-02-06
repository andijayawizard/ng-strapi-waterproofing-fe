import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { About } from '../interfaces/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }
  aboutUs(): Observable<About> {
    return this.http.get<About>(`${env.apiUrl}/api/menuweb/detail.php?id=2`)
  }
}
