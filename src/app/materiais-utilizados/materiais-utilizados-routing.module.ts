import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaisUtilizadosPage } from './materiais-utilizados.page';

const routes: Routes = [
  {
    path: '',
    component: MateriaisUtilizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriaisUtilizadosPageRoutingModule {}
