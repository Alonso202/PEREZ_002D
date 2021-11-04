import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormForoPage } from './form-foro.page';

const routes: Routes = [
  {
    path: '',
    component: FormForoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormForoPageRoutingModule {}
