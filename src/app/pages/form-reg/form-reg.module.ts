import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegPageRoutingModule } from './form-reg-routing.module';

import { FormRegPage } from './form-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormRegPageRoutingModule
  ],
  declarations: [FormRegPage]
})
export class FormRegPageModule {}
