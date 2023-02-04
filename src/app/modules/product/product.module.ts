import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PipeModule } from 'src/app/shared/modules/pipe/pipe.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule, PipeModule
  ]
})
export class ProductModule { }
