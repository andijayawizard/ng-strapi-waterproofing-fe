import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSlideRoutingModule } from './image-slide-routing.module';
import { ImageSlideComponent } from './components/image-slide/image-slide.component';


@NgModule({
  declarations: [
    ImageSlideComponent
  ],
  imports: [
    CommonModule,
    ImageSlideRoutingModule
  ],
  exports: [ImageSlideComponent]
})
export class ImageSlideModule { }
