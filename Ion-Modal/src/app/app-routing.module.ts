import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'ion-modal',
    pathMatch: 'full'
  },
  {
    path: 'ion-modal',
    loadChildren: () => import('./pages/ion-modal/ion-modal.module').then( m => m.IonModalPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
