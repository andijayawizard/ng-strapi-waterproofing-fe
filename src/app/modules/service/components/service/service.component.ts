import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service: ServiceService, private router: Router) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    if (this.isHomeRouter()) {
      this.service.getAllHome().subscribe({
        next: (res: any) => { this.data = res.items }
      })
    } else {
      this.service.getAll().subscribe({
        next: (res: any) => { this.data = res.items }
      })
    }
  }
  isHomeRouter() {
    return this.router.url == '/'
  }
}
