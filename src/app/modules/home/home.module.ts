import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FeatureModule } from '../feature/feature.module';
import { FeatureComponent } from '../feature/components/feature/feature.component';


@NgModule({
  declarations: [
    HomeComponent, FeatureComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeatureModule
  ],
  exports: [FeatureComponent]
})
export class HomeModule { }
