import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutModule } from '../about/about.module';
import { ServiceModule } from '../service/service.module';
import { FactComponent } from 'src/app/shared/components/fact/fact.component';
import { FaqsComponent } from 'src/app/shared/components/faqs/faqs.component';
import { FeatureComponent } from 'src/app/shared/components/feature/feature.component';


@NgModule({
  declarations: [
    HomeComponent, FactComponent, FaqsComponent, FeatureComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, AboutModule, ServiceModule
  ],
  exports: [FactComponent, FaqsComponent, FeatureComponent],
})
export class HomeModule { }
