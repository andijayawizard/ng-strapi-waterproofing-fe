import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  blog: any
  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }
  getDetails(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id')
    this.blogService.getDetails(id).subscribe({
      next: (res) => { this.blog = res },
      error: (err) => {
        console.log('http error: ', err);
      }
    })
  }
}
