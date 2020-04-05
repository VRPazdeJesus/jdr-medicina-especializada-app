import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMateriaisInstrumentadorPage } from './lista-materiais-instrumentador.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMateriaisInstrumentadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMateriaisInstrumentadorPageRoutingModule {}
