import { Component } from '@angular/core';
import { ReferenceService } from '../../services/reference.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {
  data: any[] = []
  constructor(private service: ReferenceService) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    this.service.getAll().subscribe({
      next: (res: any) => { this.data = res.items }
    })
  }
}
