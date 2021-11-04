import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'descripcion',
    loadChildren: () => import('./pages/descripcion/descripcion.module').then( m => m.DescripcionPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'noticias-agua',
    loadChildren: () => import('./pages/noticias-agua/noticias-agua.module').then( m => m.NoticiasAguaPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'form-foro',
    loadChildren: () => import('./pages/form-foro/form-foro.module').then( m => m.FormForoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'foro',
    loadChildren: () => import('./pages/foro/foro.module').then( m => m.ForoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'form-reg',
    loadChildren: () => import('./pages/form-reg/form-reg.module').then( m => m.FormRegPageModule),
    canActivate:[NoIngresadoGuard]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
