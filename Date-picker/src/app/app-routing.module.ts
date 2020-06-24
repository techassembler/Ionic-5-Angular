import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'date-picker',
    pathMatch: 'full'
  },
  {
    path: 'date-picker',
    loadChildren: () => import('./pages/date-picker/date-picker.module').then( m => m.DatePickerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
