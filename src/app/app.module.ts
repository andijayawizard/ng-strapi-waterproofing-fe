import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { ProjectModule } from './modules/project/project.module';
import { AboutModule } from './modules/about/about.module';
import { ReferenceModule } from './modules/reference/reference.module';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { ImageSlideModule } from './modules/image-slide/image-slide.module';
import { HomeModule } from './modules/home/home.module';
import { StoreModule } from '@ngrx/store';
import { ShopReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopNavComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, StoreModule.forRoot({
      // shop: ShopReducer
    }),
    EffectsModule.forRoot([ShopEffects]),
    ProductModule, BlogModule, MenuWebsiteModule, ServiceModule, ProjectModule, AboutModule, ReferenceModule, ImageSlideModule, HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
