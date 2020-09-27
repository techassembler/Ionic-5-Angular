import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assistive-touch',
    pathMatch: 'full'
  },
  {
    path: 'assistive-touch',
    loadChildren: () => import('./assistive-touch/assistive-touch.module').then(m => m.AssistiveTouchPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
