import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasAguaPageRoutingModule } from './noticias-agua-routing.module';

import { NoticiasAguaPage } from './noticias-agua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasAguaPageRoutingModule
  ],
  declarations: [NoticiasAguaPage]
})
export class NoticiasAguaPageModule {}
