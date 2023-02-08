import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';
import { PipeModule } from 'src/app/shared/modules/pipe/pipe.module';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
  declarations: [
    AboutComponent, BannerComponent, HeaderComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule, PipeModule
  ],
  exports: [AboutComponent, BannerComponent, HeaderComponent],
})
export class AboutModule { }
