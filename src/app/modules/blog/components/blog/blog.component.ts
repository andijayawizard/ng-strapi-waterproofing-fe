import { Component } from '@angular/core';
import env from 'src/environments/environment';
import { Blog } from '../../interfaces/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blog: any | Blog[] = []
  apiUrl: string = env.apiUrl
  constructor(private blogService: BlogService) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    this.blogService.getAll().subscribe({
      next: (res: any) => { this.blog = res.items },
      error: (err) => {
        console.log('http error: ', err);
      }
    })
  }
}
