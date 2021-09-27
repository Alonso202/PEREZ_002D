import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisUserPage } from './regis-user.page';

const routes: Routes = [
  {
    path: '',
    component: RegisUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisUserPageRoutingModule {}
