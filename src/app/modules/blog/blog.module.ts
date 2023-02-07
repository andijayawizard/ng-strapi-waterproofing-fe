import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { PipeModule } from 'src/app/shared/modules/pipe/pipe.module';


@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailsComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule, PipeModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
