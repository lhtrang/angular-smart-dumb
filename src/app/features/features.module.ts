import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'super-smart',
    pathMatch: 'full'
  },
  {
    path: 'super-smart',
    loadChildren: () => import('./super-smart-component/super-smart-component.module').then(m => m.SuperSmartComponentModule)
  },
  {
    path: 'smaller-smart',
    loadChildren: () => import('./smaller-smart-component/smaller-smart-component.module').then(m => m.SmallerSmartComponentModule)
  },
  {
    path: 'reusable',
    loadChildren: () => import('./reusable-component/reusable-component.module').then(m => m.ReusableComponentModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesModule {
}
