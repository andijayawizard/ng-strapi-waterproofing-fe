import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { MdToHtmlPipe } from './md-to-html.pipe';


@NgModule({
  declarations: [
    MdToHtmlPipe
  ],
  imports: [
    CommonModule,
    PipeRoutingModule
  ],
  exports: [MdToHtmlPipe]
})
export class PipeModule { }
