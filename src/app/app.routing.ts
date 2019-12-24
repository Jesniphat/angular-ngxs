import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'new', pathMatch: 'full'},
  {
    path: 'new',
    loadChildren: () => import('./components/components.module').then(mod => mod.ComponentsModule)
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(mod => mod.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
