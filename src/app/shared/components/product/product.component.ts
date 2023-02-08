import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from 'src/app/store/actions';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private store: Store<{ items: [], cart: [] }>) { }
  inCart = false
  @Input() product!: Product
  addToCart(item: Product) {
    this.store.dispatch(new AddToCart(item))
    this.inCart = true
  }
  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item))
    this.inCart = false
  }
}
