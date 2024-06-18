// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'rangliste',
        loadChildren: () => import('./pages/rangliste/rangliste.module').then(m => m.RanglistePageModule)
      },
      {
        path: 'statistik',
        loadChildren: () => import('./pages/statistik/statistik.module').then(m => m.StatistikPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./pages/profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'home-manager',
        loadChildren: () => import('./pages/home-manager/home-manager.module').then( m => m.HomeManagerPageModule)
      },
      {
        path: 'rangliste-manager',
        loadChildren: () => import('./pages/rangliste-manager/rangliste-manager.module').then( m => m.RanglisteManagerPageModule)
      }
    ]
  },
  {
    path: '**', // Gérer les routes inconnues (404)
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
