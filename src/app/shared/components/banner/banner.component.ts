import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from 'src/app/store/actions';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(private store: Store<{ items: Product[], cart: [] }>) {
    store.pipe().subscribe((data: any) => { this.items = data.items })
  }
  items: Product[] = []
  banners = [{
    src:
      "https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
    alt: "A tasty treat"
  },
  {
    src:
      "https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
    alt: "Chocolate covered pancakes"
  },
  {
    src:
      "https://images.pexels.com/photos/68899/pexels-photo-68899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
    alt: "Burger and fries"
  },
  {
    src:
      "https://images.pexels.com/photos/165776/pexels-photo-165776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
    alt: "Get ready to slice"
  }]
  ngOnInit() {
    this.store.dispatch(new GetItems({ page: 1, limit: 20 }))
  }
}
