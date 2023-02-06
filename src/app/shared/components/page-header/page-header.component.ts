import { Component } from '@angular/core';
import { MenuWebsiteComponent } from 'src/app/modules/menu-website/components/menu-website/menu-website.component';
import { MenuWebsiteService } from 'src/app/modules/menu-website/services/menu-website.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  data: any[] = []
  constructor(private service: MenuWebsiteService) { }
  ngOnInit(): void { this.getHeader() }
  getHeader(): void {
    this.service.getAll().subscribe({
      next: (res: any) => { this.data = res.items }
    })
  }
}
