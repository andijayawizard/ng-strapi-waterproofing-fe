import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutModule } from '../about/about.module';
import { ServiceModule } from '../service/service.module';
import { FactComponent } from 'src/app/shared/components/fact/fact.component';
import { FaqsComponent } from 'src/app/shared/components/faqs/faqs.component';
import { FeatureComponent } from 'src/app/shared/components/feature/feature.component';
import { VideoComponent } from 'src/app/shared/components/video/video.component';
import { TeamComponent } from 'src/app/shared/components/team/team.component';
import { TestimonialComponent } from 'src/app/shared/components/testimonial/testimonial.component';
import { BlogModule } from '../blog/blog.module';


@NgModule({
  declarations: [
    HomeComponent, FactComponent, FaqsComponent, FeatureComponent, VideoComponent, TeamComponent, TestimonialComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, AboutModule, ServiceModule, BlogModule
  ],
  exports: [],
})
export class HomeModule { }
