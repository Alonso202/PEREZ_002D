import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasAguaPage } from './noticias-agua.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasAguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasAguaPageRoutingModule {}
