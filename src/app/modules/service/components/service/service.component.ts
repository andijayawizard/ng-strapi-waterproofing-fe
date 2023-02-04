import { Component } from '@angular/core';
import env from 'src/environments/environment';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  apiUrl: string = env.apiUrl
  data: any[] = []
  constructor(private service: ServiceService) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    this.service.getAll().subscribe({
      next: (res: any) => { this.data = res.items }
    })
  }
}
