import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuWebsiteRoutingModule } from './menu-website-routing.module';
import { MenuWebsiteComponent } from './components/menu-website/menu-website.component';


@NgModule({
  declarations: [
    MenuWebsiteComponent
  ],
  imports: [
    CommonModule,
    MenuWebsiteRoutingModule
  ],
  exports: [MenuWebsiteComponent]
})
export class MenuWebsiteModule { }
