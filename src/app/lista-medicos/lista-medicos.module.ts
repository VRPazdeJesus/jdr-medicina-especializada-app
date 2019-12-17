import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMedicosPageRoutingModule } from './lista-medicos-routing.module';

import { ListaMedicosPage } from './lista-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMedicosPageRoutingModule
  ],
  declarations: [ListaMedicosPage]
})
export class ListaMedicosPageModule {}
