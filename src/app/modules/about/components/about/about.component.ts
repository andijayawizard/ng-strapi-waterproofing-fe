import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuWebsiteService } from 'src/app/modules/menu-website/services/menu-website.service';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title: string = 'About Us'
  data: any
  constructor(private aboutService: AboutService) { }
  ngOnInit(): void { this.aboutUs() }
  aboutUs(): void {
    // const id: any = this.activatedRoute.snapshot.paramMap.get('id')
    this.aboutService.aboutUs().subscribe({
      next: (res: any) => { this.data = res.items }
    })
  }
}
