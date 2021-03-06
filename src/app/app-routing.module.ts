import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'overview',
        loadChildren: './features/overview/overview.module#OverviewModule'
      },
      {
        path: 'locos',
        loadChildren: './features/locos/locos.module#LocosModule'
      },
      {
        path: 'companies',
        loadChildren: './features/companies/companies.module#CompaniesModule'
      },
      {
        path: 'pwagen',
        loadChildren: './features/pws/pws.module#PwsModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
