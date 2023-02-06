import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  { path: 'services', component: ServiceComponent, title: 'Services' },
  { path: 'services/:id', component: ServiceDetailsComponent, title: 'Service Details' },
  // { path: ':seo', component: ServiceDetailsComponent, title: 'Service Details' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
