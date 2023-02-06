import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceRoutingModule } from './reference-routing.module';
import { ReferenceComponent } from './components/reference/reference.component';
import { PipeModule } from 'src/app/shared/modules/pipe/pipe.module';


@NgModule({
  declarations: [
    ReferenceComponent
  ],
  imports: [
    CommonModule,
    ReferenceRoutingModule, PipeModule
  ]
})
export class ReferenceModule { }
