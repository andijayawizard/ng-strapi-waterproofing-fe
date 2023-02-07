import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FeatureModule } from '../feature/feature.module';
import { AboutModule } from '../about/about.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, FeatureModule, AboutModule
  ],
  exports: []
})
export class HomeModule { }
