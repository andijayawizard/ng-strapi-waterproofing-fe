import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product: any
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void { this.getDetails() }
  getDetails(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id')
    this.productService.getDetails(id).subscribe({
      next: (res: any) => { this.product = res.data }
    })
  }
}
