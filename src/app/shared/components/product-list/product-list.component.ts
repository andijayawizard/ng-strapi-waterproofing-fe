import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetItems } from 'src/app/store/actions';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(private productService: ProductService, private store: Store<{ items: [], cart: [] }>) { }
  @Input() products: Product[] = []
  throttle = 300
  scrollDistance = 0.2
  limit = 20
  page = 1

  onScrollEnd() {
    this.page += 1
    if (this.page <= 5) {
      this.store.dispatch(new GetItems({ page: this.page, limit: this.limit }))
    }
  }
}
