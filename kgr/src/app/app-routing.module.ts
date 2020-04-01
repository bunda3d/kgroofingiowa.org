import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'kitchensink',
    loadChildren: () => import('./modules/kitchensink/kitchensink.module').then(m => m.KitchensinkModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
