import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheCirurgiaPageRoutingModule } from './detalhe-cirurgia-routing.module';

import { DetalheCirurgiaPage } from './detalhe-cirurgia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheCirurgiaPageRoutingModule
  ],
  declarations: [DetalheCirurgiaPage]
})
export class DetalheCirurgiaPageModule {}
