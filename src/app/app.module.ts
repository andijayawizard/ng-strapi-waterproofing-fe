import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './modules/blog/blog.module';
import { ProductModule } from './modules/product/product.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuWebsiteModule } from './modules/menu-website/menu-website.module';
import { ServiceModule } from './modules/service/service.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    ProductModule, BlogModule, MenuWebsiteModule, ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
