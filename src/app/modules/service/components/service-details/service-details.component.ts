import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import env from 'src/environments/environment';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent {
  apiUrl: string = env.apiUrl
  blog: any
  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void { this.getDetails() }
  getDetails(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id')
    this.service.getDetails(id).subscribe({
      next: (res: any) => { this.blog = res.items }
    })
  }
}
