import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'ion-menu',
    pathMatch: 'full'
  },
  {
    path: 'ion-menu',
    loadChildren: () => import('./pages/ion-menu/ion-menu.module').then(m => m.IonMenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
