import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriaisUtilizadosPageRoutingModule } from './materiais-utilizados-routing.module';

import { MateriaisUtilizadosPage } from './materiais-utilizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriaisUtilizadosPageRoutingModule
  ],
  declarations: [MateriaisUtilizadosPage]
})
export class MateriaisUtilizadosPageModule {}
