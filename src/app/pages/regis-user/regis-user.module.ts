import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisUserPageRoutingModule } from './regis-user-routing.module';

import { RegisUserPage } from './regis-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisUserPageRoutingModule
  ],
  declarations: [RegisUserPage]
})
export class RegisUserPageModule {}
