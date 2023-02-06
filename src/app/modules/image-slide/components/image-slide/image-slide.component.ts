import { Component } from '@angular/core';
import env from 'src/environments/environment';
import { ImageSlideService } from '../../services/image-slide.service';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss']
})
export class ImageSlideComponent {
  apiUrl: string = env.apiUrl
  data: any[] = []
  constructor(private service: ImageSlideService) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    this.service.getAll().subscribe({
      next: (res: any) => { this.data = res.items }
    })
  }
}
