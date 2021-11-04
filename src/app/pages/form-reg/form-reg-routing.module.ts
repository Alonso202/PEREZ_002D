import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegPage } from './form-reg.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRegPageRoutingModule {}
