import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'swipable-segments',
    pathMatch: 'full'
  },
  {
    path: 'swipable-segments',
    loadChildren: () => import('./pages/swipable-segments/swipable-segments.module').then( m => m.SwipableSegmentsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
