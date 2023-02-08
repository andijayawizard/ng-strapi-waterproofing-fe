import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private store: Store<{ items: [], cart: [] }>) {
    store.pipe().subscribe((data: any) => { this.cart = data.cart })
  }
  cart: Product[] = []
}
