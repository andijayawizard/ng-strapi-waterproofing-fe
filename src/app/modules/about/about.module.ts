import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';
import { PipeModule } from 'src/app/shared/modules/pipe/pipe.module';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ProductListComponent } from 'src/app/shared/components/product-list/product-list.component';
import { ProductComponent } from 'src/app/shared/components/product/product.component';


@NgModule({
  declarations: [
    AboutComponent, BannerComponent, HeaderComponent, ProductListComponent, ProductComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule, PipeModule
  ],
  exports: [AboutComponent, BannerComponent, HeaderComponent, ProductListComponent, ProductComponent],
})
export class AboutModule { }
