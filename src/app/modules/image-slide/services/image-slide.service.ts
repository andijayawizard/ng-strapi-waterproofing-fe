import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { ImageSlide } from '../interfaces/image-slide';

@Injectable({
  providedIn: 'root'
})
export class ImageSlideService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<ImageSlide[]> {
    return this.http.get<ImageSlide[]>(`${env.apiUrl}/api/image-slide/list.php?where=1&pub=1`)
  }
}
