import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import env from 'src/environments/environment';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  blog: any
  apiUrl: string = env.apiUrl
  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void { this.getDetails() }
  getDetails(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id')
    this.blogService.getDetails(id).subscribe({
      next: (res: any) => { this.blog = res.items },
      error: (err) => {
        console.log('http error: ', err);
      }
    })
  }
}
