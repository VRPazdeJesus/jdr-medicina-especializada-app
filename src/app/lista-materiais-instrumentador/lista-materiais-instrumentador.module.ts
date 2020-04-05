import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMateriaisInstrumentadorPageRoutingModule } from './lista-materiais-instrumentador-routing.module';

import { ListaMateriaisInstrumentadorPage } from './lista-materiais-instrumentador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMateriaisInstrumentadorPageRoutingModule
  ],
  declarations: [ListaMateriaisInstrumentadorPage]
})
export class ListaMateriaisInstrumentadorPageModule {}
