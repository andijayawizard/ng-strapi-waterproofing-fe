import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './components/service/service.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { PipeModule } from 'src/app/shared/modules/pipe/pipe.module';


@NgModule({
  declarations: [
    ServiceComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule, PipeModule
  ]
})
export class ServiceModule { }
