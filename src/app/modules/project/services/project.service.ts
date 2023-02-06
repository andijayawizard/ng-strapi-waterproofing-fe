import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Project> {
    return this.http.get<Project>(`${env.apiUrl}/api/projects/list.php?where=1&pub=1`)
  }
}
