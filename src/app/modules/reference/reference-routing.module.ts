import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceComponent } from './components/reference/reference.component';

const routes: Routes = [
  { path: '', redirectTo: 'references', pathMatch: 'full' },
  { path: 'references', component: ReferenceComponent, title: 'References' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule { }
