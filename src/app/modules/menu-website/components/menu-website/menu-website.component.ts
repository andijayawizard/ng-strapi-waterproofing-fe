import { Component } from '@angular/core';
import { MenuWebsiteService } from '../../services/menu-website.service';

@Component({
  selector: 'app-menu-website',
  templateUrl: './menu-website.component.html',
  styleUrls: ['./menu-website.component.scss']
})
export class MenuWebsiteComponent {
  data: any[] = []
  constructor(private menuWebsiteService: MenuWebsiteService) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    this.menuWebsiteService.getAll().subscribe({
      next: (res: any) => { this.data = res.items }
    })
  }
}
