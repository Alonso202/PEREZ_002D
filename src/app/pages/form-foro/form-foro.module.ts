import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormForoPageRoutingModule } from './form-foro-routing.module';

import { FormForoPage } from './form-foro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormForoPageRoutingModule
  ],
  declarations: [FormForoPage]
})
export class FormForoPageModule {}
