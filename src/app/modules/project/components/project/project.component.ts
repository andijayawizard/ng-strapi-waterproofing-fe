import { Component } from '@angular/core';
import env from 'src/environments/environment';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  apiUrl: string = env.apiUrl
  data: any[] = []
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    this.projectService.getAll().subscribe({
      next: (res: any) => { this.data = res.items }
    })
  }
}
