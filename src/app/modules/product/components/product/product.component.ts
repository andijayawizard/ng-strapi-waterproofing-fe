import { Component } from '@angular/core';
import env from 'src/environments/environment';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  apiUrl: any = env.apiUrl
  product: any[] = []
  constructor(private productService: ProductService) { }
  ngOnInit(): void { this.getAll() }
  getAll(): void {
    this.productService.getAll().subscribe({
      next: (res: any) => { this.product = res.items }
    })
  }
}
