import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fab-button',
    loadChildren: () => import('./pages/fab-button/fab-button.module').then(m => m.FabButtonPageModule)
  },
  {
    path: '',
    redirectTo: 'fab-button',
    pathMatch: 'full'
  },
  {
    path: 'fab-button',
    loadChildren: () => import('./pages/fab-button/fab-button.module').then(m => m.FabButtonPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
